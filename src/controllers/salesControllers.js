const express = require('express');
const { createSalesProduct } = require('../services/salesServices');
const { fieldValidation } = require('../middlewares/fieldValidation');
const notFoundValidation = require('../middlewares/notFoundValidation');
const { salesValidation } = require('../middlewares/salesValidation');

const router = express.Router();

router.post('/', salesValidation, fieldValidation, notFoundValidation, async (req, res) => {
  const sales = req.body;
  const createSale = await createSalesProduct(sales);
  return res.status(201).json({
    id: createSale,
    itemsSold: sales,
  });
});

// router.get('/', async (_req, res) => {
//   const allSales = await salesServices.getAllSales();
//   return res.status(200).json(allSales);
// });

// router.get('/:id', async (_req, res) => {
//   const { id } = _req.params;
//   const salesById = await salesServices.getSaleById(id);
//   if (!salesById) {
//     const error = { message: 'Sale not found' };
//     return res.status(404).json(error);
//   }
//   return res.status(200).json(salesById);
// });

module.exports = router;
