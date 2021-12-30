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
      "line": 54,
      "value": "#-------------------------------------------------------------------------------------------#"
    },
    {
      "line": 55,
      "value": "#URL Redirect creation - Edit Target URL scenario#"
    }
  ],
  "line": 58,
  "name": "Validating the URL - Edit the Target URL",
  "description": "",
  "id": "sourcex---url-redirect-functionality-validation;validating-the-url---edit-the-target-url",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 57,
      "name": "@EditTargetURL"
    }
  ]
});
formatter.step({
  "line": 59,
  "name": "Enter the \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "User is on home page",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "Click on the profile icon",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "Click on the Admin option",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "Click on Selfservice option from leftNavigation panel",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "Click on URL Redirect Option",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "Verify the Source URL field is loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "Filter the Status option by Enabled",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "Search for the Source URL - Available",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "Disable if it is available",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "Enter the value for Source URL",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "Enter the value for Target URL",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "Select the Date value",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "Click on POST button",
  "keyword": "Then "
});
formatter.step({
  "line": 73,
  "name": "Verify the error-sucess message",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "Click on close button in the pop up",
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "Verify the created URL redirect",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "Click on Edit option of created URL redirect",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "Clear the Target URL field and give new URL",
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "Verify the error-success message",
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "Verify the updated URL redirect",
  "keyword": "Then "
});
formatter.examples({
  "line": 81,
  "name": "",
  "description": "",
  "id": "sourcex---url-redirect-functionality-validation;validating-the-url---edit-the-target-url;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 82,
      "id": "sourcex---url-redirect-functionality-validation;validating-the-url---edit-the-target-url;;1"
    },
    {
      "cells": [
        "mmarimuthu@vmware.com",
        "Leavemealone@2401"
      ],
      "line": 83,
      "id": "sourcex---url-redirect-functionality-validation;validating-the-url---edit-the-target-url;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 167400,
  "status": "passed"
});
formatter.scenario({
  "line": 83,
  "name": "Validating the URL - Edit the Target URL",
  "description": "",
  "id": "sourcex---url-redirect-functionality-validation;validating-the-url---edit-the-target-url;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 57,
      "name": "@EditTargetURL"
    }
  ]
});
formatter.step({
  "line": 59,
  "name": "Enter the \"mmarimuthu@vmware.com\" and \"Leavemealone@2401\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "User is on home page",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "Click on the profile icon",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "Click on the Admin option",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "Click on Selfservice option from leftNavigation panel",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "Click on URL Redirect Option",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "Verify the Source URL field is loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "Filter the Status option by Enabled",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "Search for the Source URL - Available",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "Disable if it is available",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "Enter the value for Source URL",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "Enter the value for Target URL",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "Select the Date value",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "Click on POST button",
  "keyword": "Then "
});
formatter.step({
  "line": 73,
  "name": "Verify the error-sucess message",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "Click on close button in the pop up",
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "Verify the created URL redirect",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "Click on Edit option of created URL redirect",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "Clear the Target URL field and give new URL",
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "Verify the error-success message",
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "Verify the updated URL redirect",
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
  "duration": 33715847600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_is_on_home_page()"
});
formatter.result({
  "duration": 3097036400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_the_profile_icon()"
});
formatter.result({
  "duration": 3242022100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_the_admin_option()"
});
formatter.result({
  "duration": 8630539700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_Selfservice_option_from_leftNavigation_panel()"
});
formatter.result({
  "duration": 8135684500,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_URL_Redirect_Option()"
});
formatter.result({
  "duration": 9566811000,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.verify_the_source_url_field_is_loaded()"
});
formatter.result({
  "duration": 3051834600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.filter_the_Status_option_by_Enabled()"
});
formatter.result({
  "duration": 14423403600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.search_for_the_source_URL_Available()"
});
formatter.result({
  "duration": 13571666700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.disable_if_it_is_available()"
});
formatter.result({
  "duration": 22741338100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.enter_the_value_for_source_url()"
});
formatter.result({
  "duration": 3591618100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.enter_the_value_for_target_url()"
});
formatter.result({
  "duration": 3407695600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.select_the_date_value()"
});
formatter.result({
  "duration": 6235256800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_post_button()"
});
formatter.result({
  "duration": 10086220900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.verify_the_error_sucess_message()"
});
formatter.result({
  "duration": 113578500,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_close_button_in_the_pop_up()"
});
formatter.result({
  "duration": 3105880800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.verify_the_created_url_redirect()"
});
formatter.result({
  "duration": 7995899500,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.Click_on_Edit_option_of_created_URL_redirect()"
});
formatter.result({
  "duration": 13283154100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.Clear_the_Target_URL_field_and_give_new_URL()"
});
formatter.result({
  "duration": 10473097700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.verify_the_error_success_message()"
});
formatter.result({
  "duration": 89878600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.verify_the_updated_url_redirect()"
});
formatter.result({
  "duration": 7527792300,
  "status": "passed"
});
formatter.after({
  "duration": 303737300,
  "status": "passed"
});
});