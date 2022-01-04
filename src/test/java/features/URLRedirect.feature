Feature: SourceX - URL Redirect functionality Validation

#Scenario 1
#URL Redirect creation - Present date scenario#

@URLRedirect
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
#Scenario 2
#URL Redirect creation - Future date scenario#

@URLRedirect @fail
Scenario Outline: Validating the URL - Redirect future date creation
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
#Scenario 3
#URL Redirect creation - Edit Target URL scenario#

@EditTargetURL @URLRedirect
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

#Scenario 4

@URLRedirectCrossBU @URLRedirect
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

#Scenario 5
@URLRedirectCrossContent @URLRedirect
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

#Scenario 6
@Enabled_URLRedirectEdit @URLRedirect
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


#Scenario 7
@Disabled_URLRedirectEdit @URLRedirect
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


#Scenario 8:
@URLRedirect_A-BandB-A_when_A-B_is_Disabled
Scenario Outline: Validating the URL - Redirect A-B and B-A functionality
Given Enter the "<username>" and "<password>"
When User is on home page
Then Click on the profile icon
Then Click on the Admin option
Then Click on Selfservice option from leftNavigation panel
Then Click on URL Redirect Option
Then Verify the Source URL field is loaded
Then Filter the Status option by Enabled
Then Search for the  SourceURLA - Available
And Disable  SourceURLA is available
Then Enter the value for SourceURLA
Then Enter the value for TargetURLB
Then Select the Date value
Then Click on POST button
Then Verify the error-successab message
Then Click on close button in the pop up
Then Verify the created URLAB redirect
And Disable  SourceURLA is available
Then Verify the Source URL field is loaded
Then Filter the Status option by Enabled
Then Search for the  Source URLB - Available
And Disable  SourceURLB is available
Then Enter the value for SourceURLB
Then Enter the value for TargetURLA
Then Select the Date value
Then Click on POST button
Then Verify the error-sucess message
Then Click on close button in the pop up
Then Verify the created URLAB1 redirect
And Disable  SourceURLB is available
Examples:
|username        			|password            |
|mmarimuthu@vmware.com      |Leavemealone@2401   |


#Scenario 9:
@URLRedirect_A-BandB-A_when_A-B_is_Enabled
Scenario Outline: Validating the URL - Redirect A-B and B-A functionality
Given Enter the "<username>" and "<password>"
When User is on home page
Then Click on the profile icon
Then Click on the Admin option
Then Click on Selfservice option from leftNavigation panel
Then Click on URL Redirect Option
Then Verify the Source URL field is loaded
Then Filter the Status option by Enabled
Then Search for the  SourceURLa - Available
And Disable  SourceURLa is available
Then Enter the value for SourceURLa
Then Enter the value for TargetURLb
Then Select the Date value
Then Click on POST button
Then Verify the error-sucess message
Then Click on close button in the pop up
Then Verify the created URLab redirect
Then Verify the Source URL field is loaded
Then Filter the Status option by Enabled
Then Search for the  Source URLb - Available
And Disable  SourceURLb is available
Then Enter the value for SourceURLb
Then Enter the value for TargetURLa
Then Select the Date value
Then Click on POST button
Then Verify the error message
Then Click on close button in the pop up
Examples:
|username        			|password            |
|mmarimuthu@vmware.com      |Leavemealone@2401   |

#----------------------------------------------------------------------------------------------------------#
#Scenario 10:
#URL Redirect creation - Edit Source URL scenario#

@EditSourceURL @URLRedirect
Scenario Outline: Validating the URL - Edit the Target URL
Given Enter the "<username>" and "<password>"
When User is on home page
Then Click on the profile icon
Then Click on the Admin option
Then Click on Selfservice option from leftNavigation panel
Then Click on URL Redirect Option
Then Verify the Source URL field is loaded
Then Filter the Status option by Enabled
Then Search for the update Source URL value - Available
And  Disable if it is available
Then Filter the Status option by Enabled
Then Search for the Source URL - Available
And  Disable if it is available
Then Enter the value for Source URL
Then Enter the value for Target URL
Then Select the Date value
Then Click on POST button
Then Verify the error-sucess message
Then Click on close button in the pop up
Then Verify the created URL redirect
Then Click on Edit option of created URL redirect
Then Clear the Source URL field and give new URL
Then Verify the error-success message 
Then Verify the updated URL redirect for Source URL update


Examples:
|username        			|password            |
|mmarimuthu@vmware.com      |Leavemealone@2401   |

#----------------------------------------------------------------------------------------------------------#
#Scenario 11:
#URL Redirect creation - Version History scenario#

@VersionHistory
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
Then Click on Version History option of created URL redirect
Then Verify the result
Then Click on close button
Examples:
|username        			|password            |
|mmarimuthu@vmware.com      |Leavemealone@2401   |

#----------------------------------------------------------------------------------------------------------#
#Scenario 12
@URLRedirect_Filter_Option_SourceURL 
Scenario Outline: Validating the URL - Redirect Filter functionality
Given Enter the "<username>" and "<password>"
When User is on home page
Then Click on the profile icon
Then Click on the Admin option
Then Click on Selfservice option from leftNavigation panel
Then Click on URL Redirect Option
Then Verify the Source URL field is loaded
Then Filter the Status option by Enabled
Then Search for the  SourceURL_filter - Available
And Disable  SourceURL_filter is available
Then Enter the value for SourceURL_filter
Then Enter the value for TargetURL_filter
Then Select the Date value
Then Click on POST button
Then Click on Confirm button
Then Verify the error-sucess message
Then Click on close button in the pop up
Then Verify the created URLfilter redirect
Then Filter the Status option by SourceURL
Examples:
|username        			|password            |
|mmarimuthu@vmware.com      |Leavemealone@2401   |



#-----------------------------------------------------------------------------------------------------------#


##############################<-------Sample features-------->#####################################

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


