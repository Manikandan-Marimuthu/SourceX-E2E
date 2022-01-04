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
      "line": 305,
      "value": "#----------------------------------------------------------------------------------------------------------#"
    },
    {
      "line": 306,
      "value": "#Scenario 11:"
    },
    {
      "line": 307,
      "value": "#URL Redirect creation - Version History scenario#"
    }
  ],
  "line": 310,
  "name": "Validating the URL - Redirect creation",
  "description": "",
  "id": "sourcex---url-redirect-functionality-validation;validating-the-url---redirect-creation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 309,
      "name": "@VersionHistory"
    }
  ]
});
formatter.step({
  "line": 311,
  "name": "Enter the \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 312,
  "name": "User is on home page",
  "keyword": "When "
});
formatter.step({
  "line": 313,
  "name": "Click on the profile icon",
  "keyword": "Then "
});
formatter.step({
  "line": 314,
  "name": "Click on the Admin option",
  "keyword": "Then "
});
formatter.step({
  "line": 315,
  "name": "Click on Selfservice option from leftNavigation panel",
  "keyword": "Then "
});
formatter.step({
  "line": 316,
  "name": "Click on URL Redirect Option",
  "keyword": "Then "
});
formatter.step({
  "line": 317,
  "name": "Verify the Source URL field is loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 318,
  "name": "Filter the Status option by Enabled",
  "keyword": "Then "
});
formatter.step({
  "line": 319,
  "name": "Search for the Source URL - Available",
  "keyword": "Then "
});
formatter.step({
  "line": 320,
  "name": "Disable if it is available",
  "keyword": "And "
});
formatter.step({
  "line": 321,
  "name": "Enter the value for Source URL",
  "keyword": "Then "
});
formatter.step({
  "line": 322,
  "name": "Enter the value for Target URL",
  "keyword": "Then "
});
formatter.step({
  "line": 323,
  "name": "Select the Date value",
  "keyword": "Then "
});
formatter.step({
  "line": 324,
  "name": "Click on POST button",
  "keyword": "Then "
});
formatter.step({
  "line": 325,
  "name": "Verify the error-sucess message",
  "keyword": "Then "
});
formatter.step({
  "line": 326,
  "name": "Click on close button in the pop up",
  "keyword": "Then "
});
formatter.step({
  "line": 327,
  "name": "Verify the created URL redirect",
  "keyword": "Then "
});
formatter.step({
  "line": 328,
  "name": "Click on Version History option of created URL redirect",
  "keyword": "Then "
});
formatter.step({
  "line": 329,
  "name": "Verify the result",
  "keyword": "Then "
});
formatter.step({
  "line": 330,
  "name": "Click on close button",
  "keyword": "Then "
});
formatter.examples({
  "line": 331,
  "name": "",
  "description": "",
  "id": "sourcex---url-redirect-functionality-validation;validating-the-url---redirect-creation;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 332,
      "id": "sourcex---url-redirect-functionality-validation;validating-the-url---redirect-creation;;1"
    },
    {
      "cells": [
        "mmarimuthu@vmware.com",
        "Leavemealone@2401"
      ],
      "line": 333,
      "id": "sourcex---url-redirect-functionality-validation;validating-the-url---redirect-creation;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 135800,
  "status": "passed"
});
formatter.scenario({
  "line": 333,
  "name": "Validating the URL - Redirect creation",
  "description": "",
  "id": "sourcex---url-redirect-functionality-validation;validating-the-url---redirect-creation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 309,
      "name": "@VersionHistory"
    }
  ]
});
formatter.step({
  "line": 311,
  "name": "Enter the \"mmarimuthu@vmware.com\" and \"Leavemealone@2401\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 312,
  "name": "User is on home page",
  "keyword": "When "
});
formatter.step({
  "line": 313,
  "name": "Click on the profile icon",
  "keyword": "Then "
});
formatter.step({
  "line": 314,
  "name": "Click on the Admin option",
  "keyword": "Then "
});
formatter.step({
  "line": 315,
  "name": "Click on Selfservice option from leftNavigation panel",
  "keyword": "Then "
});
formatter.step({
  "line": 316,
  "name": "Click on URL Redirect Option",
  "keyword": "Then "
});
formatter.step({
  "line": 317,
  "name": "Verify the Source URL field is loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 318,
  "name": "Filter the Status option by Enabled",
  "keyword": "Then "
});
formatter.step({
  "line": 319,
  "name": "Search for the Source URL - Available",
  "keyword": "Then "
});
formatter.step({
  "line": 320,
  "name": "Disable if it is available",
  "keyword": "And "
});
formatter.step({
  "line": 321,
  "name": "Enter the value for Source URL",
  "keyword": "Then "
});
formatter.step({
  "line": 322,
  "name": "Enter the value for Target URL",
  "keyword": "Then "
});
formatter.step({
  "line": 323,
  "name": "Select the Date value",
  "keyword": "Then "
});
formatter.step({
  "line": 324,
  "name": "Click on POST button",
  "keyword": "Then "
});
formatter.step({
  "line": 325,
  "name": "Verify the error-sucess message",
  "keyword": "Then "
});
formatter.step({
  "line": 326,
  "name": "Click on close button in the pop up",
  "keyword": "Then "
});
formatter.step({
  "line": 327,
  "name": "Verify the created URL redirect",
  "keyword": "Then "
});
formatter.step({
  "line": 328,
  "name": "Click on Version History option of created URL redirect",
  "keyword": "Then "
});
formatter.step({
  "line": 329,
  "name": "Verify the result",
  "keyword": "Then "
});
formatter.step({
  "line": 330,
  "name": "Click on close button",
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
  "duration": 32832663300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_is_on_home_page()"
});
formatter.result({
  "duration": 3048158300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_the_profile_icon()"
});
formatter.result({
  "duration": 3140766300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_the_admin_option()"
});
formatter.result({
  "duration": 8823813000,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_Selfservice_option_from_leftNavigation_panel()"
});
formatter.result({
  "duration": 8091294700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_URL_Redirect_Option()"
});
formatter.result({
  "duration": 7449156800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.verify_the_source_url_field_is_loaded()"
});
formatter.result({
  "duration": 3035865500,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.filter_the_Status_option_by_Enabled()"
});
formatter.result({
  "duration": 14202872600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.search_for_the_source_URL_Available()"
});
formatter.result({
  "duration": 13401976400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.disable_if_it_is_available()"
});
formatter.result({
  "duration": 5470316300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.enter_the_value_for_source_url()"
});
formatter.result({
  "duration": 3423330400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.enter_the_value_for_target_url()"
});
formatter.result({
  "duration": 3260943400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.select_the_date_value()"
});
formatter.result({
  "duration": 11165853900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_post_button()"
});
formatter.result({
  "duration": 10063571600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.verify_the_error_sucess_message()"
});
formatter.result({
  "duration": 48631100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_close_button_in_the_pop_up()"
});
formatter.result({
  "duration": 3044356800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.verify_the_created_url_redirect()"
});
formatter.result({
  "duration": 7549999700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.Click_on_the_Version_History_option_of_created_URL_redirect()"
});
formatter.result({
  "duration": 13166138700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.Verify_the_result()"
});
formatter.result({
  "duration": 13759400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.Click_on_close_button()"
});
formatter.result({
  "duration": 3063124400,
  "status": "passed"
});
formatter.after({
  "duration": 70306500,
  "status": "passed"
});
});