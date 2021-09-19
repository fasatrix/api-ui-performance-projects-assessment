import hp from '../pages/header.page';
import { url } from '../utils/common';

fixture`Search Function`.page`${url}`;

test('As a Customer I should be able to see preview results (under the search box) of the searched product keyword', async (t) => {
  await hp.productPreviewResults('T-shirt');
});

test('As a Customer I should be able to see the preview of multiple product matching the keyword "Dress"', async (t) => {
  await hp.searchProductsByKeyWord('Dress');
  await t.click(hp.searchButton);
  const numberOfProduct = await hp.productListCount();
  await t
    .expect(numberOfProduct)
    .eql(7)
    .expect(hp.searchResultsNumber.innerText)
    .contains(7);
});

test('As a Customer I should be able to see a product detail page after clicking on a product ("Blouse") following a key search', async (t) => {
  await hp.searchProductsByKeyWord('Dress');
  await hp.selectProductByPosition(7);
  const visible = await hp.productWithNameIsVisible('Blouse');
  await t.expect(visible).ok();
});

test('As a customer I should see zero results and the "Please enter a search keyword" message, if searching by not entering any keyword', async (t) => {
  await t
    .click(hp.searchButton)
    .expect(hp.searchResultsNumber.innerText)
    .contains(0)
    .expect(hp.searchResultsMessage.innerText)
    .contains('Please enter a search keyword');
});

test('As a customer I should see zero results and the "No results were found for your search " "" message, if searching with an empty string keyword', async (t) => {
  await hp.searchProductsByKeyWord(' ');
  await t
    .click(hp.searchButton)
    .expect(hp.searchResultsNumber.innerText)
    .contains(0)
    .expect(hp.searchResultsMessage.innerText)
    .contains('No results were found for your search');
});
