
import { Given, When, Then } from '@cucumber/cucumber';
// import { assert } from 'chai';

import LoginPage from '../pageobjects/loginpage';
import SecurePage from '../pageobjects/secure.page';

Given(/^I am on the login page$/, function () {  
  browser.url('E:/VS_Code_Project/TestSolution/LoginApp/index.html');  
  browser.pause(5000);
  let title = browser.getTitle();
  console.log(title);  
});

When(/^I login with "([^"]*)" and "([^"]*)"$/, function (userName:string, password:string) {
  LoginPage.login(userName, password);
//   LoginPage.inputUsername.setValue(userName);
//   LoginPage.inputPassword.setValue(password);
   LoginPage.btnSubmit.click();  
});

Then(/^I should see a message saying (.*) near Name field$/, function (message:string) {
  var getMsg = LoginPage.getUserMessage();
  console.log(getMsg);
});

Then(/^I should see a message saying (.*) near Password field$/, function (message:string) {
    var getMsg = LoginPage.getPasswordMessage();
    console.log(getMsg);
  });