package Pages;
import Utility.Driver;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
public class LoginPage {
    WebDriver driver;
    public LoginPage(){

        driver = Driver.getDriver();
        PageFactory.initElements(driver, this);
    }
    @FindBy(id = "txtUsername")
    public WebElement userName;

    @FindBy (id = "txtPassword")
    public WebElement passWord;

    @FindBy (id= "btnLogin")
    public WebElement loginButton;

    @FindBy (id = "welcome")
    public WebElement confirmLogIn;

    @FindBy (id = "spanMessage")
    public WebElement errorMessage;

    @FindBy (id = "welcome-menu")
    public WebElement welcomeMenu;

    @FindBy (xpath = "//*[@id='welcome-menu']/ul/li[2]/a")
    public WebElement logOutButton;

    @FindBy (id = "logInPanelHeading")
    public WebElement loginPanel;

    public void validateErrorMessage(String erMessage){
        String actualMessage = errorMessage.getText();
        Assert.assertEquals(erMessage+" =>Error Message Validation Failed<= ",erMessage, actualMessage);
    }
    public void login(String username, String password){
        this.userName.sendKeys(username);
        this.passWord.sendKeys(password);
        this.loginButton.click();
    }
}// Class closing brackets