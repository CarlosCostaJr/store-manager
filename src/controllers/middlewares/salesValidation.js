const salesValidation = (req, res, next) => {
  const sales = req.body;
  sales.forEach((sale) => {
    if (typeof sale.quantity === 'string' || sale.quantity < 1) {
      throw res.status(422).json(
        { message: '"quantity" must be greater than or equal to 1' },
      );
    }
  });
  next();
};

module.exports = {
  salesValidation,
};
