const { getAllProducts, getProductsById, setProduct } = require('../models/productsModels');

const allProducts = async () => {
  const products = await getAllProducts();
  return products;
};

const productsById = async (id) => {
  const [product] = await getProductsById(id);
  return product;
};

const createProduct = async (product) => setProduct(product);

module.exports = {
  allProducts,
  productsById,
  createProduct,
};
