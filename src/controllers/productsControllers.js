const express = require('express');
const {
  allProducts, productsById, createProduct, updateProductById,
} = require('../services/productsServices');
const { nameValidation } = require('../middlewares/nameValidation');
const notFoundValidation = require('../middlewares/notFoundValidation');

const router = express.Router();

router.get('/', async (_req, res) => {
  const products = await allProducts();
  return res.status(200).json(products);
});

router.get('/:id', async (_req, res) => {
  const { id } = _req.params;
  const productById = await productsById(id);
  if (!productById) {
    const error = { message: 'Product not found' };
    return res.status(404).json(error);
  }
  return res.status(200).json(productById);
});

router.post('/', nameValidation, async (req, res) => {
  const product = req.body.name;
  const newProduct = await createProduct(product);
  return res.status(201).json(newProduct);
});

router.put('/:id', nameValidation, notFoundValidation, async (req, res) => {
  const { id } = req.params;
  const { name, quantity } = req.body;
  await updateProductById(name, quantity, id);
  return res.status(200).json({ id, name, quantity });
});

module.exports = router;
