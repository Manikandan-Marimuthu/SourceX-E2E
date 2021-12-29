Feature: SourceX - URL Redirect functionality Validation

#URL Redirect creation - Present date#

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
#URL Redirect creation - Future date#

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

#-----------------------------------------------------------------------------------------------------------#
#URL Redirect Enable feature#

@URLenable
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
Then Again search for the Source URL
And Enable the URL redirect again and refresh the page
Then Enter the value for Source URL
Then Enter the value for Target URL
Then Select the Date value
Then Click on POST button
Then Verify the error-sucess message
Then Click on close button in the pop up
Then Verify the enabled URL redirect
Examples:
|username        			|password            |
|mmarimuthu@vmware.com      |Leavemealone@2401   |

#-----------------------------------------------------------------------------------------------------------#
#URL Redirect Disable feature#

@URLenable
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
Then Again search for the Source URL
Then Enter the value for Source URL
Then Enter the value for Target URL
Then Select the Date value
Then Click on POST button
Then Verify the error-sucess message
Then Click on close button in the pop up
Then Verify the disabled URL redirect
Examples:
|username        			|password            |
|mmarimuthu@vmware.com      |Leavemealone@2401   |


#-----------------------------------------------------------------------------------------------------------#

#URL Redirect creation - Cross BU#

@smoke @sanity @Regression
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
Then Enter the value for BU1 Source URL
Then Enter the value for BU2 Target URL
Then Select the Date value
Then Click on POST button
Then Verify the error-sucess message
Then Click on close button in the pop up
Then Verify the created URL redirect
Examples:
|username        			|password            |
|mmarimuthu@vmware.com      |Leavemealone@2401   |


#-----------------------------------------------------------------------------------------------------------#

#URL Redirect creation - Cross Content#
@smoke @sanity @Regression
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
Then Enter the value for Content1 Source URL
Then Enter the value for Content2 Target URL
Then Select the Date value
Then Click on POST button
Then Verify the error-sucess message
Then Click on close button in the pop up
Then Verify the created URL redirect
Examples:
|username        			|password            |
|mmarimuthu@vmware.com      |Leavemealone@2401   |







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


