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
public class DigatarComPortaFechadaSteps {

    SensorPorta sensorMock = mock(SensorPorta.class);
    Memoria memoriaMock = mock(Memoria.class);
    CofrePM cofrePM = new CofrePM(sensorMock, memoriaMock);

    @Given("^a senha é \"([^\"]*)\"$")
    public void a_senha_é(String arg1) throws Exception {
        when(sensorMock.fechada()).thenReturn(Boolean.TRUE);

    }

    @Given("^o (\\d+)$")
    public void o(int arg1) throws Exception {
       cofrePM.pressButton(arg1);
    }


    @Then("^mensagem deve aparece  \"([^\"]*)\"$")
    public void mensagem_deve_aparece(String arg1) throws Exception {
        String a = cofrePM.getDisplay();
        assertEquals(arg1, a);
    }
}
