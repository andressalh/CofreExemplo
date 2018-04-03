package ValidacaoHelper;

import cofre.ValidacaoHelper;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import static org.junit.Assert.*;


/**
 *
 * @author andre
 */
public class EhNumeroSteps {

    String num;
    @Given("^quando a senha digitada for \"([^\"]*)\"$")
    public void quando_a_senha_digitada_for(String arg1) throws Exception {
        num = arg1;
    }

    @Then("^o resultado vai ser True$")
    public void o_resultado_vai_ser_True() throws Exception {
        assertTrue(ValidacaoHelper.ehNumero(num));
    }

    @Then("^o resultado vai ser False$")
    public void o_resultado_vai_ser_False() throws Exception {
        assertFalse(ValidacaoHelper.ehNumero(num));
    }

}
