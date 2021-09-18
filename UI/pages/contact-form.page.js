import { Selector, t } from 'testcafe';

class Option {
  constructor(elm) {
    this.select = Selector('#id_contact');
    this.field = this.select().find(`${elm}`);
  }
}

class Inputs {
  constructor(elm) {
    this.input = Selector('div.col-xs-12');
    this.field = this.input.find(`${elm}`);
  }
}

class ContactFormPage {
  constructor() {
    this.pageName = Selector(
      '#center_column > h1[class="page-heading bottom-indent"]'
    );
    this.option = new Option('option');
    this.input = new Inputs('input');
    this.contactLink = Selector('a');
    this.fileUpload = Selector('#fileUpload');
    this.textArea = Selector('#message');
    this.button = Selector('#submitMessage');
    this.error = Selector('#center_column > div.alert.alert-danger');
    this.sumitted = Selector('#center_column > p.alert.alert-success ');
  }

  async navigateToContactUs() {
    await t.click(this.contactLink.withText('Contact us'));
  }

  async invalidField(as) {
    await t
      .expect(
        this.input.field
          .withAttribute('id', `${as}`)
          .parent('p')
          .hasClass('form-error')
      )
      .ok();
  }

  async selectOptionByName(name) {
    await t.click(this.option.select);
    await t.click(this.option.field.withText(name));
  }

  async typeTextIn(text, as) {
    await t.typeText(this.input.field.withAttribute('id', `${as}`), text);
  }
  async inputTextArea(text) {
    await t.typeText(this.textArea, text);
  }

  async attachAFile(filepath) {
    await t.setFilesToUpload(this.fileUpload, filepath);
  }

  async displayErrorMessage() {
    return this.error.find('li').innerText;
  }
}

export default new ContactFormPage();
