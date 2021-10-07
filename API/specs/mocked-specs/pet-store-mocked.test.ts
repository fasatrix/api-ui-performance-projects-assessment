import { expect, http, headers, createPet } from '../../utils/common.util';
import { Pet } from '../../schemas/getSchemas';
import { describe } from 'mocha';
import { statuses } from '../../data/petData';
import {startMockServer, startMockServerWithExpectations, stopMockServer} from '../../mockServer';
import {petPOST, createADog, createACat} from '../../data/mocks-data/pet.mocked.data';
import {client, port} from "../../mockServer";

describe('API Testing - Pet - Mocked Test Flows', () => {
  describe('Create a Pet', () => {
    let createResponse: ChaiHttp.Response;
    let data: any;
    before('Start the Mock Server', async () => {
      await startMockServerWithExpectations(petPOST);
    });
    after('Stop the mock server', async () => {
      await stopMockServer();
    });
    describe('Create a new Pet', () => {
      before('HTTP POST Request - Create a Pet', async () => {
        data = createPet(
          6,
          'BlueWhale',
          'home',
          'https://someUrl',
          statuses.sold
        );
        createResponse = await http.post('/pet').set(headers).send(data);
      });
      it('it should return the correct error code', () => {
        expect(createResponse.status).to.eql(200);
      });
      it('it should return the correct schema (ajv checks all types and structures)', () => {
        expect(createResponse.body).to.be.jsonSchema(Pet);
      });
      it('it should return with an id equal to 6', () => {
        expect(createResponse.body.id).to.eql(6);
      });
    });
  });
  describe('Create Pets', () => {
    before('Start the Mock Server and Inject Data', async () => {
      await startMockServer();
    });
    after('Stop the mock server', async () => {
      await stopMockServer();
    });
    let createResponse: ChaiHttp.Response;
    let data: any;
    describe('Create a new Dog', () => {
      before('Inject Data for Dog', async () =>{
        await client('localhost', port).mockAnyResponse(createADog)
      });
      before('HTTP POST Request - Create a Pet', async () => {
        data = createPet(
            7,
            'Wally',
            'Dog',
            'https://someUrl',
            statuses.available
        );
        createResponse = await http.post('/pet').set(headers).send(data);
      });
      it('it should return the correct error code', () => {
        expect(createResponse.status).to.eql(200);
      });
      it('it should return the correct schema (ajv checks all types and structures)', () => {
        expect(createResponse.body).to.be.jsonSchema(Pet);
      });
      it('it should return with an id equal to 7', () => {
        expect(createResponse.body.id).to.eql(7);
      });
      it('it should be a dog', () => {
        expect(createResponse.body.category.name).to.be.eql('Dog');
      });
    });
    describe('Create a new Cat', () => {
      before('Inject Data for Dog', async () =>{
        await client('localhost', port).mockAnyResponse(createACat)
      });
      before('HTTP POST Request - Create a Pet', async () => {
        data = createPet(
            8,
            'Tiddle',
            'Cat',
            'https://someUrl',
            statuses.available
        );
        createResponse = await http.post('/pet').set(headers).send(data);
      });
      it('it should return the correct error code', () => {
        expect(createResponse.status).to.eql(200);
      });
      it('it should return the correct schema (ajv checks all types and structures)', () => {
        expect(createResponse.body).to.be.jsonSchema(Pet);
      });
      it('it should return with an id equal to 8', () => {
        expect(createResponse.body.id).to.eql(8);
      });
      it('it should be a cat', () => {
        expect(createResponse.body.category.name).to.be.eql('Cat');
      });
    });
  });
});
