
Feature: Functionality
  @Regression
  Scenario Outline: As a user I should be able to successfully search "<empName>"
    Given I am logged in as an Admin
    Then I click on Directory Tab
    And I verify I am on Directory Tab
    Then I enter search criteria existing "<empName>"
    And I verify existing employee search "<empName>"

  Examples:
    | empName         |
    | Russel Hamilton |
    | Jasmine Morgan  |
    | John Smith      |


  @Regression
  Scenario Outline: User should be able successfully reset search criteria with "<empName>"
    Given I am logged in as an Admin
    Then I click on Directory Tab
    Then I enter search criteria existing "<empName>"
    And I verify existing employee search "<empName>"
    Then I reset search criteria

    Examples:
      | empName         |
      | Russel Hamilton |
      | Jasmine Morgan  |
      | John Smith      |

  @Regression
  Scenario: User should be able to add candidate
    Given I am logged in as an Admin
    And I click on Recruitment tab
    Then I click on Candidates subtab
    And I click on add button
    Then I add candidate by filling required fields
    And I click on Save button
    Then I should see Error Message

  @Regression
  Scenario: User should be able to add vacancy
    Given I am logged in as an Admin
    And I click on Recruitment tab
    Then I click in Vacancy subtab
    And I click on add button
    Then I add vacancy by filling required fields
    And I click on Save button
    Then I should see Error Message
