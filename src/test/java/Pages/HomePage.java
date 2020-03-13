
     package Pages;
     import Utility.Driver;
     import org.openqa.selenium.WebDriver;
     import org.openqa.selenium.WebElement;
     import org.openqa.selenium.support.FindBy;
     import org.openqa.selenium.support.PageFactory;
        public class HomePage {
            WebDriver driver;

            public HomePage() {
                driver = Driver.getDriver();
                PageFactory.initElements(driver, this);
            }

            /* ====================> ELEMENTS <============================================*/
            @FindBy (css = "a#menu_directory_viewDirectory > b")
            public WebElement tabDirectory;

            @FindBy (css = "input#searchDirectory_emp_name_empName")
            public WebElement searchDirectoryBox;

            @FindBy (className = "head")
            public WebElement searchDirectory;

            @FindBy (id = "searchBtn")
            public WebElement searchButton;

            @FindBy (id = "resetBtn")
            public WebElement resetButton;

            @FindBy (id = "menu_recruitment_viewRecruitmentModule")
            public WebElement recruitmentTab;

            @FindBy (id = "menu_recruitment_viewCandidates")
            public WebElement viewCandidates;

            @FindBy (id = "btnAdd")
            public WebElement btnAdd;

            @FindBy (id = "addCandidate_firstName")
            public WebElement addCandidate_firstName;

            @FindBy (id = "addCandidate_lastName")
            public WebElement addCandidate_lastName;

            @FindBy (id = "addCandidate_email")
            public WebElement addCandidate_email;

            @FindBy (id = "btnSave")
            public WebElement btnSave;

            @FindBy (css = ".error.message")
            public WebElement errorMessage;

            @FindBy (id = "menu_recruitment_viewJobVacancy")
            public WebElement vacancyButton;

            @FindBy (xpath = "//*[@id='addJobVacancy_jobTitle']")
            public WebElement addJobVacancy_jobTitle;

            @FindBy (id = "addJobVacancy_name")
            public WebElement addJobVacancy_name;

            @FindBy (id = "addJobVacancy_hiringManager")
            public WebElement addJobVacancy_hiringManager;

            @FindBy (id = "menu_time_viewTimeModule")
            public WebElement timeBtn;

            @FindBy (id = "menu_admin_ProjectInfo")
            public WebElement projectInfoBtn;

            @FindBy (id = "menu_admin_viewCustomers")
            public WebElement viewCustomersBtn;

            @FindBy (id = "btnAdd")
            public WebElement addBtn;

            @FindBy (id = "addCustomer_customerName")
            public WebElement addCustomer;

            @FindBy (xpath = "//*[@id='resultTable']/tbody/tr/td[2]/a")
            public WebElement firstElem;

            @FindBy (id = "ohrmList_chkSelectAll")
            public WebElement btnCheckAll;

            @FindBy (id = "btnDelete")
            public WebElement btnDelete;

            @FindBy (id = "dialogDeleteBtn")
            public WebElement btnDiologOK;

            @FindBy (id = "menu_admin_viewProjects")
            public WebElement viewProjectsBtn;

            @FindBy (id = "addProject_customerName")
            public WebElement addProject_customerName;

            @FindBy (id = "addProject_projectName")
            public WebElement addProject_projectName;

            @FindBy (id = "welcome")
            public WebElement confirmLogIn;

            @FindBy (xpath = "//*[@id='welcome-menu']/ul/li[2]/a")
            public WebElement logOutButton;

            // Scenario: User should be able to successfully view attendance summary
            @FindBy (id = "menu_time_Reports")
            public WebElement repBtn;

            @FindBy (id = "menu_time_displayAttendanceSummaryReportCriteria")
            public WebElement attSummary;

            @FindBy (id = "employee_name")
            public WebElement empNameReport;

            @FindBy (id = "attendanceTotalSummary_jobTitle")
            public WebElement jobTitleOption;

            @FindBy (id = "attendanceTotalSummary_subUnit")
            public WebElement subUnitOption;

            @FindBy (id = "attendanceTotalSummary_employeeStatus")
            public WebElement employeeStatusOption;

            @FindBy (id = "from_date")
            public WebElement fromDateBtn;

            @FindBy (id = "to_date")
            public WebElement toDateBtn;

            @FindBy (id = "viewbutton")
            public WebElement viewButton;

            @FindBy (xpath = "/html//table[@id='resultTable']//td[.='No Records Found'] ")
            public WebElement NoRecordsFound;

            @FindBy (xpath = "//*[@id='resultTable']/tbody/tr[2]/td[2]/ul/li[1]/b")
            public WebElement searhDirectoryName;
//
//            @FindBy (id = "content")
//            public WebElement searchResultTable;
//
//            @FindBy (xpath = "//div[@id='search-results']//h1[.='Attendance Total Summary Report']  ")
//            public WebElement summaryReportText;
//
//            @FindBy (id = "menu_pim_viewPimModule")
//            public WebElement empListBtn;
//
//            @FindBy (id = "menu_pim_viewPimModule")
//            public WebElement pimBtn;
//
//            @FindBy (xpath = "//*[@id='addProject_customerName']")
//            public WebElement secondElem;
//
//            @FindBy (id = "addCustomer_customerName")
//            public WebElement nameVerify;
//
//            @FindBy (xpath = "//*[@id=resultTable]/tbody/tr/td[2]/a")
//            public WebElement customerName;



        }/*=================>class closing bracket<==================================*/




