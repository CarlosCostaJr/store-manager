const { expect } = require("chai");
const sinon = require("sinon");
const productsModels = require('../../../src/models/productsModels');
const productsServices = require('../../../src/services/productsServices');
const { getProducts } = require('../../mocks/responseMock');

describe("Teste de unidade de products.service", function () {
  after(sinon.restore);
  describe("Testes relacionados a função GET", function () {
    it("Recuperando lista de todos os produtos", async function () {
      sinon.stub(productsModels, "getAllProducts").resolves(getProducts);
      sinon.stub(productsServices, "allProducts").resolves(getProducts);
      const result = await productsServices.allProducts();
      expect(result).to.deep.equal(getProducts);
    });
  });
});
