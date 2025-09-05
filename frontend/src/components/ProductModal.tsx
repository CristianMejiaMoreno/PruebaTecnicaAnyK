import type React from "react"
import { useState, useEffect } from "react"
import { Modal } from "./ui/Modal"
import { Button } from "flowbite-react"
import type { Product } from "../interfaces/products"
import { validateProductForm, sanitizeProductData } from "../services/validaciones.ts"

interface ProductModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (productData: Omit<Product, "id">) => void
  product?: Product | null
  categories: string[]
}

export function ProductModal({ isOpen, onClose, onSave, product, categories }: ProductModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    category: "",
    price: "",
    inStock: true,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        brand: product.brand,
        category: product.category,
        price: product.price.toString(),
        inStock: product.inStock,
      })
    } else {
      setFormData({
        name: "",
        brand: "",
        category: "",
        price: "",
        inStock: true,
      })
    }
    setErrors({})
  }, [product, isOpen])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const validation = validateProductForm(formData, [], product)
    if (!validation.isValid) {
      setErrors(validation.errors)
      return
    }

    const sanitizedData = sanitizeProductData(formData)
    onSave(sanitizedData)
    onClose()
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={product ? "Editar Producto" : "Crear Nuevo Producto"}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nombre del Producto *</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Ej: Base de maquillaje"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Marca *</label>
          <input
            type="text"
            value={formData.brand}
            onChange={(e) => handleInputChange("brand", e.target.value)}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
              errors.brand ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Ej: MAC, Maybelline"
          />
          {errors.brand && <p className="text-red-500 text-xs mt-1">{errors.brand}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Categoría *</label>
          <select
            value={formData.category}
            onChange={(e) => handleInputChange("category", e.target.value)}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
              errors.category ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Seleccionar categoría</option>
            {categories
              .filter((cat) => cat !== "Todos")
              .map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
          </select>
          {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Precio *</label>
          <input
            type="number"
            step="0.01"
            min="0"
            value={formData.price}
            onChange={(e) => handleInputChange("price", e.target.value)}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
              errors.price ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="0.00"
          />
          {errors.price && <p className="text-red-500 text-xs mt-1">{errors.price}</p>}
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="inStock"
            checked={formData.inStock}
            onChange={(e) => handleInputChange("inStock", e.target.checked)}
            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
          />
          <label htmlFor="inStock" className="ml-2 block text-sm text-gray-700">
            Producto en stock
          </label>
        </div>

        <div className="flex justify-end space-x-2 pt-4">
          <Button type="button" onClick={onClose} className="bg-gray-500 hover:bg-gray-600 text-white border-none">
            Cancelar
          </Button>
          <Button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white border-none">
            {product ? "Actualizar" : "Crear"} Producto
          </Button>
        </div>
      </form>
    </Modal>
  )
}
