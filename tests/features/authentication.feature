Feature: Authentication
  As a user of SauceDemo
  I want to be able to login
  So that I can access the store

  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I login with "standard_user" and "secret_sauce"
    Then I should be redirected to the inventory page
    And I should see the page title "Products"

  Scenario: Failed login with invalid credentials
    Given I am on the login page
    When I login with "standard_user" and "wrong_password"
    Then I should see the error message "Username and password do not match any user in this service"
