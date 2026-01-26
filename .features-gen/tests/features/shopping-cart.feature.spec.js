// Generated from: tests\features\shopping-cart.feature
import { test } from "playwright-bdd";

test.describe('Shopping Cart', () => {

  test.beforeEach('Background', async ({ Given, And, page }, testInfo) => { if (testInfo.error) return;
    await Given('I am on the login page', null, { page }); 
    await And('I login as a standard user', null, { page }); 
  });
  
  test('Add a product to cart', async ({ When, Then, page }) => { 
    await When('I add "Sauce Labs Backpack" to the cart', null, { page }); 
    await Then('the cart badge should show "1"', null, { page }); 
  });

  test('Remove a product from the cart', async ({ When, Then, And, page }) => { 
    await When('I add "Sauce Labs Backpack" to the cart', null, { page }); 
    await And('the cart badge should show "1"', null, { page }); 
    await And('I remove "Sauce Labs Backpack" from the cart', null, { page }); 
    await Then('the cart badge should not be visible', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\shopping-cart.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And I login as a standard user","isBg":true,"stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When I add \"Sauce Labs Backpack\" to the cart","stepMatchArguments":[{"group":{"start":6,"value":"\"Sauce Labs Backpack\"","children":[{"start":7,"value":"Sauce Labs Backpack","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then the cart badge should show \"1\"","stepMatchArguments":[{"group":{"start":27,"value":"\"1\"","children":[{"start":28,"value":"1","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":16,"pickleLine":14,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And I login as a standard user","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When I add \"Sauce Labs Backpack\" to the cart","stepMatchArguments":[{"group":{"start":6,"value":"\"Sauce Labs Backpack\"","children":[{"start":7,"value":"Sauce Labs Backpack","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"And the cart badge should show \"1\"","stepMatchArguments":[{"group":{"start":27,"value":"\"1\"","children":[{"start":28,"value":"1","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"And I remove \"Sauce Labs Backpack\" from the cart","stepMatchArguments":[{"group":{"start":9,"value":"\"Sauce Labs Backpack\"","children":[{"start":10,"value":"Sauce Labs Backpack","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then the cart badge should not be visible","stepMatchArguments":[]}]},
]; // bdd-data-end