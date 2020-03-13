package Utility;
import Pages.HomePage;
import Pages.LoginPage;
import StepDefinitions.*;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import java.util.List;

public class Common {

    LoginSteps loginSteps = new LoginSteps();
    LoginPage loginPage = new LoginPage();
    // Method for logged in scenarios. User name and password can be adjusted in a configuration.property file.
    public void iSuccessfullyLog_In() {
        Driver.getDriver().get(ConfigurationReader.getProperty("url"));
        loginSteps.iEnterUserName(ConfigurationReader.getProperty("userName"));
        loginSteps.iEnterUserPassword(ConfigurationReader.getProperty("passWord"));
        loginSteps.iClickOnLoginButton();
    }
    public void iSuccessfullyLog_Out(){
        loginPage.confirmLogIn.click();
        loginPage.logOutButton.click();
    }
    public void dropDown(WebElement location,String[] Array){
        Select month = new Select(location);
        List<WebElement> dropdown = month.getOptions();
        for (int i = 0; i < dropdown.size(); i++) {
            String drop_down_values = dropdown.get(i).getText();
            location.click();
            dropdown.get(i).click();
            Assert.assertEquals(dropdown.get(i).getText(), Array[i]);
        }
    }
}/*=================>class closing bracket<==================================*/

