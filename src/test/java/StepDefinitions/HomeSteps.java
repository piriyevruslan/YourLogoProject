package StepDefinitions;

import Pages.HomePage;
import Pages.LoginPage;
import io.cucumber.java.en.*;


public class HomeSteps {

    LoginPage loginPage = new LoginPage();
    HomePage homePage = new HomePage();

    @Given ("I am logged in as an Admin")
    public void iAmLoggedInAsAnAdmin() {

    }

    @And ("I click on Directory Tab")
    public void iClickOnDirectoryTab() {
    }

    @Then ("I enter Search Criteria")
    public void iEnterSearchCriteria() {
    }

    @And ("I verify employee")
    public void iVerifyEmployee() {
    }
}
