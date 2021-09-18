import { Selector, t } from 'testcafe';

class Ul {
  constructor(elm) {
    this.div = Selector('body > div.ac_results');
    this.field = this.div.find(`${elm}`);
  }
}

class HeaderPage {
  constructor() {
    this.search = Selector('#search_query_top');
    this.ul = new Ul('ul');
    this.li = this.ul.field.find('li');
    this.productList = Selector('#product_list > li');

    this.searchButton = Selector('#searchbox > button');
    this.searchResultsNumber = Selector(
      '#center_column > h1 > span.heading-counter'
    );
    this.searchResultsMessage = Selector('#center_column > p');
    this.productName = Selector('#center_column');
  }

  async searchProductsByKeyWord(keyword) {
    await t.typeText(this.search, keyword);
  }

  async productListCount() {
    return Selector(this.productList).count;
  }

  async productPreviewResults(keyword) {
    await this.searchProductsByKeyWord(keyword);
    await t.expect(this.li.innerText).contains(keyword);
  }

  async selectProductByPosition(position) {
    await t.maximizeWindow().click(this.li.nth(position - 1));
  }

  async productWithNameIsVisible(name) {
    return (
      (await this.productName.find('h1').withText(name).innerText) === name
    );
  }
}

export default new HeaderPage();
