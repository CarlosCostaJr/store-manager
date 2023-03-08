const express = require('express');
const { productsServices } = require('../services');

const router = express.Router();

router.get('/', async (_req, res) => {
  const allProducts = await productsServices.getAllProducts();
  return res.status(200).json(allProducts);
});

router.get('/:id', async (_req, res) => {
  const { id } = _req.params;
  const productById = await productsServices.getProductsById(id);
  return res.status(200).json(productById);
});

module.exports = router;
