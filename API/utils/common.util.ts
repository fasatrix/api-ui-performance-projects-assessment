import chaiHttp from 'chai-http';
import chai from 'chai';
import { status } from '../data/petData';
import Ajv from 'ajv';
chai.use(chaiHttp);
const ajv = new Ajv({ strictTuples: false });
chai.use(
  require('chai-json-schema-ajv').create({
    ajv
  })
);

const envConf = require('./config.json');
const env: string = process.env.ENV ?? 'test';
const testEnv = envConf[env];

export const urlToTest = process.env.TEST_URL ?? testEnv.url;
export const http = chai.request(urlToTest);

export const { expect } = chai;

export let headers = [
  'Content-Type: application/json',
  'accept : application/json',
  `api_key: ${process.env.API_KEY}`
];

export const createPet = (
  id: number,
  name: string,
  category: string,
  url: string,
  status: status
) => {
  return {
    id,
    category: {
      id,
      name: category
    },
    name,
    photoUrls: [url],
    tags: [
      {
        id,
        name
      }
    ],
    status
  };
};
