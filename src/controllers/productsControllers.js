const express = require('express');
const { productsServices } = require('../services');
const { validateName } = require('./middlewares/nameValidation');

const router = express.Router();

router.get('/', async (_req, res) => {
  const allProducts = await productsServices.getAllProducts();
  console.log(allProducts);
  return res.status(200).json(allProducts);
});

router.get('/:id', async (_req, res) => {
  const { id } = _req.params;
  const productById = await productsServices.getProductsById(id);
  if (!productById) {
    const error = { message: 'Product not found' };
    return res.status(404).json(error);
  }
  return res.status(200).json(productById);
});

router.post('/', validateName, async (req, res) => {
  const product = req.body.name;
  const newProduct = await productsServices.createProduct(product);
  return res.status(201).json(newProduct);
});

module.exports = router;
