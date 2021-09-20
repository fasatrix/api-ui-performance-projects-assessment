import { Selector, t, Role } from 'testcafe';
import { url } from '../utils/common';
import h from './header.page';

class PersonasPage {
  constructor() {
    this.header = h.header;
    this.signInBtn = this.header.find('a').withAttribute('class', 'login');
    this.username = Selector('#email');
    this.password = Selector('#passwd');
    this.btn = Selector('#SubmitLogin > span');

    this.customerPaul = new Role(
      `${url}index.php?controller=authentication&back=my-account`,
      async (t) => {
        await t
          .click(this.signInBtn)
          .typeText(this.username, 'foo@foo.com')
          .typeText(this.password, '123456789')
          .click(this.btn);
      }
    );
  }

  async loginAsCustomer() {
    await t.useRole(this.customerPaul);
  }
}

export default new PersonasPage();
