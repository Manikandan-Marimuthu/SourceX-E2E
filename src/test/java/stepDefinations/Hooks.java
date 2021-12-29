package stepDefinations;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import Cucumber.Automation.Base;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends Base{

	
	@Before
	public void openBrowser()
	{
		System.out.println("Execution Started");
	}
	
	@After
	public void closeBrowser(cucumber.api.Scenario scenario)
	{
		if(scenario.isFailed())
		{
			final byte[] screenshot = ((TakesScreenshot) driver)
			           .getScreenshotAs(OutputType.BYTES);
			scenario.embed(screenshot, "image/png");
		}
		driver.close();
	}
	

	}

