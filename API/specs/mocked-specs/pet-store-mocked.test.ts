import { expect, http, headers, createPet } from '../../utils/common.util';
import { Pet } from '../../schemas/getSchemas';
import { describe, Runnable } from 'mocha';
import { statuses } from '../../data/petData';
import { startMockServer, stopMockServer } from '../../mockServer';
import { petPOST } from '../../data/mocks-data/pet.mocked.data';

describe('API Testing - Pet - Mocked Test Flows', () => {
  describe('Create a Pet', () => {
    Runnable.prototype.retries(3);
    let createResponse: ChaiHttp.Response;
    let data: any;
    describe('Create a new Pet', () => {
      before('HTTP POST Request - Create a Pet', async () => {
        await startMockServer(petPOST);
        data = createPet(
          6,
          'BlueWhale',
          'home',
          'https://someUrl',
          statuses.sold
        );
        createResponse = await http.post('/pet').set(headers).send(data);
      });
      after('Stop the mock server', async () => {
        await stopMockServer();
      });
      it('it should return the correct error code', () => {
        expect(createResponse.status).to.eql(200);
      });
      it('it should return the correct schema (ajv checks all types and structures)', () => {
        expect(createResponse.body).to.be.jsonSchema(Pet);
      });
    });
  });
});
