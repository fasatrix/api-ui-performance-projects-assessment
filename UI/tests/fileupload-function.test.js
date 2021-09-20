import cp from '../pages/contact-form.page';
import { url } from '../utils/common';

fixture`File Upload Function`.page`${url}`;

test('As a Customer I should be able to submit a contact form with a valid attachment', async (t) => {
  await cp.navigateToContactUs();
  await cp.selectOptionByName('Customer service');
  await cp.typeTextIn('foo@foo.com', 'email');
  await cp.typeTextIn('OrderId #123', 'id_order');
  await cp.attachAFile('../data/fileToUpload.txt');
  await cp.inputTextArea(
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  );
  await t
    .click(cp.button)
    .expect(cp.sumitted.innerText)
    .eql('Your message has been successfully sent to our team.');
});

test('As a Customer I should NOT be able to submit a contact form with invalid attachments (e.g. empty.xlsx)', async (t) => {
  await cp.navigateToContactUs();
  await cp.selectOptionByName('Customer service');
  await cp.typeTextIn('bla@bla.com', 'email');
  await cp.typeTextIn('OrderId #123', 'id_order');
  await cp.attachAFile('../data/empty.xlsx');
  await cp.inputTextArea(
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  );
  await t.click(cp.button);
  const message = await cp.displayErrorMessage();
  await t.expect(message).eql('Bad file extension');
});

test('As a Customer I should NOT be able to submit a contact form with a valid attachment and an invalid email address', async (t) => {
  await cp.navigateToContactUs();
  await cp.selectOptionByName('Customer service');
  await cp.typeTextIn('bla', 'email');
  await cp.typeTextIn('OrderId #123', 'id_order');
  await cp.invalidField('email');
  await cp.attachAFile('../data/fileToUpload.txt');
  await cp.inputTextArea(
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  );
  await t.click(cp.button);
  const message = await cp.displayErrorMessage();
  await t.expect(message).eql('Invalid email address.');
});
