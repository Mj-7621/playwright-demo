Feature: Shopping Cart
  As a logged-in user
  I want to manage items in my cart
  So that I can purchase products

  Background:
    Given I am on the login page
    And I login as a standard user

  Scenario: Add a product to cart
    When I add "Sauce Labs Backpack" to the cart
    Then the cart badge should show "1"

  Scenario: Remove a product from the cart
    When I add "Sauce Labs Backpack" to the cart
    And the cart badge should show "1"
    And I remove "Sauce Labs Backpack" from the cart
    Then the cart badge should not be visible
