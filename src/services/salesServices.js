const { createSale, setSalesProduct } = require('../models/salesModels');

// const getAllSales = async () => {
//   const allSales = await salesModels.getAllSales();
//   return allSales;
// };

// const saleById = async (id) => {
//   const [sale] = await getSaleById(id);
//   return sale;
// };

const createSalesProduct = async (sales) => {
  const insertId = await createSale();
  sales.forEach((sale) => {
    const { productId, quantity } = sale;
   setSalesProduct(insertId, productId, quantity);
  });
  return insertId;
};

module.exports = {
  // getAllSales,
  // saleById,
  createSalesProduct,
};
