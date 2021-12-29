package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class MySourcePage {
	public WebDriver driver;
	
	public MySourcePage(WebDriver driver)
	{
		this.driver=driver;
	}

	By mysourceheader=By.xpath("//li[@id=\"MySource\"]/a");
	

	
	
	

	public WebElement getmysourceheader()
	{
		return driver.findElement(mysourceheader);
	}
	
}
