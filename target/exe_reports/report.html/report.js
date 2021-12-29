$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("URLRedirect.feature");
formatter.feature({
  "line": 1,
  "name": "SourceX - URL Redirect functionality Validation",
  "description": "",
  "id": "sourcex---url-redirect-functionality-validation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
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
  "name": "Enter the value for Source URL",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Enter the value for Target URL",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Select the Date value",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Click on POST button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Verify the error-sucess message",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Click on close button in the pop up",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Verify the created URL redirect",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "sourcex---url-redirect-functionality-validation;validating-the-url---redirect-creation;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 22,
      "id": "sourcex---url-redirect-functionality-validation;validating-the-url---redirect-creation;;1"
    },
    {
      "cells": [
        "mmarimuthu",
        "Leavemealone@2401"
      ],
      "line": 23,
      "id": "sourcex---url-redirect-functionality-validation;validating-the-url---redirect-creation;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 311000,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Validating the URL - Redirect creation",
  "description": "",
  "id": "sourcex---url-redirect-functionality-validation;validating-the-url---redirect-creation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@URLRedirect"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Enter the \"mmarimuthu\" and \"Leavemealone@2401\"",
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
  "name": "Enter the value for Source URL",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Enter the value for Target URL",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Select the Date value",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Click on POST button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Verify the error-sucess message",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Click on close button in the pop up",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Verify the created URL redirect",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "mmarimuthu",
      "offset": 11
    },
    {
      "val": "Leavemealone@2401",
      "offset": 28
    }
  ],
  "location": "stepDefination.enter_the_something_and_something(String,String)"
});
formatter.result({
  "duration": 36289795500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#username\"}\n  (Session info: chrome\u003d96.0.4664.93)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027B903LMAA\u0027, ip: \u0027192.168.1.100\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\u29082\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:51609}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: ba387d5c16e106f5d73fb7996155f332\n*** Element info: {Using\u003did, value\u003dusername}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepDefinations.stepDefination.enter_the_something_and_something(stepDefination.java:48)\r\n\tat ✽.Given Enter the \"mmarimuthu\" and \"Leavemealone@2401\"(URLRedirect.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepDefination.user_is_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefination.click_on_the_profile_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefination.click_on_the_admin_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefination.click_Selfservice_option_from_leftNavigation_panel()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefination.click_on_URL_Redirect_Option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefination.verify_the_source_url_field_is_loaded()"
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
  "duration": 1414064800,
  "status": "passed"
});
});