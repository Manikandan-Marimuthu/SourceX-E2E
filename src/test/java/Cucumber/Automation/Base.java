package Cucumber.Automation;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Base {
	public static WebDriver driver;
	public static Properties prop;
	public static WebDriverWait wait;

	public static WebDriver getDriver() throws IOException, InterruptedException, AWTException
	{
		
		
		prop=new Properties();
		String userpath = System.getProperty("user.dir");
		System.out.println(userpath);
		String propertypath = userpath+"src\\test\\java\\Cucumber\\Automation\\global.properties";
		System.out.println(propertypath);
		FileInputStream fis=new FileInputStream(propertypath);
		prop.load(fis);

	
		
		String driverpath=userpath+"\\src\\test\\java\\Cucumber\\Automation\\chromedriver.exe";
		System.setProperty("webdriver.chrome.driver", driverpath);
		
		//Headless-mode
		/*
		ChromeOptions option=new ChromeOptions();
		option.setHeadless(true);
   	 	driver=new ChromeDriver(option);
   	 	option.addArguments("start-maximized");
   	 	option.addArguments("--window-size=1325,744");
   	 	*/
		
		driver=new ChromeDriver();
   	 	driver.manage().window().maximize();
   	 	
   	 	wait = new WebDriverWait(driver, 60);
   	 
   	 	driver.get(prop.getProperty("url"));
        Thread.sleep(10000);
   	 	return driver;
		
	}
	
}
