import { Selector, t } from 'testcafe';

class CartAndCheckoutPage {
  constructor() {
    this.pageTitle = Selector('#cart_title');
    this.proceedToSummary = Selector(
      '#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium'
    );
    this.proceedToAddress = Selector(
      '#center_column > form > p > button > span'
    );
    this.proceedToShipping = Selector('#form > p > button > span');
    this.confirmOrder = Selector('#cart_navigation > button > span');
    this.checkTermsAndConditions = Selector('#cgv');
    this.payment = Selector('#HOOK_PAYMENT');
  }
  async agreeToTermAndConditions() {
    await t.click(this.checkTermsAndConditions);
  }

  async payBy(method) {
    const pay = this.payment.find('a').withAttribute('class', method);
    await t.click(this.payment);
  }
}

export default new CartAndCheckoutPage();
