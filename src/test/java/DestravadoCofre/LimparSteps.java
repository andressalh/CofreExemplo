package DestravadoCofre;


import cofre.CofrePM;
import cofre.Memoria;
import cofre.SensorPorta;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.junit.Assert.assertEquals;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

/**
 *
 * @author andre
 */
public class LimparSteps {

    SensorPorta sensorMock = mock(SensorPorta.class);
    Memoria memoriaMock = mock(Memoria.class);
    CofrePM cofrePM = new CofrePM(sensorMock, memoriaMock);
    
    @When("^eu pressionar limpar$")
    public void eu_pressionar_limpar() throws Exception {
        cofrePM.clear();
    }

    @Then("^deve aparecer a mensagem \"([^\"]*)\"$")
    public void deve_aparecer_a_mensagem(String arg1) throws Exception {

        assertEquals("", cofrePM.getDisplay());

    }
}
