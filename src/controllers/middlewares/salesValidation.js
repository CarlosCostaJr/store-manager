/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable no-restricted-syntax */
/* eslint-disable complexity */

const salesValidation = (req, res, next) => {
  const sales = req.body;
  for (const sale of sales) {
    if (sale.productId === undefined) {
      return res.status(400).json({ message: '"productId" is required' });
    }
    if (sale.quantity === undefined) {
      return res.status(400).json({ message: '"quantity" is required' });
    }
    if (typeof sale.quantity === 'string' || sale.quantity < 1) {
      return res.status(422).json(
        { message: '"quantity" must be greater than or equal to 1' },
      );
    }
  }
  next();
};

module.exports = {
  salesValidation,
};
