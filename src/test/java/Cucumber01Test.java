



import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.Test;
import static org.junit.Assert.*;
import org.junit.runner.RunWith;



/**
 *
 * @author andre
 */
@RunWith(Cucumber.class)
@CucumberOptions(plugin = {"pretty", "html:target/cucumber"})
public class Cucumber01Test {
    
    @Test
    public void test01() {
    
    }
    
}
