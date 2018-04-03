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
public class DigitarSenhaComMenosDeSeisSteps {

    SensorPorta sensorMock = mock(SensorPorta.class);
    Memoria memoriaMock = mock(Memoria.class);
    CofrePM cofrePM = new CofrePM(sensorMock, memoriaMock);

    @Given("^nova senha é \"([^\"]*)\"$")
    public void nova_senha_é(String arg1) throws Exception {
        when(sensorMock.fechada()).thenReturn(Boolean.TRUE);
    }

    @Given("^vou entrar com a senha (\\d+)$")
    public void vou_entrar_com_a_senha(int arg1) throws Exception {
        cofrePM.pressButton(arg1);
    }

    @When("^preciso clicar no ok$")
    public void preciso_clicar_no_ok() throws Exception {
        cofrePM.ok();
    }

    @Then("^a mensagem  \"([^\"]*)\"$")
    public void a_mensagem(String arg1) throws Exception {
        String a = cofrePM.getDisplay();
        assertEquals(arg1, a);
    }

}
