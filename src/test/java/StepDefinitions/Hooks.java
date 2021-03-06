package StepDefinitions;

import Utility.Driver;
import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.util.concurrent.TimeUnit;

public class Hooks {

    @Before
    public void setUp() {
        Driver.getDriver().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        Driver.getDriver().manage().window().maximize();
    }
    @Before
    public void before(Scenario scenario) {
        System.out.println("******************************************************");
        System.out.println("Starting - " + scenario.getName());
        System.out.println("******************************************************");
    }
    @After
    public void after(Scenario scenario) {
        System.out.println("*****************************************************");
        System.out.println(scenario.getName() + " Status - " + scenario.getStatus());
        System.out.println("******************************************************");
    }
    @After
    public void tearDown(Scenario scenario) {
//            if (scenario.isFailed()) {
//                final byte[] screenshot = ((TakesScreenshot) Driver.getDriver()).getScreenshotAs(OutputType.BYTES);
//                scenario.embed(screenshot, "image/png");
//
        Driver.closeDriver();
//            }
    }
}


