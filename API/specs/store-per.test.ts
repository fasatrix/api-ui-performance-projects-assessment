import { expect, http, headers, createPet } from '../utils/common.util';
import { apiRes } from '../schemas/getSchemas';
import { status } from '../data/petData';
import { describe, Runnable } from 'mocha';

describe('API Testing - Store - Positive Test Flows', () => {
  describe('Retrieve store inventory', () => {
    let response: ChaiHttp.Response;
    before('HTTP Request', async () => {
      response = await http.get(`/store/inventory`).set(headers);
    });
    it('it should return the correct  code', () => {
      expect(response.status).to.eql(200);
    });
    it('it should return a json body', () => {
      expect(response).to.be.json;
    });
  });
  describe('Create an Order', () => {
    let response: ChaiHttp.Response;
    const order = {
      id: 0,
      petId: 0,
      quantity: 0,
      shipDate: `${new Date().getTime()}`,
      status: 'placed',
      complete: true
    };
    before('HTTP Request', async () => {
      response = await http.post(`/store/order`).set(headers).send(order);
    });
    it('it should return the correct code', () => {
      expect(response.status).to.eql(200);
    });
    it('it should return a json body', () => {
      expect(response).to.be.json;
    });
    it('it should return with a valid id', () => {
      expect(response.body.id).to.be.a('number');
    });
    it('it should return with correct status', () => {
      expect(response.body.status).to.eql('placed');
    });
  });
  describe('E2E Flows - Create, Retrieve an Order ', () => {
    Runnable.prototype.retries(3);
    describe('Create an Order', () => {
      let createResponse: ChaiHttp.Response;
      before('HTTP Request', async () => {
        const order = {
          id: 123456789,
          petId: 0,
          quantity: 0,
          shipDate: `${new Date().getTime()}`,
          status: 'placed',
          complete: true
        };
        createResponse = await http
          .post('/store/order')
          .set(headers)
          .send(order);
      });
      it('it should return the correct  code', () => {
        expect(createResponse.status).to.eql(200);
      });
      it('it should return a json body', () => {
        expect(createResponse).to.be.json;
      });
      it('it should return with a valid id', () => {
        expect(createResponse.body.id).to.be.a('number');
      });
      it('it should return with correct status', () => {
        expect(createResponse.body.status).to.eql('placed');
      });
      describe('Retrieve an Order', () => {
        let retrieveResponse: ChaiHttp.Response;
        before('HTTP Request', async () => {
          retrieveResponse = await http
            .get('/store/order/123456789')
            .set(headers);
        });
        it('it should return the correct code', () => {
          expect(retrieveResponse.status).to.eql(200);
        });
        it('it should return a json body', () => {
          expect(retrieveResponse).to.be.json;
        });
        it('it should return with a valid id', () => {
          expect(retrieveResponse.body.id).to.eql(123456789);
        });
        it('it should return with correct status', () => {
          expect(retrieveResponse.body.status).to.eql('placed');
        });
      });
    });
  });
  describe('E2E Flows - Create, Delete an Order ', () => {
    Runnable.prototype.retries(3);
    describe('Create an Order', () => {
      let createResponse: ChaiHttp.Response;
      before('HTTP Request', async () => {
        const order = {
          id: 99999,
          petId: 0,
          quantity: 0,
          shipDate: `${new Date().getTime()}`,
          status: 'placed',
          complete: true
        };
        createResponse = await http
          .post('/store/order')
          .set(headers)
          .send(order);
      });
      it('it should return the correct  code', () => {
        expect(createResponse.status).to.eql(200);
      });
      it('it should return a json body', () => {
        expect(createResponse).to.be.json;
      });
      it('it should return with a valid id', () => {
        expect(createResponse.body.id).to.be.a('number');
      });
      it('it should return with correct status', () => {
        expect(createResponse.body.status).to.eql('placed');
      });
      describe('Delete an Order', () => {
        let retrieveResponse: ChaiHttp.Response;
        before('HTTP Request', async () => {
          retrieveResponse = await http
            .delete('/store/order/99999')
            .set(headers);
        });
        it('it should return the correct code', () => {
          expect(retrieveResponse.status).to.eql(200);
        });
        it('it should return a json body', () => {
          expect(retrieveResponse).to.be.json;
        });
        it('it should return the correct schema (ajv checks all types and structures)', () => {
          expect(retrieveResponse.body).to.be.jsonSchema(apiRes);
        });
        it('it should return with correct message', () => {
          expect(retrieveResponse.body.message).to.eql('99999');
        });
      });
    });
  });
});
