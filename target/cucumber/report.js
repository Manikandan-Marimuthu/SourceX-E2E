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
      "line": 335,
      "value": "#----------------------------------------------------------------------------------------------------------#"
    },
    {
      "line": 336,
      "value": "#Scenario 12"
    }
  ],
  "line": 338,
  "name": "Validating the URL - Redirect Filter functionality",
  "description": "",
  "id": "sourcex---url-redirect-functionality-validation;validating-the-url---redirect-filter-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 337,
      "name": "@URLRedirect_Filter_Option_SourceURL"
    }
  ]
});
formatter.step({
  "line": 339,
  "name": "Enter the \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 340,
  "name": "User is on home page",
  "keyword": "When "
});
formatter.step({
  "line": 341,
  "name": "Click on the profile icon",
  "keyword": "Then "
});
formatter.step({
  "line": 342,
  "name": "Click on the Admin option",
  "keyword": "Then "
});
formatter.step({
  "line": 343,
  "name": "Click on Selfservice option from leftNavigation panel",
  "keyword": "Then "
});
formatter.step({
  "line": 344,
  "name": "Click on URL Redirect Option",
  "keyword": "Then "
});
formatter.step({
  "line": 345,
  "name": "Verify the Source URL field is loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 346,
  "name": "Filter the Status option by Enabled",
  "keyword": "Then "
});
formatter.step({
  "line": 347,
  "name": "Search for the  SourceURL_filter - Available",
  "keyword": "Then "
});
formatter.step({
  "line": 348,
  "name": "Disable  SourceURL_filter is available",
  "keyword": "And "
});
formatter.step({
  "line": 349,
  "name": "Enter the value for SourceURL_filter",
  "keyword": "Then "
});
formatter.step({
  "line": 350,
  "name": "Enter the value for TargetURL_filter",
  "keyword": "Then "
});
formatter.step({
  "line": 351,
  "name": "Select the Date value",
  "keyword": "Then "
});
formatter.step({
  "line": 352,
  "name": "Click on POST button",
  "keyword": "Then "
});
formatter.step({
  "line": 353,
  "name": "Click on Confirm button",
  "keyword": "Then "
});
formatter.step({
  "line": 354,
  "name": "Verify the error-sucess message",
  "keyword": "Then "
});
formatter.step({
  "line": 355,
  "name": "Click on close button in the pop up",
  "keyword": "Then "
});
formatter.step({
  "line": 356,
  "name": "Verify the created URLfilter redirect",
  "keyword": "Then "
});
formatter.step({
  "line": 357,
  "name": "Filter the Status option by SourceURL",
  "keyword": "Then "
});
formatter.examples({
  "line": 358,
  "name": "",
  "description": "",
  "id": "sourcex---url-redirect-functionality-validation;validating-the-url---redirect-filter-functionality;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 359,
      "id": "sourcex---url-redirect-functionality-validation;validating-the-url---redirect-filter-functionality;;1"
    },
    {
      "cells": [
        "mmarimuthu@vmware.com",
        "Leavemealone@2401"
      ],
      "line": 360,
      "id": "sourcex---url-redirect-functionality-validation;validating-the-url---redirect-filter-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 147500,
  "status": "passed"
});
formatter.scenario({
  "line": 360,
  "name": "Validating the URL - Redirect Filter functionality",
  "description": "",
  "id": "sourcex---url-redirect-functionality-validation;validating-the-url---redirect-filter-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 337,
      "name": "@URLRedirect_Filter_Option_SourceURL"
    }
  ]
});
formatter.step({
  "line": 339,
  "name": "Enter the \"mmarimuthu@vmware.com\" and \"Leavemealone@2401\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 340,
  "name": "User is on home page",
  "keyword": "When "
});
formatter.step({
  "line": 341,
  "name": "Click on the profile icon",
  "keyword": "Then "
});
formatter.step({
  "line": 342,
  "name": "Click on the Admin option",
  "keyword": "Then "
});
formatter.step({
  "line": 343,
  "name": "Click on Selfservice option from leftNavigation panel",
  "keyword": "Then "
});
formatter.step({
  "line": 344,
  "name": "Click on URL Redirect Option",
  "keyword": "Then "
});
formatter.step({
  "line": 345,
  "name": "Verify the Source URL field is loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 346,
  "name": "Filter the Status option by Enabled",
  "keyword": "Then "
});
formatter.step({
  "line": 347,
  "name": "Search for the  SourceURL_filter - Available",
  "keyword": "Then "
});
formatter.step({
  "line": 348,
  "name": "Disable  SourceURL_filter is available",
  "keyword": "And "
});
formatter.step({
  "line": 349,
  "name": "Enter the value for SourceURL_filter",
  "keyword": "Then "
});
formatter.step({
  "line": 350,
  "name": "Enter the value for TargetURL_filter",
  "keyword": "Then "
});
formatter.step({
  "line": 351,
  "name": "Select the Date value",
  "keyword": "Then "
});
formatter.step({
  "line": 352,
  "name": "Click on POST button",
  "keyword": "Then "
});
formatter.step({
  "line": 353,
  "name": "Click on Confirm button",
  "keyword": "Then "
});
formatter.step({
  "line": 354,
  "name": "Verify the error-sucess message",
  "keyword": "Then "
});
formatter.step({
  "line": 355,
  "name": "Click on close button in the pop up",
  "keyword": "Then "
});
formatter.step({
  "line": 356,
  "name": "Verify the created URLfilter redirect",
  "keyword": "Then "
});
formatter.step({
  "line": 357,
  "name": "Filter the Status option by SourceURL",
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
  "duration": 39151674500,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_is_on_home_page()"
});
formatter.result({
  "duration": 3129797899,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_the_profile_icon()"
});
formatter.result({
  "duration": 3212882200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_the_admin_option()"
});
formatter.result({
  "duration": 22982751600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_Selfservice_option_from_leftNavigation_panel()"
});
formatter.result({
  "duration": 8203442199,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_URL_Redirect_Option()"
});
formatter.result({
  "duration": 11666799400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.verify_the_source_url_field_is_loaded()"
});
formatter.result({
  "duration": 3060299700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.filter_the_Status_option_by_Enabled()"
});
formatter.result({
  "duration": 14378511000,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.search_for_the_SourceURL_filter_Available()"
});
formatter.result({
  "duration": 26551096399,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.disable_SourceURL_filter_is_available()"
});
formatter.result({
  "duration": 32987315500,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.enter_the_value_for_SourceURL_filter()"
});
formatter.result({
  "duration": 6375123200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.enter_the_value_for_targetURL_filter()"
});
formatter.result({
  "duration": 6438092900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.select_the_date_value()"
});
formatter.result({
  "duration": 11276649600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_post_button()"
});
formatter.result({
  "duration": 10205788399,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_Confirm_button()"
});
formatter.result({
  "duration": 3175036300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.verify_the_error_sucess_message()"
});
formatter.result({
  "duration": 126359000,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_close_button_in_the_pop_up()"
});
formatter.result({
  "duration": 3150700600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.verify_the_created_URLfilter_redirect()"
});
formatter.result({
  "duration": 14050848300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.filter_the_Status_option_by_SourceURL()"
});
formatter.result({
  "duration": 31196713199,
  "status": "passed"
});
formatter.after({
  "duration": 106244001,
  "status": "passed"
});
});