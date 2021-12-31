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
      "line": 136,
      "value": "#Scenario 4:"
    }
  ],
  "line": 138,
  "name": "Validating the URL - Redirect Enable functionality",
  "description": "",
  "id": "sourcex---url-redirect-functionality-validation;validating-the-url---redirect-enable-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 137,
      "name": "@Enabled_URLRedirectEdit"
    }
  ]
});
formatter.step({
  "line": 139,
  "name": "Enter the \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 140,
  "name": "User is on home page",
  "keyword": "When "
});
formatter.step({
  "line": 141,
  "name": "Click on the profile icon",
  "keyword": "Then "
});
formatter.step({
  "line": 142,
  "name": "Click on the Admin option",
  "keyword": "Then "
});
formatter.step({
  "line": 143,
  "name": "Click on Selfservice option from leftNavigation panel",
  "keyword": "Then "
});
formatter.step({
  "line": 144,
  "name": "Click on URL Redirect Option",
  "keyword": "Then "
});
formatter.step({
  "line": 145,
  "name": "Verify the Source URL field is loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 146,
  "name": "Filter the Status option by Enabled",
  "keyword": "Then "
});
formatter.step({
  "line": 147,
  "name": "Search for the old Source URL - Available",
  "keyword": "Then "
});
formatter.step({
  "line": 148,
  "name": "Disable if old Source URL is available",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "Enter the value for old Source URL",
  "keyword": "Then "
});
formatter.step({
  "line": 150,
  "name": "Enter the value for old Target URL",
  "keyword": "Then "
});
formatter.step({
  "line": 151,
  "name": "Select the Date value",
  "keyword": "Then "
});
formatter.step({
  "line": 152,
  "name": "Click on POST button",
  "keyword": "Then "
});
formatter.step({
  "line": 153,
  "name": "Edit the Target URL",
  "keyword": "Then "
});
formatter.step({
  "line": 154,
  "name": "Click on Save Changes Button",
  "keyword": "Then "
});
formatter.step({
  "line": 155,
  "name": "Verify the update-sucess message",
  "keyword": "Then "
});
formatter.step({
  "line": 156,
  "name": "Click on close button in the pop up",
  "keyword": "Then "
});
formatter.step({
  "line": 157,
  "name": "Verify the updated  URL redirect",
  "keyword": "Then "
});
formatter.examples({
  "line": 158,
  "name": "",
  "description": "",
  "id": "sourcex---url-redirect-functionality-validation;validating-the-url---redirect-enable-functionality;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 159,
      "id": "sourcex---url-redirect-functionality-validation;validating-the-url---redirect-enable-functionality;;1"
    },
    {
      "cells": [
        "mmarimuthu@vmware.com",
        "Leavemealone@2401"
      ],
      "line": 160,
      "id": "sourcex---url-redirect-functionality-validation;validating-the-url---redirect-enable-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 146900,
  "status": "passed"
});
formatter.scenario({
  "line": 160,
  "name": "Validating the URL - Redirect Enable functionality",
  "description": "",
  "id": "sourcex---url-redirect-functionality-validation;validating-the-url---redirect-enable-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 137,
      "name": "@Enabled_URLRedirectEdit"
    }
  ]
});
formatter.step({
  "line": 139,
  "name": "Enter the \"mmarimuthu@vmware.com\" and \"Leavemealone@2401\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 140,
  "name": "User is on home page",
  "keyword": "When "
});
formatter.step({
  "line": 141,
  "name": "Click on the profile icon",
  "keyword": "Then "
});
formatter.step({
  "line": 142,
  "name": "Click on the Admin option",
  "keyword": "Then "
});
formatter.step({
  "line": 143,
  "name": "Click on Selfservice option from leftNavigation panel",
  "keyword": "Then "
});
formatter.step({
  "line": 144,
  "name": "Click on URL Redirect Option",
  "keyword": "Then "
});
formatter.step({
  "line": 145,
  "name": "Verify the Source URL field is loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 146,
  "name": "Filter the Status option by Enabled",
  "keyword": "Then "
});
formatter.step({
  "line": 147,
  "name": "Search for the old Source URL - Available",
  "keyword": "Then "
});
formatter.step({
  "line": 148,
  "name": "Disable if old Source URL is available",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "Enter the value for old Source URL",
  "keyword": "Then "
});
formatter.step({
  "line": 150,
  "name": "Enter the value for old Target URL",
  "keyword": "Then "
});
formatter.step({
  "line": 151,
  "name": "Select the Date value",
  "keyword": "Then "
});
formatter.step({
  "line": 152,
  "name": "Click on POST button",
  "keyword": "Then "
});
formatter.step({
  "line": 153,
  "name": "Edit the Target URL",
  "keyword": "Then "
});
formatter.step({
  "line": 154,
  "name": "Click on Save Changes Button",
  "keyword": "Then "
});
formatter.step({
  "line": 155,
  "name": "Verify the update-sucess message",
  "keyword": "Then "
});
formatter.step({
  "line": 156,
  "name": "Click on close button in the pop up",
  "keyword": "Then "
});
formatter.step({
  "line": 157,
  "name": "Verify the updated  URL redirect",
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
  "duration": 49840562300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_is_on_home_page()"
});
formatter.result({
  "duration": 3094624800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_the_profile_icon()"
});
formatter.result({
  "duration": 3328638800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_the_admin_option()"
});
formatter.result({
  "duration": 13491981200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_Selfservice_option_from_leftNavigation_panel()"
});
formatter.result({
  "duration": 8192100900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_URL_Redirect_Option()"
});
formatter.result({
  "duration": 12098123600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.verify_the_source_url_field_is_loaded()"
});
formatter.result({
  "duration": 3078438800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.filter_the_Status_option_by_Enabled()"
});
formatter.result({
  "duration": 14390423000,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.search_for_the_old_source_URL_Available()"
});
formatter.result({
  "duration": 13599003500,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.disable_if_old_Source_URL_is_available()"
});
formatter.result({
  "duration": 6657691600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.Enter_the_value_for_old_Source_URL()"
});
formatter.result({
  "duration": 3500926300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.Enter_the_value_for_old_Target_URL()"
});
formatter.result({
  "duration": 3468772300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.select_the_date_value()"
});
formatter.result({
  "duration": 11272364600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_post_button()"
});
formatter.result({
  "duration": 10172936200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.edit_the_Target_URL()"
});
formatter.result({
  "duration": 16653494200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_Save_Changes_Button()"
});
formatter.result({
  "duration": 3104459100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.verify_the_update_sucess_message()"
});
formatter.result({
  "duration": 6231853400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_close_button_in_the_pop_up()"
});
formatter.result({
  "duration": 3138540700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.verify_the_updated_URL_redirect()"
});
formatter.result({
  "duration": 17062501800,
  "status": "passed"
});
formatter.after({
  "duration": 56040800,
  "status": "passed"
});
});