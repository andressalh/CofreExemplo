package DestravadoCofre;

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
public class DigitarNumeroPortaFecharEDepoisAbrirEDigitarSteps {

    SensorPorta sensorMock = mock(SensorPorta.class);
    Memoria memoriaMock = mock(Memoria.class);
    CofrePM cofrePM = new CofrePM(sensorMock, memoriaMock);

    @Given("^essa nova senha é \"([^\"]*)\"$")
    public void essa_nova_senha_é(String arg1) throws Exception {
        when(sensorMock.fechada()).thenReturn(Boolean.TRUE);

    }

    @Given("^preciso entrar com a senha  de numero (\\d+)$")
    public void preciso_entrar_com_a_senha_de_numeros(int arg1) throws Exception {
        cofrePM.pressButton(arg1);
    }

    @Given("^preciso entrar com a senha de numero (\\d+)$")
    public void preciso_entrar_com_a_senha_de_numero(int arg1) throws Exception {
        when(sensorMock.fechada()).thenReturn(Boolean.FALSE);
        cofrePM.pressButton(arg1);
    }

    @Then("^a mens  \"([^\"]*)\"$")
    public void a_mens(String arg1) throws Exception {
        String a = cofrePM.getDisplay();
        assertEquals(arg1, a);

    }

}
