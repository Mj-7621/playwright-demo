// Generated from: tests\features\checkout.feature
import { test } from "playwright-bdd";

test.describe('Checkout Flow', () => {

  test.beforeEach('Background', async ({ Given, And, page }, testInfo) => { if (testInfo.error) return;
    await Given('I am on the login page', null, { page }); 
    await And('I login as a standard user', null, { page }); 
  });
  
  test('Complete checkout flow successfully', async ({ When, Then, And, page }) => { 
    await When('I add "Sauce Labs Backpack" to the cart', null, { page }); 
    await And('the cart badge should show "1"', null, { page }); 
    await And('I go to the cart', null, { page }); 
    await Then('I should see 1 item in the cart', null, { page }); 
    await When('I proceed to checkout', null, { page }); 
    await And('I fill in shipping info with "John" "Doe" and "12345"', null, { page }); 
    await And('I continue to the overview', null, { page }); 
    await Then('I should see 1 item in the checkout overview', null, { page }); 
    await When('I finish the checkout', null, { page }); 
    await Then('I should see the order confirmation "Thank you for your order!"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\checkout.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And I login as a standard user","isBg":true,"stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When I add \"Sauce Labs Backpack\" to the cart","stepMatchArguments":[{"group":{"start":6,"value":"\"Sauce Labs Backpack\"","children":[{"start":7,"value":"Sauce Labs Backpack","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"And the cart badge should show \"1\"","stepMatchArguments":[{"group":{"start":27,"value":"\"1\"","children":[{"start":28,"value":"1","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And I go to the cart","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then I should see 1 item in the cart","stepMatchArguments":[{"group":{"start":13,"value":"1","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":16,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When I proceed to checkout","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"And I fill in shipping info with \"John\" \"Doe\" and \"12345\"","stepMatchArguments":[{"group":{"start":29,"value":"\"John\"","children":[{"start":30,"value":"John","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":36,"value":"\"Doe\"","children":[{"start":37,"value":"Doe","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":46,"value":"\"12345\"","children":[{"start":47,"value":"12345","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"And I continue to the overview","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then I should see 1 item in the checkout overview","stepMatchArguments":[{"group":{"start":13,"value":"1","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":20,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When I finish the checkout","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then I should see the order confirmation \"Thank you for your order!\"","stepMatchArguments":[{"group":{"start":36,"value":"\"Thank you for your order!\"","children":[{"start":37,"value":"Thank you for your order!","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end