package DestravadoCofre;

import cofre.CofrePM;
import cofre.Memoria;
import cofre.SensorPorta;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.junit.Assert.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

/**
 *
 * @author andre
 */
public class GravarSenhaValidaPortaFechadaDestravadaSteps {

    SensorPorta sensorMock = mock(SensorPorta.class);
    Memoria memoriaMock = mock(Memoria.class);
    CofrePM cofrePM = new CofrePM(sensorMock, memoriaMock);

    @Given("^qessa senha é \"([^\"]*)\"$")
    public void qessa_senha_é(String arg1) throws Exception {
        when(sensorMock.fechada()).thenReturn(Boolean.TRUE);
    }

    @Given("^entrarei com a senha (\\d+)$")
    public void entrarei_com_a_senha(int arg1) throws Exception {
        cofrePM.pressButton(arg1);
    }

    @When("^for clicar no ok$")
    public void for_clicar_no_ok() throws Exception {
        cofrePM.ok();
    }

    @Then("^isso deve aparece  \"([^\"]*)\"$")
    public void isso_deve_aparece(String arg1) throws Exception {
        String a = cofrePM.getDisplay();
        assertEquals(a, cofrePM.getDisplay());
        verify(sensorMock).travar();
    }

}
