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
      "line": 29,
      "value": "#-----------------------------------------------------------------------------------------------------------#"
    },
    {
      "line": 30,
      "value": "#Scenario 2"
    },
    {
      "line": 31,
      "value": "#URL Redirect creation - Future date scenario#"
    }
  ],
  "line": 34,
  "name": "Validating the URL - Redirect future date creation",
  "description": "",
  "id": "sourcex---url-redirect-functionality-validation;validating-the-url---redirect-future-date-creation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@URLRedirect"
    },
    {
      "line": 33,
      "name": "@fail"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "Enter the \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "User is on home page",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "Click on the profile icon",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "Click on the Admin option",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "Click on Selfservice option from leftNavigation panel",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Click on URL Redirect Option",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Verify the Source URL field is loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "Filter the Status option by Enabled",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Search for the Source URL - Available",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "Disable if it is available",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Enter the value for Source URL",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Enter the value for Target URL",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "Select the Future Date value",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "Click on POST button",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "Verify the error-sucess message",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "Click on close button in the pop up",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "Verify the created URL redirect for future dated",
  "keyword": "Then "
});
formatter.examples({
  "line": 52,
  "name": "",
  "description": "",
  "id": "sourcex---url-redirect-functionality-validation;validating-the-url---redirect-future-date-creation;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 53,
      "id": "sourcex---url-redirect-functionality-validation;validating-the-url---redirect-future-date-creation;;1"
    },
    {
      "cells": [
        "mmarimuthu@vmware.com",
        "Leavemealone@2401"
      ],
      "line": 54,
      "id": "sourcex---url-redirect-functionality-validation;validating-the-url---redirect-future-date-creation;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 241900,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Validating the URL - Redirect future date creation",
  "description": "",
  "id": "sourcex---url-redirect-functionality-validation;validating-the-url---redirect-future-date-creation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@fail"
    },
    {
      "line": 33,
      "name": "@URLRedirect"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "Enter the \"mmarimuthu@vmware.com\" and \"Leavemealone@2401\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "User is on home page",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "Click on the profile icon",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "Click on the Admin option",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "Click on Selfservice option from leftNavigation panel",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Click on URL Redirect Option",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Verify the Source URL field is loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "Filter the Status option by Enabled",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Search for the Source URL - Available",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "Disable if it is available",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Enter the value for Source URL",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Enter the value for Target URL",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "Select the Future Date value",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "Click on POST button",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "Verify the error-sucess message",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "Click on close button in the pop up",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "Verify the created URL redirect for future dated",
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
  "duration": 77508065600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_is_on_home_page()"
});
formatter.result({
  "duration": 3125863600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_the_profile_icon()"
});
formatter.result({
  "duration": 3432390000,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_the_admin_option()"
});
formatter.result({
  "duration": 19395390300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_Selfservice_option_from_leftNavigation_panel()"
});
formatter.result({
  "duration": 8211036600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_URL_Redirect_Option()"
});
formatter.result({
  "duration": 12159697700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.verify_the_source_url_field_is_loaded()"
});
formatter.result({
  "duration": 3094704700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.filter_the_Status_option_by_Enabled()"
});
formatter.result({
  "duration": 14622627700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.search_for_the_source_URL_Available()"
});
formatter.result({
  "duration": 13950796600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.disable_if_it_is_available()"
});
