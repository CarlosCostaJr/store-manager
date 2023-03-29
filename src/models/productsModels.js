const connection = require('./connection');

const getAllProducts = async () => {
  const [rows] = await connection.execute('SELECT * FROM products;');
  if (rows.length) {
    return rows.map((row) => ({ id: row.id, name: row.name }));
  }
};

const getProductsById = async (id) => {
  const query = 'SELECT * FROM products WHERE id = ?;';
  const [result] = await connection.execute(query, [id]);
  return result;
};

const setProduct = async (product) => {
  const query = 'INSERT INTO products (name) VALUES (?);';
  const [{ insertId }] = await connection.execute(query, [product]);
  const [newProduct] = await getProductsById(insertId);
  return { ...newProduct };
};

const updateProduct = async (name, quantity, id) => {
  const query = 'UPDATE products SET name = ?, quantity = ? WHERE id = ?;';
  await connection.execute(query, [name, quantity, id]);
  const result = { insertId: id, name, quantity };
  return result;
};

module.exports = {
  getAllProducts,
  getProductsById,
  setProduct,
  updateProduct,
};
