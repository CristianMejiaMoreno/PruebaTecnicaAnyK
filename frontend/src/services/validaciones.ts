import { FormData, Product } from "../interfaces/products";

export const validateProductForm = (
  formData: FormData,
  products: Product[],
  editingProduct: Product | null = null
) => {
  const errors: Partial<Record<keyof FormData, string>> = {};

  if (!formData.name.trim()) {
    errors.name = "El nombre es obligatorio";
  } else {
    const existingProduct = products.find(
      (p) =>
        p.name.toLowerCase() === formData.name.trim().toLowerCase() &&
        (!editingProduct || p.id !== editingProduct.id)
    );
    if (existingProduct) {
      errors.name = "Ya existe un producto con este nombre";
    }
  }

  if (!formData.price || Number.parseFloat(formData.price as string) <= 0) {
    errors.price = "El precio debe ser mayor a 0";
  }

  if (!formData.category) {
    errors.category = "La categoría es obligatoria";
  }

  if (!formData.brand.trim()) {
    errors.brand = "La marca es obligatoria";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

export const sanitizeProductData = (formData: FormData): Product => {
  return {
    name: formData.name.trim(),
    price: Number.parseFloat(formData.price as string),
    category: formData.category,
    brand: formData.brand.trim(),
    inStock: formData.inStock,
  };
};
