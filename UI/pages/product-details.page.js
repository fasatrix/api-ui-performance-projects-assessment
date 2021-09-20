import { Selector, t } from 'testcafe';
class ProductDetailsPage {
  constructor() {
    this.addButton = Selector('#add_to_cart > button > span');
    this.productName = Selector('#center_column');
    this.layercart = Selector('#layer_cart');
    this.proceedToCheckOut = this.layercart
      .find('a')
      .withAttribute('title', 'Proceed to checkout');
  }

  async productWithNameIsVisible(name) {
    return (
      (await this.productName.find('h1').withText(name).innerText) === name
    );
  }

  async addTheProductAndProceedToCheckOut() {
    await t.click(this.addButton).click(this.proceedToCheckOut);
  }
}

export default new ProductDetailsPage();
