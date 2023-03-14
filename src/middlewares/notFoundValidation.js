const { productsById } = require('../services/productsServices');

const notFoundValidation = async (req, res, next) => {
  const sales = req.body;
  const promises = sales.map(({ productId }) => productsById(productId));
  const products = await Promise.all(promises);
  for (let i = 0; i < products.length; i += 1) {
    if (!products[i]) {
      return res.status(404).json({ message: 'Product not found' });
    }
  }
  next();
};

module.exports = notFoundValidation;
