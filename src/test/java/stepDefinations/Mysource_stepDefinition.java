package stepDefinations;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.junit.Cucumber;
import pageObjects.MySourcePage;

import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import Cucumber.Automation.Base;

@RunWith(Cucumber.class)
public class Mysource_stepDefinition extends Base {
	public WebDriver driver;
	
	MySourcePage ms;

    @Given("^Navigated to the Homepage$")
    public void navigated_to_the_homepage() throws Throwable {
		
		driver= Base.getDriver();
		
		WebElement username = driver.findElement(By.id("userInput"));
		WebElement nextButton = driver.findElement(By.id("userNameFormSubmit"));
		username.sendKeys("mmarimuthu@vmware.com");
		nextButton.click();
		Thread.sleep(5000);
		
		
		WebElement password = driver.findElement(By.id("password"));

		password.sendKeys("Leavemealone@2401");
		
		WebElement siginButton = driver.findElement(By.id("signIn"));
		siginButton.click();
		
		Thread.sleep(10000);
    }

    @When("^User clicked on Mysource header$")
    public void user_clicked_on_mysource_header() throws Throwable {
    	ms=new MySourcePage(driver);
    	ms.getmysourceheader().click();	
    	Thread.sleep(2000);
    }    

    @Then("^My Source page is displayed$")
    public void my_source_page_is_displayed() throws Throwable {
    	System.out.println("Execution over");

    }
}