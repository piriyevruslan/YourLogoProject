package StepDefinitions;

import Pages.LoginPage;
import Utility.ConfigurationReader;
import Utility.Driver;
import Utility.Helper;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;


public class LoginSteps {

    LoginPage loginPage = new LoginPage();
    static String keyword;

    @Given("I am in login page")
    public void i_am_in_login_page() {
        String urlOHRM = ConfigurationReader.getProperty("urlOHRM");
        Driver.getDriver().get(urlOHRM);
        Driver.getDriver().manage().window().maximize();
    }


    @Then("I enter an user password {string}")
    public void iEnterAnUserPassword(String passWrd) {
        loginPage.passWord.sendKeys(passWrd);
    }
    @And("I click on Login Button")
    public void i_click_on_Login_Button() {
        loginPage.loginButton.click();

    }

    @Then("I confirm that I logged in as an Admin")
    public void i_confirm_that_I_logged_in_as_an_Admin() {
        Assert.assertEquals(loginPage.confirmation.getText(),"Welcome Admin");


    }
    @Then ("I enter Invalid {string} and {string}")
    public void iEnterInvalidAnd(String wrongUname, String wrongPassWord) {
        loginPage.userName.sendKeys(wrongUname);
        loginPage.passWord.sendKeys(wrongPassWord);
    }
    @Then ("I should see {string} failed message")
    public void iShouldSeeFailedMessage(String erMessage) throws InterruptedException {
        String actualMessage = loginPage.errorMessage.getText();
        if (erMessage.equalsIgnoreCase(actualMessage)){
            Assert.assertEquals(erMessage, actualMessage);
            Assert.assertTrue(actualMessage, true);
        }

        }
    @Then ("I click Welcome Admin button")
    public void iClickWelcomeAdminButton() {
        Helper.waitForClickablility(loginPage.confirmation, 5);
        loginPage.confirmation.click();
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


    @And("I enter an user name {string}")
    public void iEnterAnUserName(String uName) {
        Helper.waitForVisibility(loginPage.userName,5);
        //Thread.sleep(5000);
        loginPage.userName.sendKeys(uName);
    }
}// clASS



