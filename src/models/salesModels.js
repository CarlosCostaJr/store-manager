const connection = require('./connection');

const createSale = async () => {
  const querySale = 'INSERT INTO sales (date) VALUES (NOW());';
  const [result] = await connection.execute(querySale);
  const { insertId } = result;
  return insertId;
};

const setSalesProduct = async (saleId, productId, quantity) => {
  const query = 'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?);';
  const [{ affectedRows }] = await connection.execute(query, [saleId, productId, quantity]);
  return affectedRows;
};

module.exports = {
  setSalesProduct,
  createSale,
};
