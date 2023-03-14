const sinon = require('sinon');
const { expect } = require('chai');
const { createSale, setSalesProduct } = require('../../../src/models/salesModels');
const connection = require('../../../src/models/connection');

describe('createSale', () => {
  let connectionStub;

  beforeEach(() => {
    connectionStub = sinon.stub(connection, 'execute');
  });

  afterEach(() => {
    connectionStub.restore();
  });

  it('Deve criar uma venda e retornar seu ID', async () => {
    connectionStub.resolves([{ insertId: 1 }]);
    const saleId = await createSale();
    expect(saleId).to.equal(1);
  });
  // describe('setSalesProduct', () => {
  //   it('deve inserir a venda em sales_products', async () => {
  //     const mockQuery = 'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?);';
  //     const mockParams = [1, 2, 3];
  //     const response = await setSalesProduct(...mockParams);
  //     const stub = sinon.stub(connection, 'execute').resolves(1);
  //     expect(response).to.deep.equal(1)
  //   });
  // });
});
