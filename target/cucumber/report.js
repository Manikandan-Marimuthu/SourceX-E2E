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
      "line": 442,
      "value": "#Scenario 16"
    }
  ],
  "line": 444,
  "name": "Validating the URL - Redirect Filter functionality",
  "description": "",
  "id": "sourcex---url-redirect-functionality-validation;validating-the-url---redirect-filter-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 443,
      "name": "@URLRedirect_Filter_Option_Status"
    }
  ]
});
formatter.step({
  "line": 445,
  "name": "Enter the \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 446,
  "name": "User is on home page",
  "keyword": "When "
});
formatter.step({
  "line": 447,
  "name": "Click on the profile icon",
  "keyword": "Then "
});
formatter.step({
  "line": 448,
  "name": "Click on the Admin option",
  "keyword": "Then "
});
formatter.step({
  "line": 449,
  "name": "Click on Selfservice option from leftNavigation panel",
  "keyword": "Then "
});
formatter.step({
  "line": 450,
  "name": "Click on URL Redirect Option",
  "keyword": "Then "
});
formatter.step({
  "line": 451,
  "name": "Verify the Source URL field is loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 452,
  "name": "Filter the Status option by Enabled",
  "keyword": "Then "
});
formatter.step({
  "line": 453,
  "name": "Search for the  SourceURL_filter - Available",
  "keyword": "Then "
});
formatter.step({
  "line": 454,
  "name": "Disable  SourceURL_filter is available",
  "keyword": "And "
});
formatter.step({
  "line": 455,
  "name": "Enter the value for SourceURL_filter",
  "keyword": "Then "
});
formatter.step({
  "line": 456,
  "name": "Enter the value for TargetURL_filter",
  "keyword": "Then "
});
formatter.step({
  "line": 457,
  "name": "Select the Date value",
  "keyword": "Then "
});
formatter.step({
  "line": 458,
  "name": "Click on POST button",
  "keyword": "Then "
});
formatter.step({
  "line": 459,
  "name": "Click on Confirm button",
  "keyword": "Then "
});
formatter.step({
  "line": 460,
  "name": "Verify the error-sucess message",
  "keyword": "Then "
});
formatter.step({
  "line": 461,
  "name": "Click on close button in the pop up",
  "keyword": "Then "
});
formatter.step({
  "line": 462,
  "name": "Verify the created URLfilter redirect",
  "keyword": "Then "
});
formatter.step({
  "line": 463,
  "name": "Filter by Enabled Status",
  "keyword": "Then "
});
formatter.step({
  "line": 464,
  "name": "Filter by All Status",
  "keyword": "Then "
});
formatter.step({
  "line": 465,
  "name": "Filter by Disabled Status",
  "keyword": "Then "
});
formatter.examples({
  "line": 466,
  "name": "",
  "description": "",
  "id": "sourcex---url-redirect-functionality-validation;validating-the-url---redirect-filter-functionality;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 467,
      "id": "sourcex---url-redirect-functionality-validation;validating-the-url---redirect-filter-functionality;;1"
    },
    {
      "cells": [
        "mmarimuthu@vmware.com",
        "Leavemealone@2401"
      ],
      "line": 468,
      "id": "sourcex---url-redirect-functionality-validation;validating-the-url---redirect-filter-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 170000,
  "status": "passed"
});
formatter.scenario({
  "line": 468,
  "name": "Validating the URL - Redirect Filter functionality",
  "description": "",
  "id": "sourcex---url-redirect-functionality-validation;validating-the-url---redirect-filter-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 443,
      "name": "@URLRedirect_Filter_Option_Status"
    }
  ]
});
formatter.step({
  "line": 445,
  "name": "Enter the \"mmarimuthu@vmware.com\" and \"Leavemealone@2401\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 446,
  "name": "User is on home page",
  "keyword": "When "
});
formatter.step({
  "line": 447,
  "name": "Click on the profile icon",
  "keyword": "Then "
});
formatter.step({
  "line": 448,
  "name": "Click on the Admin option",
  "keyword": "Then "
});
formatter.step({
  "line": 449,
  "name": "Click on Selfservice option from leftNavigation panel",
  "keyword": "Then "
});
formatter.step({
  "line": 450,
  "name": "Click on URL Redirect Option",
  "keyword": "Then "
});
formatter.step({
  "line": 451,
  "name": "Verify the Source URL field is loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 452,
  "name": "Filter the Status option by Enabled",
  "keyword": "Then "
});
formatter.step({
  "line": 453,
  "name": "Search for the  SourceURL_filter - Available",
  "keyword": "Then "
});
formatter.step({
  "line": 454,
  "name": "Disable  SourceURL_filter is available",
  "keyword": "And "
});
formatter.step({
  "line": 455,
  "name": "Enter the value for SourceURL_filter",
  "keyword": "Then "
});
formatter.step({
  "line": 456,
  "name": "Enter the value for TargetURL_filter",
  "keyword": "Then "
});
formatter.step({
  "line": 457,
  "name": "Select the Date value",
  "keyword": "Then "
});
formatter.step({
  "line": 458,
  "name": "Click on POST button",
  "keyword": "Then "
});
formatter.step({
  "line": 459,
  "name": "Click on Confirm button",
  "keyword": "Then "
});
formatter.step({
  "line": 460,
  "name": "Verify the error-sucess message",
  "keyword": "Then "
});
formatter.step({
  "line": 461,
  "name": "Click on close button in the pop up",
  "keyword": "Then "
});
formatter.step({
  "line": 462,
  "name": "Verify the created URLfilter redirect",
  "keyword": "Then "
});
formatter.step({
  "line": 463,
  "name": "Filter by Enabled Status",
  "keyword": "Then "
});
formatter.step({
  "line": 464,
  "name": "Filter by All Status",
  "keyword": "Then "
});
formatter.step({
  "line": 465,
  "name": "Filter by Disabled Status",
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
  "duration": 34594327600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_is_on_home_page()"
});
formatter.result({
  "duration": 3084897500,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_the_profile_icon()"
});
formatter.result({
  "duration": 3212431300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_the_admin_option()"
});
formatter.result({
  "duration": 12447883300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_Selfservice_option_from_leftNavigation_panel()"
});
formatter.result({
  "duration": 8154432600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_URL_Redirect_Option()"
});
formatter.result({
  "duration": 11169155700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.verify_the_source_url_field_is_loaded()"
});
formatter.result({
  "duration": 3106260200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.filter_the_Status_option_by_Enabled()"
});
formatter.result({
  "duration": 14419097200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.search_for_the_SourceURL_filter_Available()"
});
formatter.result({
  "duration": 26466577400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.disable_SourceURL_filter_is_available()"
});
formatter.result({
  "duration": 32922721200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.enter_the_value_for_SourceURL_filter()"
});
formatter.result({
  "duration": 6269298700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.enter_the_value_for_targetURL_filter()"
});
formatter.result({
  "duration": 6341545300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.select_the_date_value()"
});
formatter.result({
  "duration": 11240176700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_post_button()"
});
formatter.result({
  "duration": 10139118300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_Confirm_button()"
});
formatter.result({
  "duration": 3119102900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.verify_the_error_sucess_message()"
});
formatter.result({
  "duration": 98661200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_close_button_in_the_pop_up()"
});
formatter.result({
  "duration": 3087585400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.verify_the_created_URLfilter_redirect()"
});
formatter.result({
  "duration": 8744952900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.filter_by_Enabled_Status()"
});
formatter.result({
  "duration": 20626355400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.filter_by_All_Status()"
});
formatter.result({
  "duration": 20530053200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.filter_by_Disabled_Status()"
});
formatter.result({
  "duration": 20578800800,
  "status": "passed"
});
formatter.after({
  "duration": 112603400,
  "status": "passed"
});
});