const express = require('express');
const { createSalesProduct, findAll, findAllSalesById } = require('../services/salesServices');
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

router.get('/', async (_req, res) => {
  const { message } = await findAll();
  return res.status(200).json(message);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const result = await findAllSalesById(id);
  if (result.length === 0) {
    return res.status(404).json({ message: 'Sale not found' });
  }
  return res.status(200).json(result);
});

module.exports = router;
