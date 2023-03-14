const sinon = require('sinon');
const { expect } = require('chai');

const { getAllProducts, getProductsById, setProduct } = require('../../../src/models/productsModels');
const connection = require('../../../src/models/connection');

describe('Cobertuda de testes de productModels', function () {
  describe('Listar todos os produtos', function () {
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
});
