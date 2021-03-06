import hp from '../pages/header.page';
import pd from '../pages/product-details.page';
import co from '../pages/cart-and-checkout.page';
import p from '../pages/personas.page';
import { url } from '../utils/common';
import { payments } from '../data/payments';

fixture`E2E Scenarios`.page`${url}`;

test('As a Logged in Customer I should be able to purchase a "Blouse"', async (t) => {
  await p.loginAsCustomer();
  await hp.searchProductsByKeyWord('Dress');
  await hp.selectProductByPosition(7);
  await pd.addTheProductAndProceedToCheckOut();
  await t.click(co.proceedToSummary);
  await t.click(co.proceedToAddress);
  await co.agreeToTermAndConditions();
  await t.click(co.proceedToShipping);
  await co.payBy(payments.bankWire);
  await t.click(co.confirmOrder);
});
