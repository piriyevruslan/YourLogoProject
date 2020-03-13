package StepDefinitions;
import Pages.LoginPage;
import Utility.ConfigurationReader;
import Utility.Driver;
import Utility.Helper;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import java.util.ArrayList;
import java.util.List;
public class LoginSteps {

    LoginPage loginPage = new LoginPage();
    static String keyword;
    List<String> errorMessages = new ArrayList<>();
    // Scenario: As a user I should be able to successfully login
    @Given ("I am in login page")
    public void iAmInLoginPage() {
        String urlOHRM = ConfigurationReader.getProperty("url");
        Driver.getDriver().get(urlOHRM);
        Driver.getDriver().manage().window().maximize();
    }
    @And ("I enter user name {string}")
    public void iEnterUserName(String uName) {
        loginPage.userName.sendKeys(uName);
    }
    @Then ("I enter user password {string}")
    public void iEnterUserPassword(String passWord) {
        loginPage.passWord.sendKeys(passWord);
    }
    @And ("I click on Login Button")
    public void iClickOnLoginButton() {
        loginPage.loginButton.click();
    }
    @Then ("I confirm that I logged in as an Admin")
    public void iConfirmThatILoggedInAsAnAdmin() {
        Assert.assertEquals(loginPage.confirmLogIn.getText(), "Welcome Admin");
    }

    //Scenario Outline: As a user I should not be able to login with incorrect credentials
    @Then ("I enter Invalid {string} and {string}")
    public void iEnterInvalidAnd(String wrongUname, String wrongPassWord) {
        loginPage.userName.sendKeys(wrongUname);
        loginPage.passWord.sendKeys(wrongPassWord);
    }
    @Then ("I should see {string} failed message")
    public void iShouldSeeFailedMessage(String erMessage)  {
        loginPage.validateErrorMessage(erMessage);
    }
    //Scenario: As a user I should be able to successfully logout
    @Then ("I click Welcome Admin button")
    public void iClickWelcomeAdminButton() {
        Helper.waitForClickablility(loginPage.confirmLogIn, 3);
        loginPage.confirmLogIn.click();
    }
    @And ("I click logout Button")
    public void iClickLogoutButton() {
        loginPage.logOutButton.click();
    }
    @Then ("I confirm I am logged out")
    public void iConfirmIAmLoggedOut() {
        String loginPanel = loginPage.loginPanel.getText();
        Assert.assertEquals(loginPanel, "LOGIN Panel");
    }
}//=======================>Class closing bracket <========================
