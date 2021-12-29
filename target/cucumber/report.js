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
  "duration": 234800,
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
