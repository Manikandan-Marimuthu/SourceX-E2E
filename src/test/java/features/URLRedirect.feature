Feature: SourceX - URL Redirect functionality Validation

#URL Redirect creation - Present date scenario#

@URLRedirect @smoke @sanity @Regression
Scenario Outline: Validating the URL - Redirect creation
Given Enter the "<username>" and "<password>"
When User is on home page
Then Click on the profile icon
Then Click on the Admin option
Then Click on Selfservice option from leftNavigation panel
Then Click on URL Redirect Option
Then Verify the Source URL field is loaded
Then Filter the Status option by Enabled
Then Search for the Source URL - Available
And Disable if it is available
Then Enter the value for Source URL
Then Enter the value for Target URL
Then Select the Date value
Then Click on POST button
Then Verify the error-sucess message
Then Click on close button in the pop up
Then Verify the created URL redirect
Examples:
|username        			|password            |
|mmarimuthu@vmware.com      |Leavemealone@2401   |

#-----------------------------------------------------------------------------------------------------------#
#URL Redirect creation - Future date scenario#

@futuredate
Scenario Outline: Validating the URL - Redirect creation
Given Enter the "<username>" and "<password>"
When User is on home page
Then Click on the profile icon
Then Click on the Admin option
Then Click on Selfservice option from leftNavigation panel
Then Click on URL Redirect Option
Then Verify the Source URL field is loaded
Then Filter the Status option by Enabled
Then Search for the Source URL - Available
And Disable if it is available
Then Enter the value for Source URL
Then Enter the value for Target URL
Then Select the Future Date value
Then Click on POST button
Then Verify the error-sucess message
Then Click on close button in the pop up
Then Verify the created URL redirect for future dated
Examples:
|username        			|password            |
|mmarimuthu@vmware.com      |Leavemealone@2401   |

#-------------------------------------------------------------------------------------------#
#URL Redirect creation - Edit Target URL scenario#

@EditTargetURL
Scenario Outline: Validating the URL - Edit the Target URL
Given Enter the "<username>" and "<password>"
When User is on home page
Then Click on the profile icon
Then Click on the Admin option
Then Click on Selfservice option from leftNavigation panel
Then Click on URL Redirect Option
Then Verify the Source URL field is loaded
Then Filter the Status option by Enabled
Then Search for the Source URL - Available
And Disable if it is available
Then Enter the value for Source URL
Then Enter the value for Target URL
Then Select the Date value
Then Click on POST button
Then Verify the error-sucess message
Then Click on close button in the pop up
Then Verify the created URL redirect
Then Click on Edit option of created URL redirect
Then Clear the Target URL field and give new URL
Then Verify the error-success message
Then Verify the updated URL redirect

Examples:
|username        			|password            |
|mmarimuthu@vmware.com      |Leavemealone@2401   |

#......Sangavva features added........................
#Scenario 2:
@URLRedirectCrossBU
Scenario Outline: Validating the URL - Redirect Cross BU creation
Given Enter the "<username>" and "<password>"
When User is on home page
Then Click on the profile icon
Then Click on the Admin option
Then Click on Selfservice option from leftNavigation panel
Then Click on URL Redirect Option
Then Verify the Source URL field is loaded
Then Filter the Status option by Enabled
Then Search for the Cross BU Source URL - Available
And Disable if Cross BU Source URL is available
Then Enter the value for Cross BU Source URL
Then Enter the value for Cross BU Target URL
Then Select the Date value
Then Click on POST button
Then Click on Confirm button
Then Verify the error-sucess message
Then Click on close button in the pop up
Then Verify the created Cross BU URL redirect
Examples:
|username        			|password            |
|mmarimuthu@vmware.com      |Leavemealone@2401   |

#Scenario 3:
@URLRedirectCrossContent
Scenario Outline: Validating the URL - Redirect Cross Content creation
Given Enter the "<username>" and "<password>"
When User is on home page
Then Click on the profile icon
Then Click on the Admin option
Then Click on Selfservice option from leftNavigation panel
Then Click on URL Redirect Option
Then Verify the Source URL field is loaded
Then Filter the Status option by Enabled
Then Search for the Cross Content Source URL - Available
And Disable if Cross Content Source URL is available
Then Enter the value for Cross Content Source URL
Then Enter the value for Cross Content Target URL
Then Select the Date value
Then Click on POST button
Then Click on Confirm button
Then Verify the error-sucess message
Then Click on close button in the pop up
Then Verify the created Cross Content URL redirect
Examples:
|username        			|password            |
|mmarimuthu@vmware.com      |Leavemealone@2401   |

#Scenario 4:
@Enabled_URLRedirectEdit
Scenario Outline: Validating the URL - Redirect Enable functionality
Given Enter the "<username>" and "<password>"
When User is on home page
Then Click on the profile icon
Then Click on the Admin option
Then Click on Selfservice option from leftNavigation panel
Then Click on URL Redirect Option
Then Verify the Source URL field is loaded
Then Filter the Status option by Enabled
Then Search for the old Source URL - Available
And Disable if old Source URL is available
Then Enter the value for old Source URL
Then Enter the value for old Target URL
Then Select the Date value
Then Click on POST button
Then Edit the Target URL
Then Click on Save Changes Button
Then Verify the update-sucess message
Then Click on close button in the pop up
Then Verify the updated  URL redirect
Examples:
|username        			|password            |
|mmarimuthu@vmware.com      |Leavemealone@2401   |


#Scenario 5:
@Disabled_URLRedirectEdit
Scenario Outline: Validating the URL - Redirect Enable functionality
Given Enter the "<username>" and "<password>"
When User is on home page
Then Click on the profile icon
Then Click on the Admin option
Then Click on Selfservice option from leftNavigation panel
Then Click on URL Redirect Option
Then Verify the Source URL field is loaded
Then Filter the Status option by Disabled
Then Search for the Old Source URL - Disabled
Then Enter the value for Old Source URL
Then Enter the value for Old Target URL
Then Select the Date value
Then Click on POST button
Then Edit the old Target URL
Then Click on Save Changes Button
Then Verify the update-sucess message
Then Click on close button in the pop up
Then Verify the updated Disabled URL redirect
Then Filter the Status option by Enabled
Then Search for the Old Source Available
And Disable The old SourceURL
Examples:
|username        			|password            |
|mmarimuthu@vmware.com      |Leavemealone@2401   |

#-----------------------------------------------------------------------------------------------------------#


##############################<-------Sample features-------->#####################################

@Mobile
Scenario: Home page default login
Given User is on NetBanking landing page
When User login into application with "john" and password "4321"
Then Home page is populated
And Cards displayed are "false"

@PortalTest
Scenario: Home page default login
Given User is on NetBanking landing page
When User sign up with following details
| jenny | abcd | john@abcd.com |Australia | 3242353|
Then Home page is populated
And Cards displayed are "false"

Scenario: Home page default login
Given User is on NetBanking landing page
When User sign up with following details
| jenny | abcd | john@abcd.com |Australia | 3242353|
Then Home page is populated
And Cards displayed are "false"

Scenario: Home page default login
Given User is on NetBanking landing page
When User sign up with following details
| jenny | abcd | john@abcd.com |Australia | 3242353|
Then Home page is populated
And Cards displayed are "false"

Scenario: Home page default login
Given User is on NetBanking landing page
When User sign up with following details
| jenny | abcd | john@abcd.com |Australia | 3242353|
Then Home page is populated
And Cards displayed are "false"

Scenario: Home page default login
Given User is on NetBanking landing page
When User sign up with following details
| jenny | abcd | john@abcd.com |Australia | 3242353|
Then Home page is populated
And Cards displayed are "false"


