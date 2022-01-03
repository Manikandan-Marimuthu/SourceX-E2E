package stepDefinations;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.And;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotEquals;

import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.util.ArrayList;
import java.util.List;

import org.junit.Assert;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import Cucumber.Automation.Base;

@RunWith(Cucumber.class)
public class stepDefination extends Base {
	
	public WebDriver driver;
	
	
	/* <------------------------------------URL Redirect Features starting---------------------------------------->*/
	
	
	@Given("^Enter the \"([^\"]*)\" and \"([^\"]*)\"$")
	public void enter_the_something_and_something(String strArg1, String strArg2) throws Throwable {
		
		driver= Base.getDriver();
		
		WebElement username = driver.findElement(By.id("userInput"));
		WebElement nextButton = driver.findElement(By.id("userNameFormSubmit"));
		wait.until(ExpectedConditions.visibilityOf(username));
		username.sendKeys(strArg1);
		nextButton.click();
		Thread.sleep(5000);
		
		
		WebElement password = driver.findElement(By.id("password"));
		wait.until(ExpectedConditions.visibilityOf(password));

		password.sendKeys(strArg2);
		
		WebElement siginButton = driver.findElement(By.id("signIn"));
		siginButton.click();
		
		Thread.sleep(8000);
		
	}
	
	@When("^User is on home page$")
    public void user_is_on_home_page() throws Throwable {
		
		WebElement logo = driver.findElement(By.xpath("//a[@class='source-logo d-flex float-md-left']"));
		wait.until(ExpectedConditions.visibilityOf(logo));
		Thread.sleep(3000);
				
    }

    @Then("^Click on the profile icon$")
    public void click_on_the_profile_icon() throws Throwable {
    	WebElement profilePic = driver.findElement(By.xpath("//*[@id=\"coach-item-home-profile-pic\"]/span/img"));
    	wait.until(ExpectedConditions.visibilityOf(profilePic));
    	profilePic.click();
    	Thread.sleep(3000);	    	
    }
    
    @Then("^Click on the Admin option$")
    public void click_on_the_admin_option() throws Throwable {
    	WebElement adminOption = driver.findElement(By.xpath("//*[text()=\"Admin\"]"));
    	wait.until(ExpectedConditions.visibilityOf(adminOption));
    	adminOption.click();
    	Thread.sleep(3000);
    }
    
    @Then("^Click on Selfservice option from leftNavigation panel$")
    public void click_Selfservice_option_from_leftNavigation_panel() throws Throwable {
		WebElement selfService = driver.findElement(By.xpath("//*[text()='Self Service ']"));
		wait.until(ExpectedConditions.visibilityOf(selfService));
		Thread.sleep(5000);
		selfService.click();
    	Thread.sleep(3000);        
    }

    @Then("^Click on URL Redirect Option$")
    public void click_on_URL_Redirect_Option() throws Throwable {
    	WebElement urlRedirect = driver.findElement(By.xpath("//a[text()='URL Redirects']"));
		wait.until(ExpectedConditions.visibilityOf(urlRedirect));
		urlRedirect.click();
    	Thread.sleep(5000);	        
    }

    @Then("^Verify the Source URL field is loaded$")
    public void verify_the_source_url_field_is_loaded() throws Throwable {
    	WebElement sourceURLField = driver.findElement(By.xpath("//input[@formcontrolname='sourceUrl']"));
    	wait.until(ExpectedConditions.visibilityOf(sourceURLField));		
    	Thread.sleep(3000);	        
    }
    
    @Then("^Filter the Status option by Enabled$")
    public void filter_the_Status_option_by_Enabled() throws Throwable {
    	WebElement statusFilterIcon = driver.findElement(By.xpath("(//cds-icon[@shape='filter-grid'])[5]"));
    	wait.until(ExpectedConditions.visibilityOf(statusFilterIcon));	
    	Thread.sleep(3000);
    	
    	Actions action = new Actions(driver);
    	action.moveToElement(statusFilterIcon).click().perform();
    	Thread.sleep(3000);
    		
    	Robot robot = new Robot();
    	robot.keyPress(KeyEvent.VK_TAB);
    	robot.keyRelease(KeyEvent.VK_TAB);
    	robot.keyPress(KeyEvent.VK_DOWN);
    	robot.keyRelease(KeyEvent.VK_DOWN);
    	Thread.sleep(5000);
    	
    	robot.keyPress(KeyEvent.VK_ESCAPE);
    	robot.keyRelease(KeyEvent.VK_ESCAPE);
    	Thread.sleep(3000);
    }
    
    @Then("^Search for the Source URL - Available$")
    public void search_for_the_source_URL_Available() throws Throwable {
    	WebElement sourceurlFilterIcon = driver.findElement(By.xpath("(//cds-icon[@shape='filter-grid'])[1]"));
    	wait.until(ExpectedConditions.visibilityOf(sourceurlFilterIcon));
    	
    	Actions action = new Actions(driver);
    	action.moveToElement(sourceurlFilterIcon).click().perform();
    	Thread.sleep(3000);
    	
    	WebElement sourceurlSearchvalue = driver.findElement(By.xpath("//input[@name='search']"));
    	sourceurlSearchvalue.sendKeys(prop.getProperty("SourceURLValue"));
    	Thread.sleep(5000);
    	
    	Robot robot = new Robot();
    	robot.keyPress(KeyEvent.VK_ESCAPE);
    	robot.keyRelease(KeyEvent.VK_ESCAPE);
    	Thread.sleep(5000);	
    }
    
    @And("^Disable if it is available$")
    public void disable_if_it_is_available() throws Throwable {
    	List<WebElement> tableResult = driver.findElements(By.xpath("//div[@class='datagrid-scrolling-cells']"));
    	int resultSize = tableResult.size();
    	System.out.println("Result of the Filter is: "+resultSize);
    	if(resultSize>0)
    	{
    	 Robot robot = new Robot();
    	 robot.keyPress(KeyEvent.VK_DOWN);
         robot.keyRelease(KeyEvent.VK_DOWN);
    	 robot.keyPress(KeyEvent.VK_DOWN);
         robot.keyRelease(KeyEvent.VK_DOWN);
    	 WebElement actionIcon = driver.findElement(By.xpath("//cds-icon[@shape='ellipsis-vertical']"));
    	 
    	 Actions action = new Actions(driver);
    	 action.sendKeys(Keys.PAGE_DOWN).build().perform();
    	 Thread.sleep(3000);
    	  
    	  actionIcon.click();
      	  Thread.sleep(3000);
    		
    	// Scrolling down the page till the element is found	
      	  

    	  WebElement disableIcon = driver.findElement(By.xpath("//div[contains(text(),'Disable')]"));
    	  disableIcon.click(); 
    	  Thread.sleep(2000);
    	  
    	  boolean disableMsg = driver.getPageSource().contains("Do you want to disable this URL redirect?");
    	  System.out.println("Validation Message is: "+disableMsg);
      	  Assert.assertEquals(disableMsg, true);
      	  Thread.sleep(2000);
      	  
      	  WebElement confirmButton = driver.findElement(By.xpath("//button[@class='btn-dialog']"));
      	  wait.until(ExpectedConditions.visibilityOf(confirmButton));
      	  confirmButton.click();	
      	  Thread.sleep(5000);	
      	  
      	  boolean disableconfirmationMsg = driver.getPageSource().contains("URL redirect has been updated sucessfully.");
          WebElement closeButton = driver.findElement(By.xpath("//button[@class='btn-dialog']"));
      	
      	  wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[@class='btn-dialog']")));
      	  
      	  System.out.println("Validation Message is: "+disableconfirmationMsg);
    	  Assert.assertEquals(disableMsg, true);
    	  Thread.sleep(2000);
    	  
    	  
    	  wait.until(ExpectedConditions.visibilityOf(closeButton));
    	  closeButton.click();	
    	  driver.navigate().refresh();
    	  Thread.sleep(3000);
    	  
    	}
    	else
    	{
    		System.out.println("URL-Redirect is already in disabled state");
    		driver.navigate().refresh();
      	    Thread.sleep(3000);
    	}
    	Thread.sleep(2000);	        
    }

    @Then("^Enter the value for Source URL$")
    public void enter_the_value_for_source_url() throws Throwable {
    	WebElement sourceURLField = driver.findElement(By.xpath("//input[@formcontrolname='sourceUrl']"));
    	sourceURLField.sendKeys(prop.getProperty("SourceURLValue"));			
    	Thread.sleep(3000);	        
    }

    @Then("^Enter the value for Target URL$")
    public void enter_the_value_for_target_url() throws Throwable {     
    	WebElement TargetURLField = driver.findElement(By.xpath("//input[@formcontrolname='targetUrl']"));
    	TargetURLField.sendKeys(prop.getProperty("TargetURLValue"));
    	Thread.sleep(3000);	     	
    }

    @Then("^Select the Date value$")
    public void select_the_date_value() throws Throwable {
    	
    	Actions action = new Actions(driver);
    	action.moveToElement(driver.findElement(By.xpath("//button[@title='Toggle datepicker']/cds-icon"))).click().perform();
    	Thread.sleep(6000);	
    	
    	Robot robot = new Robot();
    	robot.keyPress(KeyEvent.VK_ENTER);
    	robot.keyRelease(KeyEvent.VK_ENTER);
    	Thread.sleep(5000);
    }

    @Then("^Click on POST button$")
    public void click_on_post_button() throws Throwable {
    	WebElement postButton = driver.findElement(By.xpath("//button[@type='submit']"));
    	wait.until(ExpectedConditions.visibilityOf(postButton));
    	postButton.click();
    	Thread.sleep(10000);	        
    }

    @Then("^Verify the error-sucess message$")
    public void verify_the_error_sucess_message() throws Throwable {
    	WebElement closeButton = driver.findElement(By.xpath("//button[@class='btn-dialog']"));
    	wait.until(ExpectedConditions.visibilityOf(closeButton));
    	
    	boolean test = driver.getPageSource().contains("URL redirect has been created sucessfully");
    	System.out.println("Message is: "+test);
    	Assert.assertEquals(test, true);
    }

    @Then("^Click on close button in the pop up$")
    public void click_on_close_button_in_the_pop_up() throws Throwable {
    	WebElement closeButton = driver.findElement(By.xpath("//button[@class='btn-dialog']"));
    	wait.until(ExpectedConditions.visibilityOf(closeButton));
    	closeButton.click();	
    	Thread.sleep(3000);		        
    }

    @Then("^Verify the created URL redirect$")
    public void verify_the_created_url_redirect() throws Throwable {
        ((JavascriptExecutor)driver).executeScript("window.open()");
        ArrayList<String> tabs = new ArrayList<String>(driver.getWindowHandles());
        driver.switchTo().window(tabs.get(1));
        driver.get(prop.getProperty("SourceURLValue"));   
        Thread.sleep(5000);
        
        String redirectedURL = driver.getCurrentUrl();
        System.out.println(redirectedURL);
        assertEquals(prop.getProperty("TargetURLValue"), redirectedURL);
        driver.close();
        driver.switchTo().window(tabs.get(0));
        Thread.sleep(2000);
        
    }
    
 /*---------------URL Redirect - Future dated-------------------------*/
    
    @Then("^Select the Future Date value$")
    public void select_the_future_date_value() throws Throwable {
    	
    	Thread.sleep(2000);
    	Actions action = new Actions(driver);
    	action.moveToElement(driver.findElement(By.xpath("//button[@title='Toggle datepicker']/cds-icon"))).click().perform();
    	Thread.sleep(3000);	
    	
    	Robot robot = new Robot();
    	robot.keyPress(KeyEvent.VK_RIGHT);
    	robot.keyRelease(KeyEvent.VK_RIGHT);
    	
    	robot.keyPress(KeyEvent.VK_ENTER);
    	robot.keyRelease(KeyEvent.VK_ENTER);
    	Thread.sleep(1000);
    }
    
    @Then("^Verify the created URL redirect for future dated$")
    public void verify_the_created_url_redirect_for_future_dated() throws Throwable {
        ((JavascriptExecutor)driver).executeScript("window.open()");
        ArrayList<String> tabs = new ArrayList<String>(driver.getWindowHandles());
        driver.switchTo().window(tabs.get(1));
        driver.get(prop.getProperty("SourceURLValue"));   
        Thread.sleep(5000);

        
        String redirectedURL = driver.getCurrentUrl();
        System.out.println(redirectedURL);
        assertEquals(prop.getProperty("SourceURLValue"), redirectedURL);
        
        assertNotEquals(prop.getProperty("TargetURLValue"), redirectedURL);
        
        driver.close();
        driver.switchTo().window(tabs.get(0));
        Thread.sleep(2000);
        
    }
    
/*<---------------------------------URL Redirect for Edit Target URL------------------------------------------>*/  
    
    @Then("^Click on Edit option of created URL redirect$")
    public void Click_on_Edit_option_of_created_URL_redirect() throws Throwable {
    	driver.navigate().refresh();
    	Thread.sleep(5000);
    	WebElement actionIcon = driver.findElement(By.xpath("//cds-icon[@shape='ellipsis-vertical']"));
    	Thread.sleep(3000);
    	actionIcon.click();
    	Thread.sleep(3000);
    	WebElement editIcon = driver.findElement(By.xpath("//div[contains(text(),'Edit')]"));
  	    editIcon.click(); 
  	    Thread.sleep(2000);
    }	
    
    @Then("^Clear the Target URL field and give new URL$")
    public void Clear_the_Target_URL_field_and_give_new_URL() throws Throwable {
    	WebElement targetURLField = driver.findElement(By.id("clr-form-control-9"));
    	Thread.sleep(3000);
    	targetURLField.clear();
    	Thread.sleep(3000);
    	targetURLField.sendKeys(prop.getProperty("EditTargetURLValue"));
  	    Thread.sleep(2000);
  	    WebElement saveButton = driver.findElement(By.xpath("//div[@class='edit-submit']/button"));
	    saveButton.click(); 
	    Thread.sleep(2000);
  	    
    }	
    
    @Then("^Verify the error-success message$")
    public void verify_the_error_success_message() throws Throwable {
    	WebElement closeButton = driver.findElement(By.xpath("//button[@class='btn-dialog']"));
    	wait.until(ExpectedConditions.visibilityOf(closeButton));
    	
    	boolean test = driver.getPageSource().contains("URL redirect has been updated sucessfully.");
    	System.out.println("Message is: "+test);
    	Assert.assertEquals(test, true);
    }
    
    @Then("^Verify the updated URL redirect$")
    public void verify_the_updated_url_redirect() throws Throwable {
        ((JavascriptExecutor)driver).executeScript("window.open()");
        ArrayList<String> tabs = new ArrayList<String>(driver.getWindowHandles());
        driver.switchTo().window(tabs.get(1));
        driver.get(prop.getProperty("SourceURLValue"));   
        Thread.sleep(5000);
        
        String redirectedURL = driver.getCurrentUrl();
        System.out.println(redirectedURL);
        assertEquals(prop.getProperty("EditTargetURLValue"), redirectedURL);
        driver.close();
        driver.switchTo().window(tabs.get(0));
        Thread.sleep(2000);
        
    }
    
    /*sangavva url redirect features addded..................................................................*/
    
    @Then("^Search for the Cross BU Source URL - Available$")
	public void search_for_the_Cross_BU_Source_URL_Available() throws Throwable {
		WebElement sourceurlFilterIcon = driver.findElement(By.xpath("(//cds-icon[@shape='filter-grid'])[1]"));
		wait.until(ExpectedConditions.visibilityOf(sourceurlFilterIcon));

		Actions action = new Actions(driver);
		action.moveToElement(sourceurlFilterIcon).click().perform();
		Thread.sleep(3000);

		WebElement sourceurlSearchvalue = driver.findElement(By.xpath("//input[@name='search']"));
		sourceurlSearchvalue.sendKeys(prop.getProperty("Source_CRossBU_URLValue"));
		Thread.sleep(5000);

		Robot robot = new Robot();
		robot.keyPress(KeyEvent.VK_ESCAPE);
		robot.keyRelease(KeyEvent.VK_ESCAPE);
		Thread.sleep(5000);
	}

	@And("^Disable if Cross BU Source URL is available$")
	public void disable_if_Cross_BU_Source_URL_available() throws Throwable {
		List<WebElement> tableResult = driver.findElements(By.xpath("//div[@class='datagrid-scrolling-cells']"));
		int resultSize = tableResult.size();
		System.out.println("Result of the Filter is: " + resultSize);
		if (resultSize > 0) {
			WebElement actionIcon = driver.findElement(By.xpath("//cds-icon[@shape='ellipsis-vertical']"));
			Actions action = new Actions(driver);
			action.sendKeys(Keys.PAGE_DOWN).build().perform();
			Thread.sleep(3000);

			actionIcon.click();
			Thread.sleep(3000);

			WebElement disableIcon = driver.findElement(By.xpath("//div[text()='Disable ']"));
			disableIcon.click();
			Thread.sleep(3000);

			boolean disableMsg = driver.getPageSource().contains("Do you want to disable this URL redirect?");
			System.out.println("Validation Message is: " + disableMsg);
			Assert.assertEquals(disableMsg, true);
			Thread.sleep(2000);

			WebElement confirmButton = driver.findElement(By.xpath("//button[@class='btn-dialog']"));
			wait.until(ExpectedConditions.visibilityOf(confirmButton));
			confirmButton.click();
			Thread.sleep(5000);

			boolean disableconfirmationMsg = driver.getPageSource()
					.contains("URL redirect has been updated sucessfully.");
			Thread.sleep(3000);
			WebElement closeButton = driver.findElement(By.xpath("//button[@class='btn-dialog']"));

			wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[@class='btn-dialog']")));

			System.out.println("Validation Message is: " + disableconfirmationMsg);
			Assert.assertEquals(disableMsg, true);
			Thread.sleep(2000);

			wait.until(ExpectedConditions.visibilityOf(closeButton));
			closeButton.click();
			driver.navigate().refresh();
			Thread.sleep(3000);

		} else {
			System.out.println("URL-Redirect is already in disabled state");
			driver.navigate().refresh();
			Thread.sleep(3000);
		}
		Thread.sleep(3000);
	}

	@Then("^Enter the value for Cross BU Source URL$")
	public void enter_the_value_for_Cross_BU_Source_URL() throws Throwable {
		WebElement sourceURLField = driver.findElement(By.xpath("//input[@formcontrolname='sourceUrl']"));
		sourceURLField.sendKeys(prop.getProperty("Source_CRossBU_URLValue"));
		Thread.sleep(3000);
	}

	@Then("^Enter the value for Cross BU Target URL$")
	public void enter_the_value_for_Cross_BU_Target_URL() throws Throwable {
		WebElement TargetURLField = driver.findElement(By.xpath("//input[@formcontrolname='targetUrl']"));
		TargetURLField.sendKeys(prop.getProperty("Target_CRossBU_URLValue"));
		Thread.sleep(3000);
	}

	@Then("^Click on Confirm button$")
	public void click_on_Confirm_button() throws Throwable {
		WebElement confirmButton = driver.findElement(By.xpath("//button[text()='Confirm']"));
		wait.until(ExpectedConditions.visibilityOf(confirmButton));
		confirmButton.click();
		Thread.sleep(3000);
	}

	@Then("^Verify the created Cross BU URL redirect$")
	public void verify_the_created_Cross_BU_url_redirect() throws Throwable {
		((JavascriptExecutor) driver).executeScript("window.open()");
		ArrayList<String> tabs = new ArrayList<String>(driver.getWindowHandles());
		driver.switchTo().window(tabs.get(1));
		driver.get(prop.getProperty("Source_CRossBU_URLValue"));
		Thread.sleep(5000);

		String redirectedURL = driver.getCurrentUrl();
		System.out.println(redirectedURL);
		assertEquals(prop.getProperty("Target_CRossBU_URLValue"), redirectedURL);
		driver.close();
		driver.switchTo().window(tabs.get(0));
		Thread.sleep(2000);

	}

	@Then("^Search for the Cross Content Source URL - Available$")
	public void search_for_the_Cross_Content_Source_URL_Available() throws Throwable {
		WebElement sourceurlFilterIcon = driver.findElement(By.xpath("(//cds-icon[@shape='filter-grid'])[1]"));
		wait.until(ExpectedConditions.visibilityOf(sourceurlFilterIcon));

		Actions action = new Actions(driver);
		action.moveToElement(sourceurlFilterIcon).click().perform();
		Thread.sleep(3000);

		WebElement sourceurlSearchvalue = driver.findElement(By.xpath("//input[@name='search']"));
		sourceurlSearchvalue.sendKeys(prop.getProperty("Source_Cross_Content_URLValue"));
		Thread.sleep(5000);

		Robot robot = new Robot();
		robot.keyPress(KeyEvent.VK_ESCAPE);
		robot.keyRelease(KeyEvent.VK_ESCAPE);
		Thread.sleep(5000);
	}

	@And("^Disable if Cross Content Source URL is available$")
	public void Disable_if_Cross_Content_Source_URL_is_available() throws Throwable {
		List<WebElement> tableResult = driver.findElements(By.xpath("//div[@class='datagrid-scrolling-cells']"));
		int resultSize = tableResult.size();
		System.out.println("Result of the Filter is: " + resultSize);
		if (resultSize > 0) {
			WebElement actionIcon = driver.findElement(By.xpath("//cds-icon[@shape='ellipsis-vertical']"));
			Actions action = new Actions(driver);
			action.sendKeys(Keys.PAGE_DOWN).build().perform();
			Thread.sleep(3000);

			actionIcon.click();
			Thread.sleep(3000);

			WebElement disableIcon = driver.findElement(By.xpath("//div[text()='Disable ']"));
			disableIcon.click();
			Thread.sleep(3000);

			boolean disableMsg = driver.getPageSource().contains("Do you want to disable this URL redirect?");
			System.out.println("Validation Message is: " + disableMsg);
			Assert.assertEquals(disableMsg, true);
			Thread.sleep(2000);

			WebElement confirmButton = driver.findElement(By.xpath("//button[@class='btn-dialog']"));
			wait.until(ExpectedConditions.visibilityOf(confirmButton));
			confirmButton.click();
			Thread.sleep(5000);

			boolean disableconfirmationMsg = driver.getPageSource()
					.contains("URL redirect has been updated sucessfully.");
			WebElement closeButton = driver.findElement(By.xpath("//button[@class='btn-dialog']"));

			wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[@class='btn-dialog']")));

			System.out.println("Validation Message is: " + disableconfirmationMsg);
			Assert.assertEquals(disableMsg, true);
			Thread.sleep(2000);

			wait.until(ExpectedConditions.visibilityOf(closeButton));
			closeButton.click();
			driver.navigate().refresh();
			Thread.sleep(3000);

		} else {
			System.out.println("URL-Redirect is already in disabled state");
			driver.navigate().refresh();
			Thread.sleep(3000);
		}
		Thread.sleep(3000);
	}

	@Then("^Enter the value for Cross Content Source URL$")
	public void enter_the_value_for_Cross_Content_Source_URL() throws Throwable {
		WebElement sourceURLField = driver.findElement(By.xpath("//input[@formcontrolname='sourceUrl']"));
		sourceURLField.sendKeys(prop.getProperty("Source_Cross_Content_URLValue"));
		Thread.sleep(3000);
	}

	@Then("^Enter the value for Cross Content Target URL$")
	public void enter_the_value_for_Cross_Content_Target_URL() throws Throwable {
		WebElement TargetURLField = driver.findElement(By.xpath("//input[@formcontrolname='targetUrl']"));
		TargetURLField.sendKeys(prop.getProperty("Target_Cross_Content_URLValue"));
		Thread.sleep(3000);
	}

	@Then("^Verify the created Cross Content URL redirect$")
	public void verify_the_created_Cross_Content_URL_redirect() throws Throwable {
		((JavascriptExecutor) driver).executeScript("window.open()");
		ArrayList<String> tabs = new ArrayList<String>(driver.getWindowHandles());
		driver.switchTo().window(tabs.get(1));
		driver.get(prop.getProperty("Source_Cross_Content_URLValue"));
		Thread.sleep(5000);

		String redirectedURL = driver.getCurrentUrl();
		System.out.println(redirectedURL);
		assertEquals(prop.getProperty("Target_Cross_Content_URLValue"), redirectedURL);
		driver.close();
		driver.switchTo().window(tabs.get(0));
		Thread.sleep(2000);

	}

	@Then("^Search for the old Source URL - Available$")
	public void search_for_the_old_source_URL_Available() throws Throwable {
		WebElement sourceurlFilterIcon = driver.findElement(By.xpath("(//cds-icon[@shape='filter-grid'])[1]"));
		wait.until(ExpectedConditions.visibilityOf(sourceurlFilterIcon));

		Actions action = new Actions(driver);
		action.moveToElement(sourceurlFilterIcon).click().perform();
		Thread.sleep(3000);

		WebElement sourceurlSearchvalue = driver.findElement(By.xpath("//input[@name='search']"));
		sourceurlSearchvalue.sendKeys(prop.getProperty("SourceURLValue_Enabled"));
		Thread.sleep(5000);

		Robot robot = new Robot();
		robot.keyPress(KeyEvent.VK_ESCAPE);
		robot.keyRelease(KeyEvent.VK_ESCAPE);
		Thread.sleep(5000);
	}
	
	@And("^Disable if old Source URL is available$")
	public void disable_if_old_Source_URL_is_available() throws Throwable {
		List<WebElement> tableResult = driver.findElements(By.xpath("//div[@class='datagrid-scrolling-cells']"));
		int resultSize = tableResult.size();
		System.out.println("Result of the Filter is: " + resultSize);
		if (resultSize > 0) {
			WebElement actionIcon = driver.findElement(By.xpath("//cds-icon[@shape='ellipsis-vertical']"));
			Actions action = new Actions(driver);
			action.sendKeys(Keys.PAGE_DOWN).build().perform();
			Thread.sleep(3000);

			actionIcon.click();
			Thread.sleep(5000);

			WebElement disableIcon = driver.findElement(By.xpath("//div[text()='Disable ']"));
			disableIcon.click();
			Thread.sleep(3000);

			boolean disableMsg = driver.getPageSource().contains("Do you want to disable this URL redirect?");
			System.out.println("Validation Message is: " + disableMsg);
			Assert.assertEquals(disableMsg, true);
			Thread.sleep(2000);

			WebElement confirmButton = driver.findElement(By.xpath("//button[@class='btn-dialog']"));
			wait.until(ExpectedConditions.visibilityOf(confirmButton));
			confirmButton.click();
			Thread.sleep(5000);

			boolean disableconfirmationMsg = driver.getPageSource()
					.contains("URL redirect has been updated sucessfully.");
			Thread.sleep(5000);
			WebElement closeButton = driver.findElement(By.xpath("//button[@class='btn-dialog']"));

			wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[@class='btn-dialog']")));

			System.out.println("Validation Message is: " + disableconfirmationMsg);
			Assert.assertEquals(disableMsg, true);
			Thread.sleep(2000);

			wait.until(ExpectedConditions.visibilityOf(closeButton));
			closeButton.click();
			driver.navigate().refresh();
			Thread.sleep(3000);

		} else {
			System.out.println("URL-Redirect is already in disabled state");
			driver.navigate().refresh();
			Thread.sleep(3000);
		}
		Thread.sleep(3000);
	}
	
	@Then("^Enter the value for old Source URL$")
	public void Enter_the_value_for_old_Source_URL() throws Throwable {
		WebElement sourceURLField = driver.findElement(By.xpath("//input[@formcontrolname='sourceUrl']"));
		sourceURLField.sendKeys(prop.getProperty("SourceURLValue_Enabled"));
		Thread.sleep(3000);
	}

	@Then("^Enter the value for old Target URL$")
	public void Enter_the_value_for_old_Target_URL() throws Throwable {
		WebElement TargetURLField = driver.findElement(By.xpath("//input[@formcontrolname='targetUrl']"));
		TargetURLField.sendKeys(prop.getProperty("TargetURLValue_Enabled"));
		Thread.sleep(3000);
	}

	@Then("^Edit the Target URL$")
	public void edit_the_Target_URL() throws Throwable {
		driver.navigate().refresh();
    	Thread.sleep(5000);
    	WebElement actionIcon = driver.findElement(By.xpath("//cds-icon[@shape='ellipsis-vertical']"));
    	Thread.sleep(3000);
    	actionIcon.click();
    	Thread.sleep(3000);
    	WebElement editIcon = driver.findElement(By.xpath("//div[contains(text(),'Edit')]"));
  	    editIcon.click(); 
  	    Thread.sleep(2000);
    

		/* editing the target url with new url */

		WebElement TargetURLField = driver.findElement(By.xpath("//input[@formcontrolname='targetEdit']"));
		TargetURLField.clear();
		TargetURLField.sendKeys(prop.getProperty("New_TargetURLValue_Enabled"));
		Thread.sleep(3000);
	}

	@Then("^Click on Save Changes Button$")
	public void click_on_Save_Changes_Button() throws Throwable {
		WebElement saveChangesButton = driver.findElement(By.xpath("//button[text()='Save Changes']"));
		wait.until(ExpectedConditions.visibilityOf(saveChangesButton));
		saveChangesButton.click();
		Thread.sleep(3000);
	}

	@Then("^Verify the update-sucess message$")
	public void verify_the_update_sucess_message() throws Throwable {
		
		Thread.sleep(3000);
		WebElement closeButton = driver.findElement(By.xpath("//button[@class='btn-dialog']"));
		Thread.sleep(3000);
		wait.until(ExpectedConditions.visibilityOf(closeButton));

		boolean test = driver.getPageSource().contains("URL redirect has been updated sucessfully");
		
		System.out.println("Message is: " + test);
		Assert.assertEquals(test, true);
	}

	@Then("^Verify the updated  URL redirect$")
	public void verify_the_updated_URL_redirect() throws Throwable {
		((JavascriptExecutor) driver).executeScript("window.open()");
		ArrayList<String> tabs = new ArrayList<String>(driver.getWindowHandles());
		driver.switchTo().window(tabs.get(1));
		driver.get(prop.getProperty("SourceURLValue_Enabled"));
		Thread.sleep(5000);

		String redirectedURL = driver.getCurrentUrl();
		System.out.println(redirectedURL);
		assertEquals(prop.getProperty("New_TargetURLValue_Enabled"), redirectedURL);
		//driver.close();
		Thread.sleep(2000);
		driver.switchTo().window(tabs.get(0));
		Thread.sleep(2000);
	}

	@Then("^Filter the Status option by Disabled$")
	public void filter_the_Status_option_by_Diabled() throws Throwable {
		WebElement statusFilterIcon = driver.findElement(By.xpath("(//cds-icon[@shape='filter-grid'])[5]"));
		wait.until(ExpectedConditions.visibilityOf(statusFilterIcon));
		Thread.sleep(3000);

		Actions action = new Actions(driver);
		action.moveToElement(statusFilterIcon).click().perform();
		Thread.sleep(3000);

		Robot robot = new Robot();
		robot.keyPress(KeyEvent.VK_TAB);
		robot.keyRelease(KeyEvent.VK_TAB);
		robot.keyPress(KeyEvent.VK_DOWN);
		robot.keyRelease(KeyEvent.VK_DOWN);
		robot.keyPress(KeyEvent.VK_DOWN);
		robot.keyRelease(KeyEvent.VK_DOWN);
		Thread.sleep(5000);

		robot.keyPress(KeyEvent.VK_ESCAPE);
		robot.keyRelease(KeyEvent.VK_ESCAPE);
		Thread.sleep(3000);

	}
	
	@Then("^Search for the Old Source URL - Disabled$")
	public void search_for_the_source_URL_Disable() throws Throwable {
		WebElement sourceurlFilterIcon = driver.findElement(By.xpath("(//cds-icon[@shape='filter-grid'])[1]"));
		wait.until(ExpectedConditions.visibilityOf(sourceurlFilterIcon));

		Actions action = new Actions(driver);
		action.moveToElement(sourceurlFilterIcon).click().perform();
		Thread.sleep(3000);

		WebElement sourceurlSearchvalue = driver.findElement(By.xpath("//input[@name='search']"));
		sourceurlSearchvalue.sendKeys(prop.getProperty("SourceURLValue_Disabled"));
		Thread.sleep(5000);

		Robot robot = new Robot();
		robot.keyPress(KeyEvent.VK_ESCAPE);
		robot.keyRelease(KeyEvent.VK_ESCAPE);
		Thread.sleep(5000);
	}
	

	@Then("^Enter the value for Old Source URL$")
	public void Enter_the_value_for_Old_Source_URL() throws Throwable {
		WebElement sourceURLField = driver.findElement(By.xpath("//input[@formcontrolname='sourceUrl']"));
		sourceURLField.sendKeys(prop.getProperty("SourceURLValue_Disabled"));
		Thread.sleep(3000);
	}

	@Then("^Enter the value for Old Target URL$")
	public void Enter_the_value_for_Old_Target_URL() throws Throwable {
		WebElement TargetURLField = driver.findElement(By.xpath("//input[@formcontrolname='targetUrl']"));
		Thread.sleep(3000);
		TargetURLField.sendKeys(prop.getProperty("TargetURLValue_Disabled"));
		Thread.sleep(3000);
	}
	
	@Then("^Edit the old Target URL$")
	public void edit_the_old_Target_URL() throws Throwable {
			driver.navigate().refresh();
	    	Thread.sleep(5000);
	    	WebElement actionIcon = driver.findElement(By.xpath("//cds-icon[@shape='ellipsis-vertical']"));
	    	Thread.sleep(3000);
	    	actionIcon.click();
	    	Thread.sleep(3000);
	    	WebElement editIcon = driver.findElement(By.xpath("//div[contains(text(),'Edit')]"));
	  	    editIcon.click(); 
	  	    Thread.sleep(2000);
	    

			/* editing the target url with new url */
	  	  Thread.sleep(3000);
			WebElement TargetURLField = driver.findElement(By.xpath("//input[@formcontrolname='targetEdit']"));
			TargetURLField.clear();
			TargetURLField.sendKeys(prop.getProperty("New_TargetURLValue_Diabled"));
			Thread.sleep(3000);
		}
	@Then("^Search for the Old Source Available$")
	public void search_for_the_new_Target_URL_Available() throws Throwable {
		
    	Thread.sleep(5000);
		WebElement sourceurlFilterIcon = driver.findElement(By.xpath("(//cds-icon[@shape='filter-grid'])[1]"));
		wait.until(ExpectedConditions.visibilityOf(sourceurlFilterIcon));
		
    	Thread.sleep(6000);
		Actions action = new Actions(driver);
		action.moveToElement(sourceurlFilterIcon).click().perform();
		Thread.sleep(5000);

		WebElement sourceurlSearchvalue = driver.findElement(By.xpath("//input[@name='search']"));
		sourceurlSearchvalue.sendKeys(prop.getProperty("SourceURLValue_Disabled"));
		Thread.sleep(5000);

		Robot robot = new Robot();
		robot.keyPress(KeyEvent.VK_ESCAPE);
		robot.keyRelease(KeyEvent.VK_ESCAPE);
		Thread.sleep(5000);
	}
	@And("^Disable The old SourceURL$")
	public void disable_The_new_Target_URL_is_available() throws Throwable {
		List<WebElement> tableResult = driver.findElements(By.xpath("//div[@class='datagrid-scrolling-cells']"));
		int resultSize = tableResult.size();
		System.out.println("Result of the Filter is: " + resultSize);
		if (resultSize > 0) {
			WebElement actionIcon = driver.findElement(By.xpath("//cds-icon[@shape='ellipsis-vertical']"));
			Thread.sleep(3000);
			Actions action = new Actions(driver);
			action.sendKeys(Keys.PAGE_DOWN).build().perform();
			Thread.sleep(6000);

			actionIcon.click();
			Thread.sleep(3000);

			WebElement disableIcon = driver.findElement(By.xpath("//div[text()='Disable ']"));
			disableIcon.click();
			Thread.sleep(3000);

			boolean disableMsg = driver.getPageSource().contains("Do you want to disable this URL redirect?");
			System.out.println("Validation Message is: " + disableMsg);
			Assert.assertEquals(disableMsg, true);
			Thread.sleep(2000);

			WebElement confirmButton = driver.findElement(By.xpath("//button[@class='btn-dialog']"));
			wait.until(ExpectedConditions.visibilityOf(confirmButton));
			confirmButton.click();
			Thread.sleep(5000);

			boolean disableconfirmationMsg = driver.getPageSource()
					.contains("URL redirect has been updated sucessfully.");
			Thread.sleep(5000);
			WebElement closeButton = driver.findElement(By.xpath("//button[@class='btn-dialog']"));

			wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[@class='btn-dialog']")));

			System.out.println("Validation Message is: " + disableconfirmationMsg);
			Assert.assertEquals(disableMsg, true);
			Thread.sleep(2000);

			wait.until(ExpectedConditions.visibilityOf(closeButton));
			closeButton.click();
			driver.navigate().refresh();
			Thread.sleep(3000);

		} else {
			System.out.println("URL-Redirect is already in disabled state");
			driver.navigate().refresh();
			Thread.sleep(3000);
			
		}
			
		
		}
	
	@Then("^Verify the updated Disabled URL redirect$")
	public void verify_the_updated_disabled_URL_redirect() throws Throwable {
		((JavascriptExecutor) driver).executeScript("window.open()");
		ArrayList<String> tabs = new ArrayList<String>(driver.getWindowHandles());
		driver.switchTo().window(tabs.get(1));
		driver.get(prop.getProperty("SourceURLValue_Disabled"));
		Thread.sleep(8000);

		String redirectedURL = driver.getCurrentUrl();
		System.out.println(redirectedURL);
		System.out.println(prop.getProperty("New_TargetURLValue_Diabled"));
		assertEquals(prop.getProperty("New_TargetURLValue_Diabled"), redirectedURL);
		
		driver.close();
		Thread.sleep(6000);
		driver.switchTo().window(tabs.get(0));
		Thread.sleep(2000);
	}


    	
}	
/*<--------------------------------------URL Redirect Features Ended------------------------------------------->*/
	
