const {
  createSale, setSalesProduct, getAllSales, getAllSalesById,
} = require('../models/salesModels');

const findAll = async () => {
  const products = await getAllSales();
  return { type: null, message: products };
};

const findAllSalesById = async (id) => {
  const salesById = await getAllSalesById(id);
  return salesById;
};

const createSalesProduct = async (sales) => {
  const insertId = await createSale();
  sales.forEach((sale) => {
    const { productId, quantity } = sale;
    setSalesProduct(insertId, productId, quantity);
  });
  return insertId;
};

module.exports = {
  findAll,
  findAllSalesById,
  createSalesProduct,
};
