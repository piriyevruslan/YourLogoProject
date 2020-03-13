package StepDefinitions;
import Pages.HomePage;
import Utility.Common;
import Utility.Driver;
import Utility.Helper;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.junit.After;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import java.util.ArrayList;
import java.util.List;

        public class HomeSteps{
         Helper help = new Helper();
        String custName = "James Bond";
        HomePage homePage = new HomePage();
        Common common = new Common();
        static final Logger oLog = LogManager.getLogger(HomeSteps.class);
        //Scenario Outline: As a user I should be able to successfully search "<empName>"
        @Given("I am logged in as an Admin")
        public void i_am_logged_in_as_an_Admin() {
            common.iSuccessfullyLog_In();
        }
        @Then("I click on Directory Tab")
        public void i_click_on_Directory_Tab() throws InterruptedException {
            Thread.sleep(1000);
            homePage.tabDirectory.click();
        }
        @Then("I verify I am on Directory Tab")
        public void i_verify_I_am_on_Directory_Tab() throws InterruptedException {
            Thread.sleep(1000);
            Assert.assertEquals("Validating User is on Search Directory ==>", "Search Directory", homePage.searchDirectory.getText());
            System.out.println("\n===>GET SEARCH DIRECTORY TEXT: ===>" + homePage.searchDirectory.getText());
        }
        @Then("I enter search criteria existing {string}")
        public void i_enter_search_criteria_existing(String empName) throws InterruptedException {
            Thread.sleep(1500);
            homePage.searchDirectoryBox.sendKeys(empName);
            homePage.searchButton.click();
           // homePage.resetButton.click();
            Thread.sleep(1000);
        }
        @And("I verify existing employee search {string}")
        public void i_verify_existing_employee_search(String empName)  {
          Assert.assertEquals(homePage.searhDirectoryName.getText(),empName);

        }
        //Scenario Outline: User should be able successfully reset search criteria with "<empName>"
        @Then("I reset search criteria")
        public void iResetSearchCriteria() {
            homePage.resetButton.click();
            Assert.assertTrue(homePage.searchDirectoryBox.getText().isEmpty());
            common.iSuccessfullyLog_Out();


        }
        //Scenario: User should be able to add candidate
        @Given("I click on Recruitment tab")
        public void i_click_on_Recruitment_tab() throws InterruptedException {
            homePage.recruitmentTab.click();
            Thread.sleep(2000);
        }
        @Then("I click on Candidates subtab")
        public void i_click_on_Candidates_subtab() {
            homePage.viewCandidates.click();
        }
        @Then("I click on add button")
        public void i_click_on_add_button() throws InterruptedException {
            Thread.sleep(3000);
            homePage.btnAdd.click();
        }
        @Then("I add candidate by filling required fields")
        public void i_add_candidate_by_filling_required_fields() {
            homePage.addCandidate_firstName.sendKeys("James");
            homePage.addCandidate_lastName.sendKeys("Bond");
            homePage.addCandidate_email.sendKeys("jamesbond@gmail.com");
        }
        @Then("I click on Save button")
        public void i_click_on_Save_button() throws InterruptedException {
            homePage.btnSave.click();
            Thread.sleep(2000);
        }
        @Then("I should see Error Message")
        public void i_should_see_Error_Message() {
            String actualErrorMessage = homePage.errorMessage.getText();
            String errorMessage = "Error";
            System.out.println("ERROR MESSAGE: \n" + actualErrorMessage);
            Assert.assertTrue(actualErrorMessage.contains("An internal error occurred"));
        }
        //Scenario: User should be able to add vacancy
        @Then("I click in Vacancy subtab")
        public void i_click_in_Vacancy_subtab() {
            homePage.vacancyButton.click();
        }
        @Then("I add vacancy by filling required fields")
        public void i_add_vacancy_by_filling_required_fields() {
            Select select = new Select(homePage.addJobVacancy_jobTitle);
            select.selectByVisibleText("CEO");
            homePage.addJobVacancy_name.sendKeys("Manager");
            homePage.addJobVacancy_hiringManager.sendKeys("Linda Anderson");
        }
        //Scenario: User should be able to successfully add customer
        @Then("I click on time tab")
        public void i_click_on_time_tab() throws InterruptedException {
            Thread.sleep(4000);
            homePage.timeBtn.click();
        }
        @Then("I click on project info subtab")
        public void i_click_on_project_info_subtab() throws InterruptedException {
            homePage.projectInfoBtn.click();
            Thread.sleep(2000);
        }
        @Then("I click on customer option button")
        public void i_click_on_customer_option_button() throws InterruptedException {
            homePage.viewCustomersBtn.click();
            Thread.sleep(2000);
        }
        @Then("I click add button")
        public void i_click_add_button() throws InterruptedException {
            homePage.addBtn.click();
            Thread.sleep(2000);
        }
        @Then("I add customer")
        public void i_add_customer() throws InterruptedException {
            homePage.addCustomer.sendKeys(custName);
            homePage.btnSave.click();
            Thread.sleep(2000);
        }
        @Then("I validate added customer in the table")
        public void i_validate_added_customer_in_the_table() throws InterruptedException {
            Assert.assertEquals(homePage.firstElem.getText(), custName);
            Thread.sleep(2000);
        }
        //Scenario: User should be able successfully add Project
        @Then("I click on Project option button")
        public void i_click_on_Project_option_button() {
            homePage.viewProjectsBtn.click();
        }
        @Then("I add Project")
        public void i_add_Project() {
            homePage.addProject_customerName.sendKeys("James Bond");
            homePage.addProject_projectName.sendKeys("Building");
            homePage.btnSave.click();
        }
        @Then("I validate added Project in the table")
        public void i_validate_added_Project_in_the_table() throws InterruptedException {
            homePage.timeBtn.click();
            homePage.projectInfoBtn.click();
            homePage.viewCustomersBtn.click();
            Assert.assertEquals(homePage.firstElem.getText(), custName);
            homePage.btnCheckAll.click();
            homePage.btnDelete.click();
            homePage.btnDiologOK.click();
            Driver.getDriver().navigate().refresh();
            homePage.confirmLogIn.click();
            homePage.logOutButton.click();
            // Scenario: User should be able to successfully view attendance summary
        }
        @Then("I click on reports subtab")
        public void i_click_on_reports_subtab() {
            homePage.repBtn.click();
        }
        @Then("I click on attendance summary options")
        public void i_click_on_attendance_summary_options() {
            homePage.attSummary.click();
        }
        @And("I fill out the form and view attendance summary")
        public void iFillOutTheFormAndViewAttendanceSummary() throws InterruptedException {
            Thread.sleep(3000);
            homePage.empNameReport.sendKeys("Linda Anderson");
            homePage.jobTitleOption.click();

            Select dropdown = new Select(homePage.jobTitleOption);
            dropdown.selectByIndex(5);
            Thread.sleep(2000);
            Select dropdown1 = new Select(homePage.subUnitOption);
            dropdown1.selectByIndex(2);
            Select dropdown2 = new Select(homePage.employeeStatusOption);
            dropdown2.selectByIndex(3);
            homePage.fromDateBtn.click();
            homePage.fromDateBtn.sendKeys("2020-02-01");
            Thread.sleep(2000);
            help.clickWithJS(homePage.toDateBtn);
            homePage.toDateBtn.sendKeys("2020-02-27");
            homePage.viewButton.click();

        }
        @And("I fill out the form and view attendance summary of no records")
        public void iFillOutTheFormAndViewAttendanceSummaryOfNoRecords() throws InterruptedException {

            Thread.sleep(3000);
            homePage.empNameReport.sendKeys("Linda Anderson");
            homePage.jobTitleOption.click();

            Select dropdown = new Select(homePage.jobTitleOption);
            dropdown.selectByIndex(6);
            Thread.sleep(2000);
            Select dropdown1 = new Select(homePage.subUnitOption);
            dropdown1.selectByIndex(2);
            Select dropdown2 = new Select(homePage.employeeStatusOption);
            dropdown2.selectByIndex(3);
            homePage.fromDateBtn.click();
            homePage.fromDateBtn.sendKeys("2020-02-01");
            Thread.sleep(2000);
            help.clickWithJS(homePage.toDateBtn);
            homePage.toDateBtn.sendKeys("2020-02-27");
            homePage.viewButton.click();
            Thread.sleep(3000);
            Assert.assertTrue(homePage.NoRecordsFound.isDisplayed());
        }
    }//end of the class







