const { productsModels } = require('../models');

const getAllProducts = async () => {
  const allProducts = await productsModels.getAllProducts();
  return allProducts;
};

const getProductsById = async (id) => {
  const [product] = await productsModels.getProductsById(id);
  return product;
};

module.exports = {
  getAllProducts,
  getProductsById,
};
