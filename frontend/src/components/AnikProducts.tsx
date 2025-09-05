"use client"

import { useState, useMemo } from "react"
import productsData from "../database/products.json"
import { GlassCard, GlassCardContent } from "./ui/GlassCard"
import { FiltersBar } from "./FiltersBar"
import { TableProducts } from "./TableProducts"
import PaginationTable from "./PaginationTable"
import { ProductModal } from "./ProductModal"
import { DeleteConfirmModal } from "./DeleteConfirmModal"
import type { Product } from "../interfaces/products"
import { createProduct, updateProduct, deleteProduct } from "../services/products"
import { Button } from "flowbite-react"
import { Plus } from "lucide-react"

export default function AnikProducts() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")
  const [currentPage, setCurrentPage] = useState(1)

  const [products, setProducts] = useState<Product[]>(productsData.products as Product[])
  const [isProductModalOpen, setIsProductModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [productToDelete, setProductToDelete] = useState<Product | null>(null)

  const ITEMS_PER_PAGE = 5
  const categories = productsData.categories

  const filteredProducts = useMemo(() => {
    let filtered = [...products]

    if (searchTerm) {
      filtered = filtered.filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
    }

    if (selectedCategory && selectedCategory !== "Todos") {
      filtered = filtered.filter((p) => p.category === selectedCategory)
    }

    filtered.sort((a, b) => (sortOrder === "asc" ? a.price - b.price : b.price - a.price))

    return filtered
  }, [searchTerm, selectedCategory, sortOrder, products])

  // paginacion productos de la pagina
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)

  const handleCreateProduct = () => {
    setEditingProduct(null)
    setIsProductModalOpen(true)
  }

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product)
    setIsProductModalOpen(true)
  }

  const handleDeleteProduct = (product: Product) => {
    setProductToDelete(product)
    setIsDeleteModalOpen(true)
  }

  const handleSaveProduct = (productData: Omit<Product, "id">) => {
    if (editingProduct) {
      const updatedProducts = updateProduct(products, editingProduct.id!, productData)
      setProducts(updatedProducts)
    } else {
      const newProducts = createProduct(products, productData)
      setProducts(newProducts)
    }
    setIsProductModalOpen(false)
    setEditingProduct(null)
  }

  const handleConfirmDelete = () => {
    if (productToDelete) {
      const updatedProducts = deleteProduct(products, productToDelete.id!)
      setProducts(updatedProducts)
      setIsDeleteModalOpen(false)
      setProductToDelete(null)
    }
  }

  return (
    <div className="mx-5">
      <div className="mb-8 mt-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Gestion de Productos de Maquillaje 💄💋</h1>
            <p className="text-gray-600">Administra tu inventario de cosmeticos</p>
          </div>
          <Button onClick={handleCreateProduct} className="bg-purple-500 hover:bg-purple-600 text-white border-none">
            <Plus className="h-4 w-4 mr-2" />
            Nuevo Producto
          </Button>
        </div>
      </div>

      <GlassCard className="w-full ">
        <GlassCardContent className="p-6">
          <FiltersBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            categories={categories}
          />
        </GlassCardContent>
      </GlassCard>

      <GlassCard className="w-full my-5 ">
        <GlassCardContent className="p-6">
          <TableProducts products={currentProducts} onEdit={handleEditProduct} onDelete={handleDeleteProduct} />
        </GlassCardContent>
      </GlassCard>

      <GlassCard className="w-full my-5">
        <GlassCardContent>
          <PaginationTable
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            ITEMS_PER_PAGE={ITEMS_PER_PAGE}
            filteredAndSortedProducts={filteredProducts}
          />
        </GlassCardContent>
      </GlassCard>

      <ProductModal
        isOpen={isProductModalOpen}
        onClose={() => {
          setIsProductModalOpen(false)
          setEditingProduct(null)
        }}
        onSave={handleSaveProduct}
        product={editingProduct}
        categories={categories}
      />

      <DeleteConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false)
          setProductToDelete(null)
        }}
        onConfirm={handleConfirmDelete}
        product={productToDelete}
      />
    </div>
  )
}
