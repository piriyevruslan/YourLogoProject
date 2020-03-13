
Feature: Login
  @Regression
  Scenario: As a user I should be able to successfully login
    Given I am in login page
    And I enter user name "admin"
    Then I enter user password "admin123"
    And I click on Login Button
    Then I confirm that I logged in as an Admin

  @Regression
  Scenario Outline: As a user I should not be able to login with incorrect credentials
    Given I am in login page
    Then I enter Invalid "<userName>" and "<passWord>"
    And I click on Login Button
    Then I should see "<ErrorMessage>" failed message
    Examples:
      | userName | passWord | ErrorMessage             |
      |          |          | Username cannot be empty |
      |          | blabla   | Username cannot be empty |
      | Admin    |          | Password cannot be empty |
      | blabla   | admin123 | Invalid credentials      |
      | Admin    | blabla   | Invalid credentials      |

  @Regression
  Scenario: As a user I should be able to successfully logout
    Given I am in login page
    And I enter user name "admin"
    Then I enter user password "admin123"
    And I click on Login Button
    Then I confirm that I logged in as an Admin
    Then I click Welcome Admin button
    And  I click logout Button
    Then I confirm I am logged out























