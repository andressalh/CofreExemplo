package TravadoCofre;


import cofre.CofrePM;
import cofre.Memoria;
import cofre.SensorPorta;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static org.junit.Assert.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

/**
 *
 * @author andre
 */
public class SenhaPequenaSteps {

    SensorPorta sensorMock = mock(SensorPorta.class);
    Memoria memoriaMock = mock(Memoria.class);
    CofrePM cofrePM = new CofrePM(sensorMock, memoriaMock);

    @Given("^quando a senha  for \"([^\"]*)\"$")
    public void quando_a_senha_for(String arg1) throws Exception {
        when(sensorMock.fechada()).thenReturn(Boolean.TRUE);
        when(sensorMock.travada()).thenReturn(Boolean.TRUE);
        when(memoriaMock.getSenha()).thenReturn(arg1);
    }

    @Given("^entrei com o numero (\\d+)$")
    public void entrei_com_o_numero(int arg1) throws Exception {
        cofrePM.pressButton(arg1);

    }

    @When("^pressionei ir$")
    public void pressionei_ir() throws Exception {
        cofrePM.ok();
    }

    @Then("^mensagem \"([^\"]*)\" aparecerá$")
    public void mensagem_aparecerá(String arg1) throws Exception {
        String a = cofrePM.getDisplay();
        assertEquals(arg1, a);
    }

}
