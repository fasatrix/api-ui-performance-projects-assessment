import { Selector, t, Role } from 'testcafe';
import { url, customerUsername, customerPassword } from '../utils/common';
import h from './header.page';

class PersonasPage {
  constructor() {
    this.header = h.header;
    this.signInBtn = this.header.find('a').withAttribute('class', 'login');
    this.username = Selector('#email');
    this.password = Selector('#passwd');
    this.btn = Selector('#SubmitLogin > span');

    this.customer = new Role(
      `${url}index.php?controller=authentication&back=my-account`,
      async (t) => {
        await t
          .click(this.signInBtn)
          .typeText(this.username, customerUsername)
          .typeText(this.password, customerPassword)
          .click(this.btn);
      }
    );
  }

  async loginAsCustomer() {
    await t.useRole(this.customer);
  }
}

export default new PersonasPage();
