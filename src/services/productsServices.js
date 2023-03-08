const { productsModels } = require('../models');

const getAllProducts = async () => {
  const allProducts = await productsModels.getAllProducts();
  return allProducts;
};

const getProductsById = async (id) => {
  const [product] = await productsModels.getProductsById(id);

  if (!product) {
    const error = {
      code: 'notFound',
      message: 'Product not found',
    };
    return error;
  }
  return product;
};

module.exports = {
  getAllProducts,
  getProductsById,
};
