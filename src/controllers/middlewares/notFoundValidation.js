const { productsServices } = require('../../services');

const notFoundValidation = async (req, res, next) => {
  const sales = req.body;
  sales.forEach(async ({ productId }) => {
    const productById = await productsServices.getProductsById(productId);
    if (!productById) throw res.status(404).json({ message: 'Product not found' });
  });

  next();
};

module.exports = notFoundValidation;
