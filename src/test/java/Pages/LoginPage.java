package Pages;

import Utility.*;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

    WebDriver driver;
    public LoginPage() {
        driver = Driver.getDriver();
        PageFactory.initElements(driver, this);
    }

    @FindBy( id= "txtUsername")
    public WebElement userName;

    @FindBy(id = "txtPassword")
    public WebElement passWord;

    @FindBy(id = "btnLogin")
    public WebElement loginButton;

    @FindBy(id = "welcome")
    public WebElement confirmation;

    @FindBy (id = "spanMessage")
    public WebElement errorMessage;

    @FindBy (id = "welcome-menu")
    public WebElement welcomeMenu;

    @FindBy (xpath = "//*[@id='welcome-menu']/ul/li[2]/a")
    public WebElement logOutButton;

    @FindBy (id = "logInPanelHeading")
    public WebElement loginPanel;



}//class closing bracket
