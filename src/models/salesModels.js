const camelize = require('camelize');
const connection = require('./connection');

const createSale = async () => {
  const querySale = 'INSERT INTO sales (date) VALUES (current_timestamp());';
  const [result] = await connection.execute(querySale);
  const { insertId } = result;
  return insertId;
};

const setSalesProduct = async (saleId, productId, quantity) => {
  const query = 'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?);';
  const [{ affectedRows }] = await connection.execute(query, [saleId, productId, quantity]);
  return affectedRows;
};

const getAllSales = async () => {
  const [result] = await connection.execute(
    `SELECT s.id AS saleId, s.date, sp.product_id, sp.quantity
      FROM sales AS s INNER JOIN sales_products AS sp WHERE s.id = sp.sale_id`,
  );
  return camelize(result);
};

const getAllSalesById = async (id) => {
  const [result] = await connection.execute(
    `SELECT s.date, sp.product_id, sp.quantity FROM sales AS s INNER JOIN
      sales_products AS sp WHERE id = ? AND s.id = sp.sale_id;`, [id],
  );
  return camelize(result);
};

module.exports = {
  setSalesProduct,
  createSale,
  getAllSales,
  getAllSalesById,
};
