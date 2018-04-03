package ValidacaoHelper;

import cofre.ValidacaoHelper;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import static org.junit.Assert.*;

/**
 *
 * @author andre
 */
public class SenhaValidaSteps {

    String num;

    @Given("^senha pressionado for \"([^\"]*)\"$")
    public void senha_pressionado_for(String arg1) throws Exception {
        num = arg1;
    }

    @Then("^o resultado dessa acao vai ser True$")
    public void o_resultado_dessa_acao_vai_ser_True() throws Exception {
        assertTrue(ValidacaoHelper.ehNumero(num));
    }

    @Then("^o resultado dessa acao vai ser False$")
    public void o_resultado_dessa_acao_vai_ser_False() throws Exception {
        assertFalse(ValidacaoHelper.ehNumero(num));
    }
}
