// Generated from: tests\features\authentication.feature
import { test } from "playwright-bdd";

test.describe('Authentication', () => {

  test('Successful login with valid credentials', async ({ Given, When, Then, And, page }) => { 
    await Given('I am on the login page', null, { page }); 
    await When('I login with "standard_user" and "secret_sauce"', null, { page }); 
    await Then('I should be redirected to the inventory page', null, { page }); 
    await And('I should see the page title "Products"', null, { page }); 
  });

  test('Failed login with invalid credentials', async ({ Given, When, Then, page }) => { 
    await Given('I am on the login page', null, { page }); 
    await When('I login with "standard_user" and "wrong_password"', null, { page }); 
    await Then('I should see the error message "Username and password do not match any user in this service"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\authentication.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I login with \"standard_user\" and \"secret_sauce\"","stepMatchArguments":[{"group":{"start":13,"value":"\"standard_user\"","children":[{"start":14,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":33,"value":"\"secret_sauce\"","children":[{"start":34,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should be redirected to the inventory page","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"And I should see the page title \"Products\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Products\"","children":[{"start":29,"value":"Products","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":13,"pickleLine":12,"tags":[],"steps":[{"pwStepLine":14,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When I login with \"standard_user\" and \"wrong_password\"","stepMatchArguments":[{"group":{"start":13,"value":"\"standard_user\"","children":[{"start":14,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":33,"value":"\"wrong_password\"","children":[{"start":34,"value":"wrong_password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then I should see the error message \"Username and password do not match any user in this service\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Username and password do not match any user in this service\"","children":[{"start":32,"value":"Username and password do not match any user in this service","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end