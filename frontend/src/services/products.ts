import type { Product } from "../interfaces/products"

export const createProduct = (products: Product[], productData: Omit<Product, "id">): Product[] => {
  const validIds = products.filter((p) => p.id != null).map((p) => p.id!)
  const newProduct: Product = {
    ...productData,
    id: validIds.length > 0 ? Math.max(...validIds) + 1 : 1,
  }
  return [...products, newProduct]
}

export const updateProduct = (products: Product[], productId: number, productData: Omit<Product, "id">): Product[] => {
  return products.map((p) => (p.id === productId ? { ...productData, id: productId } : p))
}

export const deleteProduct = (products: Product[], productId: number): Product[] => {
  return products.filter((p) => p.id !== productId)
}

export const filterProducts = (products: Product[], searchTerm: string, selectedCategory: string): Product[] => {
  return products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "Todos" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })
}

export const sortProductsByPrice = (products: Product[], sortOrder: "asc" | "desc"): Product[] => {
  return [...products].sort((a, b) => {
    return sortOrder === "asc" ? a.price - b.price : b.price - a.price
  })
}

export const paginateProducts = (products: Product[], currentPage: number, itemsPerPage: number): Product[] => {
  const startIndex = (currentPage - 1) * itemsPerPage
  return products.slice(startIndex, startIndex + itemsPerPage)
}
