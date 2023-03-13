const express = require('express');
const { salesServices } = require('../services');
const { salesValidation } = require('./middlewares/salesValidation');

const router = express.Router();

router.post('/', salesValidation, async (req, res) => {
  const sales = req.body;
  const createSale = await salesServices.createSalesProduct(sales);
  return res.status(201).json({
    id: createSale,
    itemSold: sales,
  });
});

router.get('/', async (_req, res) => {
  const allSales = await salesServices.getAllSales();
  return res.status(200).json(allSales);
});

router.get('/:id', async (_req, res) => {
  const { id } = _req.params;
  const salesById = await salesServices.getSaleById(id);
  if (!salesById) {
    const error = { message: 'Sale not found' };
    return res.status(404).json(error);
  }
  return res.status(200).json(salesById);
});

module.exports = router;
