package TravadoCofre;


import cofre.CofrePM;
import cofre.Memoria;
import cofre.SensorPorta;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static org.junit.Assert.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

/**
 *
 * @author andre
 */
public class SenhaValidaSteps {

    SensorPorta sensorMock = mock(SensorPorta.class);
    Memoria memoriaMock = mock(Memoria.class);
    CofrePM cofrePM = new CofrePM(sensorMock, memoriaMock);

    @Given("^quando a senha \"([^\"]*)\"$")
    public void quando_a_senha(String arg1) throws Exception {
        when(sensorMock.fechada()).thenReturn(Boolean.TRUE);
        when(memoriaMock.getSenha()).thenReturn(arg1);
        when(sensorMock.travada()).thenReturn(Boolean.TRUE);
    }

    @Given("^entrei com  (\\d+)$")
    public void entrei_com(int arg1) throws Exception {
        cofrePM.pressButton(arg1);
        
    }

    @When("^clicar no ir$")
    public void clicar_no_ir() throws Exception {
        cofrePM.ok();
    }

    @Then("^mensagem  \"([^\"]*)\"$")
    public void mensagem(String arg1) throws Exception {
        String a = cofrePM.getDisplay();
        assertEquals(arg1, a);
        
    }

}
