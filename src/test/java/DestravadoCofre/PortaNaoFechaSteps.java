package DestravadoCofre;

import cofre.CofrePM;
import cofre.Memoria;
import cofre.SensorPorta;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.junit.Assert.assertEquals;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

/**
 *
 * @author andre
 */
public class PortaNaoFechaSteps {

    SensorPorta sensorMock = mock(SensorPorta.class);
    Memoria memoriaMock = mock(Memoria.class);
    CofrePM cofrePM = new CofrePM(sensorMock, memoriaMock);

    @Given("^entrarei com  (\\d+)$")
    public void entrarei_com(int arg1) throws Exception {
        when(sensorMock.fechada()).thenReturn(Boolean.FALSE);
    }

    @When("^quando eu for clicar no ok$")
    public void quando_eu_for_clicar_no_ok() throws Exception {
        cofrePM.ok();
    }

    @Then("^essa mensagem deve aparece  \"([^\"]*)\"$")
    public void essa_mensagem_deve_aparece(String arg1) throws Exception {
        String a = cofrePM.getDisplay();
        assertEquals(arg1, a);
    }
}
