$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/login.feature");
formatter.feature({
  "name": "",
  "description": "  //@After Scenario:",
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
formatter.step({
  "name": "I am in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_am_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter an user name \"Admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iEnterAnUserName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter an user password \"admin123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iEnterAnUserPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I confirm that I logged in as an Admin",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_confirm_that_I_logged_in_as_an_Admin()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
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
formatter.step({
  "name": "I am in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_am_in_login_page()"
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
  "location": "LoginSteps.i_click_on_Login_Button()"
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
formatter.embedding("image/png", "embedded1.png", null);
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
formatter.step({
  "name": "I am in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_am_in_login_page()"
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
  "location": "LoginSteps.i_click_on_Login_Button()"
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
formatter.embedding("image/png", "embedded2.png", null);
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
formatter.step({
  "name": "I am in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_am_in_login_page()"
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
  "location": "LoginSteps.i_click_on_Login_Button()"
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
formatter.embedding("image/png", "embedded3.png", null);
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
formatter.step({
  "name": "I am in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_am_in_login_page()"
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
  "location": "LoginSteps.i_click_on_Login_Button()"
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
formatter.embedding("image/png", "embedded4.png", null);
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
formatter.step({
  "name": "I am in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_am_in_login_page()"
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
  "location": "LoginSteps.i_click_on_Login_Button()"
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
formatter.embedding("image/png", "embedded5.png", null);
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
formatter.step({
  "name": "I am in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_am_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter an user name \"Admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iEnterAnUserName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter an user password \"admin123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iEnterAnUserPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I confirm that I logged in as an Admin",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_confirm_that_I_logged_in_as_an_Admin()"
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
formatter.embedding("image/png", "embedded6.png", null);
formatter.after({
  "status": "passed"
});
});