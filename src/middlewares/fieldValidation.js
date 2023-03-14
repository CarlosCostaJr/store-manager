const fieldValidation = (req, res, next) => {
  const sales = req.body;
  sales.forEach((sale) => {
    if (sale.productId === undefined) {
      throw res.status(400).json({ message: '"productId" is required' });
    }
    if (sale.quantity === undefined) {
      throw res.status(400).json({ message: '"quantity" is required' });
    }
  });
  next();
};

module.exports = {
  fieldValidation,
};
