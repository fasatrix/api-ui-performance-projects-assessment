import { expect, http, headers, createPet } from '../utils/common.util';
import { Pet, Pets, apiRes } from '../schemas/getSchemas';
import { status } from '../data/petData';
import { describe, Runnable } from 'mocha';

describe('API Testing - Petstore - Positive Test Flows', () => {
  describe('GET - Generic queries', () => {
    let response: ChaiHttp.Response;
    for (const s in status) {
      describe(`Get Pet by their status=${s}`, () => {
        before('HTTP Request', async () => {
          response = await http
              .get(`/pet/findByStatus?status=${s}`)
              .set(headers);
        });
        it('it should return the correct error code', () => {
          expect(response.status).to.eql(200);
        });
        it('it should return the correct schema (ajv checks all types and structures)', () => {
          expect(response.body).to.be.jsonSchema(Pets);
        });
      });
    }
  });
  describe('E2E Flow - Create, retrieve', () => {
    Runnable.prototype.retries(3);
    let createResponse: ChaiHttp.Response;
    let data: any;
    describe('Create a new Pet', () => {
      before('HTTP POST Request - Create a Pet', async () => {
        data = createPet(
            5,
            'BlueWhale',
            'home',
            'https://someUrl',
            status.sold
        );
        createResponse = await http.post('/pet').set(headers).send(data);
      });
      it('it should return the correct error code', () => {
        expect(createResponse.status).to.eql(200);
      });
      it('it should return the correct schema (ajv checks all types and structures)', () => {
        expect(createResponse.body).to.be.jsonSchema(Pet);
      });
      describe('Retrieve the newly create PET', () => {
        let retrieveResponse: ChaiHttp.Response;
        before('HTTP GET Request - Create a Pet', async () => {
          retrieveResponse = await http.get(`/pet/${data.id}`).set(headers);
        });
        it('it should return the correct error code', () => {
          expect(retrieveResponse.status).to.eql(200);
        });
        it('it should return the correct schema (ajv checks all types and structures)', () => {
          expect(retrieveResponse.body).to.be.jsonSchema(Pet);
        });
        it('it should have the correct name', () => {
          expect(retrieveResponse.body.name).to.be.eql(
              createResponse.body.name
          );
        });
        it('it should have the correct category', () => {
          expect(retrieveResponse.body.category.name).to.be.eql(
              createResponse.body.category.name
          );
        });
        it('it should have the correct status', () => {
          expect(retrieveResponse.body.status).to.be.eql(
              createResponse.body.status
          );
        });
        it('it should have the correct tag', () => {
          expect(retrieveResponse.body.tags[0].name).to.be.eql(
              createResponse.body.tags[0].name
          );
        });
      });
    });
  });
  describe('E2E Flow - Create, delete', () => {
    Runnable.prototype.retries(3);
    let createResponse: ChaiHttp.Response;
    let data: any;
    describe('Create a new Pet', () => {
      before('HTTP POST Request - Create a Pet', async () => {
        data = createPet(
            5,
            'BlueWhale',
            'home',
            'https://someUrl',
            status.sold
        );
        createResponse = await http.post('/pet').set(headers).send(data);
      });
      it('it should return the correct error code', () => {
        expect(createResponse.status).to.eql(200);
      });
      it('it should return the correct schema (ajv checks all types and structures)', () => {
        expect(createResponse.body).to.be.jsonSchema(Pet);
      });
      describe('Remove the newly create PET', () => {
        let removeResponse: ChaiHttp.Response;
        before('HTTP DELETE Request - Create a Pet', async () => {
          removeResponse = await http.delete(`/pet/${data.id}`).set(headers);
        });
        it('it should return the correct error code ', () => {
          expect(removeResponse.status).to.eql(200);
        });
        it('it should return the correct schema (ajv checks all types and structures )', () => {
          expect(removeResponse.body).to.be.jsonSchema(apiRes);
        });
        it('it should return the correct response code in the body', () => {
          expect(removeResponse.body.code).to.be.eql(200);
        });
        it('it should return the correct type', () => {
          expect(removeResponse.body.type).to.be.eql('unknown');
        });
        it('it should return the correct message', () => {
          expect(removeResponse.body.message).to.be.eql('5');
        });
      });
    });
  });
  describe('E2E Flow - Create, update', () => {
    Runnable.prototype.retries(3);
    let createResponse: ChaiHttp.Response;
    let data: any;
    describe('Create a new Pet', () => {
      before('HTTP POST Request - Create a Pet', async () => {
        data = createPet(
            6,
            'BlueWhale',
            'home',
            'https://someUrl',
            status.sold
        );
        createResponse = await http.post('/pet').set(headers).send(data);
      });
      it('it should return the correct error code', () => {
        expect(createResponse.status).to.eql(200);
      });
      it('it should return the correct schema (ajv checks all types and structures)', () => {
        expect(createResponse.body).to.be.jsonSchema(Pet);
      });
      describe('Update the create PET', () => {
        let updateResponse: ChaiHttp.Response;
        before('HTTP Update Request - Create a Pet', async () => {
          data.name = 'new BlueWhales';
          updateResponse = await http.put(`/pet`).set(headers).send(data);
        });
        it('it should return the correct error code ', () => {
          expect(updateResponse.status).to.eql(200);
        });
        it('it should return the correct schema (ajv checks all types and structures )', () => {
          expect(updateResponse.body).to.be.jsonSchema(Pet);
        });
        it('it should have the correct name', () => {
          expect(updateResponse.body.name).to.be.eql(data.name);
        });
        it('it should have the correct category', () => {
          expect(updateResponse.body.category.name).to.be.eql(
              data.category.name
          );
        });
        it('it should have the correct status', () => {
          expect(updateResponse.body.status).to.be.eql(data.status);
        });
        it('it should have the correct tag', () => {
          expect(updateResponse.body.tags[0].name).to.be.eql(data.tags[0].name);
        });
      });
    });
  });
});
