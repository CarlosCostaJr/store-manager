const sinon = require('sinon');
const { expect } = require('chai');

const { getAllProducts, getProductsById, setProduct } = require('../../../src/models/productsModels');
const connection = require('../../../src/models/connection');

describe('Cobertuda de testes de productModels', function () {
  describe('getAllProducts', function () {
    before(async function () {
      const execute = [
        { id: 1, name: 'Martelo de Thor' },
        { id: 2, name: 'Traje de encolhimento' },
        { id: 3, name: 'Escudo do Capitão América' }
      ];
      const rows = execute.map(item => ({ id: item.id, name: item.name }));
      sinon.stub(connection, 'execute').resolves([rows]);
    });

    after(async function () {
      connection.execute.restore();
    });

    it('com o tipo array', async function () {
      const response = await getAllProducts();
      expect(response).to.be.a('array');
    });

    it('com sucesso', async function () {
      const expected = [
        { id: 1, name: 'Martelo de Thor' },
        { id: 2, name: 'Traje de encolhimento' },
        { id: 3, name: 'Escudo do Capitão América' }
      ];
      const response = await getAllProducts();
      expect(response).to.deep.equal(expected);
    });
  });

  describe('setProduct', function () {
    beforeEach(async function () {
      this.mockConnection = {
        execute: sinon.stub().resolves([{ id: 4, name: 'ProdutoX' }])
      };
    });

    afterEach(async function () {
      sinon.restore();
    });

    const payload = "ProdutoX";
    const expected = { id: 4, name: 'ProdutoX' };

    it('com o tipo object', async function () {
      const response = await setProduct(payload, this.mockConnection);
      expect(response).to.be.a('object');
    });

    it('com sucesso', async function () {
      const payload = 'ProdutoX';
      const response = await setProduct(payload);
      const expected = { id: response.id, name: payload };
      expect(response).to.deep.equal(expected);
    });

    it('retorna undefined quando não há produtos cadastrados', async function () {
      sinon.stub(connection, 'execute').resolves([[]]);
      const response = await getAllProducts();
      expect(response).to.be.undefined;
      connection.execute.restore();
    });
  });
});

