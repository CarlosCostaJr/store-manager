const { salesModels } = require('../models');

const getAllSales = async () => {
  const allSales = await salesModels.getAllSales();
  return allSales;
};

const getSaleById = async (id) => {
  const [sale] = await salesModels.getSaleById(id);
  return sale;
};

const createSalesProduct = async (sales) => {
  const insertId = await salesModels.createSale();
  sales.forEach((sale) => {
    const { productId, quantity } = sale;
   return salesModels.createSalesProduct(insertId, productId, quantity);
  });
  return insertId;
};

module.exports = {
  getAllSales,
  getSaleById,
  createSalesProduct,
};
