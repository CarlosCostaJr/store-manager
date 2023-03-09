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

const createProduct = async (product) => {
  const query = 'INSERT INTO products (name) VALUES (?);';
  const [{ insertId }] = await connection.execute(query, [product]);
  const [newProduct] = await getProductsById(insertId);
  return newProduct;
};

module.exports = {
  getAllProducts,
  getProductsById,
  createProduct,
};
