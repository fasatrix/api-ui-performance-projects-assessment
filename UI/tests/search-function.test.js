import hp from '../pages/header.page';
import pd from '../pages/product-details.page';
import { url } from '../utils/common';

fixture`Search Function`.page`${url}`;

test('As a Customer I should be able to see a preview (under the search box) of results while typing a keyword in the searchbox', async (t) => {
  await hp.productPreviewResults('T-shirt');
});

test('As a Customer I should be able to see the preview of multiple products matching while typing the "Dress" keyword', async (t) => {
  await hp.searchProductsByKeyWord('Dress');
  await t.click(hp.searchButton);
  const numberOfProduct = await hp.productListCount();
  await t
    .expect(numberOfProduct)
    .eql(7)
    .expect(hp.searchResultsNumber.innerText)
    .contains(7);
});

test('As a Customer I should be able to see the product details page after clicking on "Blouse" from the product preview results', async (t) => {
  await hp.searchProductsByKeyWord('Dress');
  await hp.selectProductByPosition(7);
  const visible = await pd.productWithNameIsVisible('Blouse');
  await t.expect(visible).ok();
});

test('As a customer I should see zero results and the "Please enter a search keyword" message, if searching with no keywords', async (t) => {
  await t
    .click(hp.searchButton)
    .expect(hp.searchResultsNumber.innerText)
    .contains(0)
    .expect(hp.searchResultsMessage.innerText)
    .contains('Please enter a search keyword');
});

test('As a customer I should see zero results and the "No results were found for your search \' \'" message, if searching with an empty string keyword', async (t) => {
  await hp.searchProductsByKeyWord(' ');
  await t
    .click(hp.searchButton)
    .expect(hp.searchResultsNumber.innerText)
    .contains(0)
    .expect(hp.searchResultsMessage.innerText)
    .contains('No results were found for your search');
});
