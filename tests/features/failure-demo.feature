Feature: Failure Screenshot Demo
  As a tester
  I want to verify that screenshots are captured on failure
  So that I can debug failing tests

  @fail
  Scenario: Should fail and capture a screenshot
    Given I am on the login page
    When I login with "standard_user" and "secret_sauce"
    Then I should see the page title "Wrong Title - Intentional Failure"
