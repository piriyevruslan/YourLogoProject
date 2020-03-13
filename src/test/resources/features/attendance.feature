Feature: Attendance Report
  @Regression
  Scenario: User should be able to successfully view attendance summary
    Given I am logged in as an Admin
    Then  I click on time tab
    And   I click on reports subtab
    Then  I click on attendance summary options
    And   I fill out the form and view attendance summary
  @Regression
  Scenario: User should be able to verify no records fo attendance summary
    Given I am logged in as an Admin
    Then  I click on time tab
    And   I click on reports subtab
    Then  I click on attendance summary options
    And   I fill out the form and view attendance summary of no records















