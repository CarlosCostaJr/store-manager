const {
  getAllProducts, getProductsById, setProduct, updateProduct,
} = require('../models/productsModels');

const allProducts = async () => {
  const products = await getAllProducts();
  return products;
};

const productsById = async (id) => {
  const [product] = await getProductsById(id);
  return product;
};

const updateProductById = async (name, quantity, id) => {
  await productsById(id);
  const result = await updateProduct(name, quantity, id);
  return result;
};

const createProduct = async (product) => setProduct(product);

module.exports = {
  allProducts,
  productsById,
  createProduct,
  updateProductById,
};
