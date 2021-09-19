import { expect, http, headers } from '../utils/common.util';
import { invalidIds404Response, invalidIds415Response, invalidIds400Response } from '../data/petData'
import {apiRes} from "../schemas/getSchemas";

describe('API Testing - Petstore - Negative Test Flows', ()=>{
    for (const id of invalidIds404Response){
        describe(`HTTP POST 404 - Test Scenario: ${id}`, ()=>{
            let response: ChaiHttp.Response;
            before('HTTP Request', async () => {
                response = await http
                    .post(`/pet/${id}`)
                    .set(headers);
            });
            it('it should return the correct error code', () => {
                expect(response.status).to.eql(404);
            });
            it('it should return the correct schema (ajv checks all types and structures)', () => {
                expect(response.body).to.be.jsonSchema(apiRes);
            });
        });
    }
    for (const id of invalidIds415Response){
        describe(`HTTP - POST 415 - Test Scenario: ${id}`, ()=>{
            let response: ChaiHttp.Response;
            before('HTTP Request', async () => {
                response = await http
                    .post(`/pet/${id}`)
                    .set(headers);
            });
            it('it should return the correct error code', () => {
                expect(response.status).to.eql(415);
            });
            it('it should return the correct schema (ajv checks all types and structures)', () => {
                expect(response.body).to.be.jsonSchema(apiRes);
            });
        });
    }
    for (const id of invalidIds400Response){
        describe(`HTTP - POST 400 - Test Scenario: ${id}`, ()=>{
            let response: ChaiHttp.Response;
            before('HTTP Request', async () => {
                response = await http
                    .post(`/pet/${id}`)
                    .set(headers);
            });
            it('it should return the correct error code', () => {
                expect(response.status).to.eql(400);
            });
            it('it should return the correct schema (ajv checks all types and structures)', () => {
                expect(response.body).to.be.jsonSchema(apiRes);
            });
        });
    }
    describe(`HTTP - PUT 415 - Unsupported media type Test Scenario`, ()=>{
        let response: ChaiHttp.Response;
        before('HTTP Request', async () => {
            response = await http
                .put(`/pet`)
                .send('')
                .set(headers);
        });
        it('it should return the correct error code', () => {
            expect(response.status).to.eql(415);
        });
        it('it should return the correct schema (ajv checks all types and structures)', () => {
            expect(response.body).to.be.jsonSchema(apiRes);
        });
    });

})