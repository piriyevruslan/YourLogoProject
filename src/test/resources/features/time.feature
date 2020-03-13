
Feature: Time project info functionality
  @Regression
  Scenario: User should be able to successfully add customer
    Given I am logged in as an Admin
    Then I click on time tab
    And I click on project info subtab
    Then I click on customer option button
    And I click add button
    Then I add customer
    And I validate added customer in the table

  @Regression
  Scenario: User should be able successfully add Project
  Given I am logged in as an Admin
  Then I click on time tab
  And I click on project info subtab
  Then I click on Project option button
  And I click add button
  Then I add Project
   And I click on Save button
  And I validate added Project in the table
