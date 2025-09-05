let products =  require('../database/products.json');


const getProducts = (req, res) => {
  try {
    const { name, price } = req.query; 

    let result = [...products];

    if (name) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(name.toLowerCase())
      );
    }
    if (price === "asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (price === "desc") {
      result.sort((a, b) => b.price - a.price);
    }

    res.status(200).json({
      success: true,
      total: result.length,
      data: result,
    });
  } catch (err) {
    console.error("Error en getProducts:", err.message);
    res.status(500).json({
      success: false,
      message: "Error al obtener productos",
    });
  }
};

const getProductById = (req, res) => {
  try {
    const { id } = req.params;
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Producto no encontrado" });
    }

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error al obtener producto",
    });
  }
};

const createProduct = (req, res) => {
  try {
    const { name, price } = req.body;

    if (!name || typeof name !== "string" || name.trim() === "") {
      return res.status(400).json({ success: false, message: "El nombre es obligatorio" });
    }

    if (isNaN(price) || Number(price) <= 0) {
      return res.status(400).json({ success: false, message: "El precio debe ser un número mayor a 0" });
    }

    const newProduct = {
      id: products.length ? products[products.length - 1].id + 1 : 1,
      name: name.trim(),
      price: Number(price),
    };

    products.push(newProduct);

    res.status(201).json({
      success: true,
      message: "Producto creado con éxito",
      data: newProduct,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error al crear producto",
    });
  }
};

const updateProduct = (req, res) => {
  try {
    const { id } = req.params;
    const { name, price } = req.body;

    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Producto no encontrado" });
    }

    if (name && (typeof name !== "string" || name.trim() === "")) {
      return res
        .status(400)
        .json({ success: false, message: "El nombre debe ser válido" });
    }

    if (price && (isNaN(price) || Number(price) <= 0)) {
      return res
        .status(400)
        .json({ success: false, message: "El precio debe ser mayor a 0" });
    }

    if (name) product.name = name.trim();
    if (price) product.price = Number(price);

    res.status(200).json({
      success: true,
      message: "Producto actualizado con éxito",
      data: product,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error al actualizar producto",
    });
  }
};

const deleteProduct = (req, res) => {
  try {
    const { id } = req.params;
    const index = products.findIndex((p) => p.id === parseInt(id));

    if (index === -1) {
      return res
        .status(404)
        .json({ success: false, message: "Producto no encontrado" });
    }

    const deleted = products.splice(index, 1);

    res.status(200).json({
      success: true,
      message: "Producto eliminado con éxito",
      data: deleted[0],
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error al eliminar producto",
    });
  }
};

module.exports = { getProducts, getProductById, createProduct, updateProduct, deleteProduct };