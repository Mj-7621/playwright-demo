Feature: Checkout Flow
  As a logged-in user
  I want to complete the checkout process
  So that I can purchase my selected items

  Background:
    Given I am on the login page
    And I login as a standard user

  Scenario: Complete checkout flow successfully
    When I add "Sauce Labs Backpack" to the cart
    And the cart badge should show "1"
    And I go to the cart
    Then I should see 1 item in the cart
    When I proceed to checkout
    And I fill in shipping info with "John" "Doe" and "12345"
    And I continue to the overview
    Then I should see 1 item in the checkout overview
    When I finish the checkout
    Then I should see the order confirmation "Thank you for your order!"
