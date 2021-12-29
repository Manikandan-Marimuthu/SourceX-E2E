$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("URLRedirect.feature");
formatter.feature({
  "line": 1,
  "name": "SourceX - URL Redirect functionality Validation",
  "description": "",
  "id": "sourcex---url-redirect-functionality-validation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#URL Redirect creation - Present date#"
    }
  ],
  "line": 6,
  "name": "Validating the URL - Redirect creation",
  "description": "",
  "id": "sourcex---url-redirect-functionality-validation;validating-the-url---redirect-creation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@URLRedirect"
    },
    {
      "line": 5,
      "name": "@smoke"
    },
    {
      "line": 5,
      "name": "@sanity"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Enter the \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User is on home page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Click on the profile icon",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Click on the Admin option",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Click on Selfservice option from leftNavigation panel",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click on URL Redirect Option",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Verify the Source URL field is loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Filter the Status option by Enabled",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Search for the Source URL - Available",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Disable if it is available",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Enter the value for Source URL",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Enter the value for Target URL",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Select the Date value",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Click on POST button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Verify the error-sucess message",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Click on close button in the pop up",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Verify the created URL redirect",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "sourcex---url-redirect-functionality-validation;validating-the-url---redirect-creation;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 25,
      "id": "sourcex---url-redirect-functionality-validation;validating-the-url---redirect-creation;;1"
    },
    {
      "cells": [
        "mmarimuthu@vmware.com",
        "Leavemealone@2401"
      ],
      "line": 26,
      "id": "sourcex---url-redirect-functionality-validation;validating-the-url---redirect-creation;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 492400,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Validating the URL - Redirect creation",
  "description": "",
  "id": "sourcex---url-redirect-functionality-validation;validating-the-url---redirect-creation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@smoke"
    },
    {
      "line": 5,
      "name": "@Regression"
    },
    {
      "line": 5,
      "name": "@sanity"
    },
    {
      "line": 5,
      "name": "@URLRedirect"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Enter the \"mmarimuthu@vmware.com\" and \"Leavemealone@2401\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User is on home page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Click on the profile icon",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Click on the Admin option",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Click on Selfservice option from leftNavigation panel",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click on URL Redirect Option",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Verify the Source URL field is loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Filter the Status option by Enabled",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Search for the Source URL - Available",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Disable if it is available",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Enter the value for Source URL",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Enter the value for Target URL",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Select the Date value",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Click on POST button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Verify the error-sucess message",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Click on close button in the pop up",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Verify the created URL redirect",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "mmarimuthu@vmware.com",
      "offset": 11
    },
    {
      "val": "Leavemealone@2401",
      "offset": 39
    }
  ],
  "location": "stepDefination.enter_the_something_and_something(String,String)"
});
formatter.result({
  "duration": 39277080900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_is_on_home_page()"
});
formatter.result({
  "duration": 3033013000,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_the_profile_icon()"
});
formatter.result({
  "duration": 3137861200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_the_admin_option()"
});
formatter.result({
  "duration": 14213030500,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_Selfservice_option_from_leftNavigation_panel()"
});
formatter.result({
  "duration": 8076646300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_URL_Redirect_Option()"
});
formatter.result({
  "duration": 11051778900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.verify_the_source_url_field_is_loaded()"
});
formatter.result({
  "duration": 3027823100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.filter_the_Status_option_by_Enabled()"
});
formatter.result({
  "duration": 60473847900,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of [[ChromeDriver: chrome on WINDOWS (219875f73307fb1c0c64f3a29f5c887e)] -\u003e xpath: (//cds-icon[@shape\u003d\u0027filter-grid\u0027])[5]] (tried for 60 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027B903LMAA\u0027, ip: \u0027192.168.1.100\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\u29082\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:64138}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 219875f73307fb1c0c64f3a29f5c887e\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat stepDefinations.stepDefination.filter_the_Status_option_by_Enabled(stepDefination.java:117)\r\n\tat ✽.Then Filter the Status option by Enabled(URLRedirect.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepDefination.search_for_the_source_URL_Available()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefination.disable_if_it_is_available()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefination.enter_the_value_for_source_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefination.enter_the_value_for_target_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefination.select_the_date_value()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefination.click_on_post_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefination.verify_the_error_sucess_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefination.click_on_close_button_in_the_pop_up()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefination.verify_the_created_url_redirect()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 118229000,
  "status": "passed"
});
});