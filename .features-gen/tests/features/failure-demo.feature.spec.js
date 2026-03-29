// Generated from: tests\features\failure-demo.feature
import { test } from "playwright-bdd";

test.describe('Failure Screenshot Demo', () => {

  test('Should fail and capture a screenshot', { tag: ['@fail'] }, async ({ Given, When, Then, page }) => { 
    test.fail();
    await Given('I am on the login page', null, { page }); 
    await When('I login with "standard_user" and "secret_sauce"', null, { page }); 
    await Then('I should see the page title "Wrong Title - Intentional Failure"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\failure-demo.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":7,"tags":["@fail"],"steps":[{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When I login with \"standard_user\" and \"secret_sauce\"","stepMatchArguments":[{"group":{"start":13,"value":"\"standard_user\"","children":[{"start":14,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":33,"value":"\"secret_sauce\"","children":[{"start":34,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then I should see the page title \"Wrong Title - Intentional Failure\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Wrong Title - Intentional Failure\"","children":[{"start":29,"value":"Wrong Title - Intentional Failure","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end