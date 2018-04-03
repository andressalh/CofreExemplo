package DestravadoCofre;


import cofre.CofrePM;
import cofre.Memoria;
import cofre.SensorPorta;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import static org.junit.Assert.assertEquals;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

/**
 *
 * @author andre
 */
public class TesteInicialSteps {

    SensorPorta sensorMock = mock(SensorPorta.class);
    Memoria memoriaMock = mock(Memoria.class);
    CofrePM cofrePM = new CofrePM(sensorMock, memoriaMock);

    @Given("^quando a senha for \"([^\"]*)\"$")
    public void quando_a_senha_for(String arg1) throws Exception {
        when(sensorMock.travada()).thenReturn(Boolean.FALSE);
    }

    @Then("^a mgs \"([^\"]*)\" aaparecer$")
    public void a_mgs_aaparecer(String arg1) throws Exception {
        String a = cofrePM.getDisplay();
        assertEquals(arg1, a);
        verify(sensorMock).destravar();
    }
}
