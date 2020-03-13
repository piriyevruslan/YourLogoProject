package Runner;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith (Cucumber.class)
@CucumberOptions (
        plugin = {"pretty", "html:Reports/cucumber",
                "json:Reports/cucumber.json"},
        features = "src/test/resources/features",
        glue = "StepDefinitions",
        tags = "@Regression",
        dryRun = false,
        monochrome = true
)
public class TestRunner {


}
