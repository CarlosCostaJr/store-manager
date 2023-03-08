const connection = require('./connection');

const getAllProducts = async () => {
  const [result] = await connection.execute('SELECT * FROM products;');
  return result;
};

const getProductsById = async (id) => {
  const query = 'SELECT * FROM products WHERE id = ?;';
  const [result] = await connection.execute(query, [id]);
  return result;
};

module.exports = {
  getAllProducts,
  getProductsById,
};
