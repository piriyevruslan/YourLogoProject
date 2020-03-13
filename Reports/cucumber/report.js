$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/attendance.feature");
formatter.feature({
  "name": "Attendance Report",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User should be able to successfully view attendance summary",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am logged in as an Admin",
  "keyword": "Given "
});
formatter.match({
  "location": "HomeSteps.i_am_logged_in_as_an_Admin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on time tab",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.i_click_on_time_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on reports subtab",
  "keyword": "And "
});
formatter.match({
  "location": "HomeSteps.i_click_on_reports_subtab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on attendance summary options",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.i_click_on_attendance_summary_options()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill out the form and view attendance summary",
  "keyword": "And "
});
formatter.match({
  "location": "HomeSteps.iFillOutTheFormAndViewAttendanceSummary()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to verify no records fo attendance summary",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am logged in as an Admin",
  "keyword": "Given "
});
formatter.match({
  "location": "HomeSteps.i_am_logged_in_as_an_Admin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on time tab",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.i_click_on_time_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on reports subtab",
  "keyword": "And "
});
formatter.match({
  "location": "HomeSteps.i_click_on_reports_subtab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on attendance summary options",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.i_click_on_attendance_summary_options()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill out the form and view attendance summary of no records",
  "keyword": "And "
});
formatter.match({
  "location": "HomeSteps.iFillOutTheFormAndViewAttendanceSummaryOfNoRecords()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/home.feature");
formatter.feature({
  "name": "Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "As a user I should be able to successfully search \"\u003cempName\u003e\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I am logged in as an Admin",
  "keyword": "Given "
});
formatter.step({
  "name": "I click on Directory Tab",
  "keyword": "Then "
});
formatter.step({
  "name": "I verify I am on Directory Tab",
  "keyword": "And "
});
formatter.step({
  "name": "I enter search criteria existing \"\u003cempName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "I verify existing employee search \"\u003cempName\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "empName"
      ]
    },
    {
      "cells": [
        "Russel Hamilton"
      ]
    },
    {
      "cells": [
        "Jasmine Morgan"
      ]
    },
    {
      "cells": [
        "John Smith"
      ]
    }
  ]
});
formatter.scenario({
  "name": "As a user I should be able to successfully search \"Russel Hamilton\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am logged in as an Admin",
  "keyword": "Given "
});
formatter.match({
  "location": "HomeSteps.i_am_logged_in_as_an_Admin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Directory Tab",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.i_click_on_Directory_Tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify I am on Directory Tab",
  "keyword": "And "
});
formatter.match({
  "location": "HomeSteps.i_verify_I_am_on_Directory_Tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter search criteria existing \"Russel Hamilton\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.i_enter_search_criteria_existing(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify existing employee search \"Russel Hamilton\"",
  "keyword": "And "
});
formatter.match({
  "location": "HomeSteps.i_verify_existing_employee_search(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "As a user I should be able to successfully search \"Jasmine Morgan\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am logged in as an Admin",
  "keyword": "Given "
});
formatter.match({
  "location": "HomeSteps.i_am_logged_in_as_an_Admin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Directory Tab",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.i_click_on_Directory_Tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify I am on Directory Tab",
  "keyword": "And "
});
formatter.match({
  "location": "HomeSteps.i_verify_I_am_on_Directory_Tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter search criteria existing \"Jasmine Morgan\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.i_enter_search_criteria_existing(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify existing employee search \"Jasmine Morgan\"",
  "keyword": "And "
});
formatter.match({
  "location": "HomeSteps.i_verify_existing_employee_search(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "As a user I should be able to successfully search \"John Smith\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am logged in as an Admin",
  "keyword": "Given "
});
formatter.match({
  "location": "HomeSteps.i_am_logged_in_as_an_Admin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Directory Tab",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.i_click_on_Directory_Tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify I am on Directory Tab",
  "keyword": "And "
});
formatter.match({
  "location": "HomeSteps.i_verify_I_am_on_Directory_Tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter search criteria existing \"John Smith\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.i_enter_search_criteria_existing(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify existing employee search \"John Smith\"",
  "keyword": "And "
});
formatter.match({
  "location": "HomeSteps.i_verify_existing_employee_search(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User should be able successfully reset search criteria with \"\u003cempName\u003e\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I am logged in as an Admin",
  "keyword": "Given "
});
formatter.step({
  "name": "I click on Directory Tab",
  "keyword": "Then "
});
formatter.step({
  "name": "I enter search criteria existing \"\u003cempName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "I verify existing employee search \"\u003cempName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I reset search criteria",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "empName"
      ]
    },
    {
      "cells": [
        "Russel Hamilton"
      ]
    },
    {
      "cells": [
        "Jasmine Morgan"
      ]
    },
    {
      "cells": [
        "John Smith"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User should be able successfully reset search criteria with \"Russel Hamilton\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am logged in as an Admin",
  "keyword": "Given "
});
formatter.match({
  "location": "HomeSteps.i_am_logged_in_as_an_Admin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Directory Tab",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.i_click_on_Directory_Tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter search criteria existing \"Russel Hamilton\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.i_enter_search_criteria_existing(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify existing employee search \"Russel Hamilton\"",
  "keyword": "And "
});
formatter.match({
  "location": "HomeSteps.i_verify_existing_employee_search(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I reset search criteria",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.iResetSearchCriteria()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able successfully reset search criteria with \"Jasmine Morgan\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am logged in as an Admin",
  "keyword": "Given "
});
formatter.match({
  "location": "HomeSteps.i_am_logged_in_as_an_Admin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Directory Tab",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.i_click_on_Directory_Tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter search criteria existing \"Jasmine Morgan\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.i_enter_search_criteria_existing(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify existing employee search \"Jasmine Morgan\"",
  "keyword": "And "
});
formatter.match({
  "location": "HomeSteps.i_verify_existing_employee_search(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I reset search criteria",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.iResetSearchCriteria()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able successfully reset search criteria with \"John Smith\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am logged in as an Admin",
  "keyword": "Given "
});
formatter.match({
  "location": "HomeSteps.i_am_logged_in_as_an_Admin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Directory Tab",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.i_click_on_Directory_Tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter search criteria existing \"John Smith\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.i_enter_search_criteria_existing(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify existing employee search \"John Smith\"",
  "keyword": "And "
});
formatter.match({
  "location": "HomeSteps.i_verify_existing_employee_search(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I reset search criteria",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.iResetSearchCriteria()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to add candidate",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am logged in as an Admin",
  "keyword": "Given "
});
formatter.match({
  "location": "HomeSteps.i_am_logged_in_as_an_Admin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Recruitment tab",
  "keyword": "And "
});
formatter.match({
  "location": "HomeSteps.i_click_on_Recruitment_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Candidates subtab",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.i_click_on_Candidates_subtab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on add button",
  "keyword": "And "
});
formatter.match({
  "location": "HomeSteps.i_click_on_add_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add candidate by filling required fields",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.i_add_candidate_by_filling_required_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Save button",
  "keyword": "And "
});
formatter.match({
  "location": "HomeSteps.i_click_on_Save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see Error Message",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.i_should_see_Error_Message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to add vacancy",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am logged in as an Admin",
  "keyword": "Given "
});
formatter.match({
  "location": "HomeSteps.i_am_logged_in_as_an_Admin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Recruitment tab",
  "keyword": "And "
});
formatter.match({
  "location": "HomeSteps.i_click_on_Recruitment_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click in Vacancy subtab",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.i_click_in_Vacancy_subtab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on add button",
  "keyword": "And "
});
formatter.match({
  "location": "HomeSteps.i_click_on_add_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add vacancy by filling required fields",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.i_add_vacancy_by_filling_required_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Save button",
  "keyword": "And "
});
formatter.match({
  "location": "HomeSteps.i_click_on_Save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see Error Message",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.i_should_see_Error_Message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "As a user I should be able to successfully login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.iAmInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter user name \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iEnterUserName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter user password \"admin123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iEnterUserPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I confirm that I logged in as an Admin",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iConfirmThatILoggedInAsAnAdmin()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "As a user I should not be able to login with incorrect credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I am in login page",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter Invalid \"\u003cuserName\u003e\" and \"\u003cpassWord\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "I should see \"\u003cErrorMessage\u003e\" failed message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userName",
        "passWord",
        "ErrorMessage"
      ]
    },
    {
      "cells": [
        "",
        "",
        "Username cannot be empty"
      ]
    },
    {
      "cells": [
        "",
        "blabla",
        "Username cannot be empty"
      ]
    },
    {
      "cells": [
        "Admin",
        "",
        "Password cannot be empty"
      ]
    },
    {
      "cells": [
        "blabla",
        "admin123",
        "Invalid credentials"
      ]
    },
    {
      "cells": [
        "Admin",
        "blabla",
        "Invalid credentials"
      ]
    }
  ]
});
formatter.scenario({
  "name": "As a user I should not be able to login with incorrect credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.iAmInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Invalid \"\" and \"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iEnterInvalidAnd(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"Username cannot be empty\" failed message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iShouldSeeFailedMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "As a user I should not be able to login with incorrect credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.iAmInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Invalid \"\" and \"blabla\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iEnterInvalidAnd(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"Username cannot be empty\" failed message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iShouldSeeFailedMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "As a user I should not be able to login with incorrect credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.iAmInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Invalid \"Admin\" and \"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iEnterInvalidAnd(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"Password cannot be empty\" failed message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iShouldSeeFailedMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "As a user I should not be able to login with incorrect credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.iAmInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Invalid \"blabla\" and \"admin123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iEnterInvalidAnd(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"Invalid credentials\" failed message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iShouldSeeFailedMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "As a user I should not be able to login with incorrect credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.iAmInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Invalid \"Admin\" and \"blabla\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iEnterInvalidAnd(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"Invalid credentials\" failed message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iShouldSeeFailedMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "As a user I should be able to successfully logout",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.iAmInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter user name \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iEnterUserName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter user password \"admin123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iEnterUserPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I confirm that I logged in as an Admin",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iConfirmThatILoggedInAsAnAdmin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Welcome Admin button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iClickWelcomeAdminButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click logout Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iClickLogoutButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I confirm I am logged out",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iConfirmIAmLoggedOut()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/time.feature");
formatter.feature({
  "name": "Time project info functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User should be able to successfully add customer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am logged in as an Admin",
  "keyword": "Given "
});
formatter.match({
  "location": "HomeSteps.i_am_logged_in_as_an_Admin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on time tab",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.i_click_on_time_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on project info subtab",
  "keyword": "And "
});
formatter.match({
  "location": "HomeSteps.i_click_on_project_info_subtab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on customer option button",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.i_click_on_customer_option_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click add button",
  "keyword": "And "
});
formatter.match({
  "location": "HomeSteps.i_click_add_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add customer",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.i_add_customer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate added customer in the table",
  "keyword": "And "
});
formatter.match({
  "location": "HomeSteps.i_validate_added_customer_in_the_table()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able successfully add Project",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am logged in as an Admin",
  "keyword": "Given "
});
formatter.match({
  "location": "HomeSteps.i_am_logged_in_as_an_Admin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on time tab",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.i_click_on_time_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on project info subtab",
  "keyword": "And "
});
formatter.match({
  "location": "HomeSteps.i_click_on_project_info_subtab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Project option button",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.i_click_on_Project_option_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click add button",
  "keyword": "And "
});
formatter.match({
  "location": "HomeSteps.i_click_add_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add Project",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.i_add_Project()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Save button",
  "keyword": "And "
});
formatter.match({
  "location": "HomeSteps.i_click_on_Save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate added Project in the table",
  "keyword": "And "
});
formatter.match({
  "location": "HomeSteps.i_validate_added_Project_in_the_table()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});