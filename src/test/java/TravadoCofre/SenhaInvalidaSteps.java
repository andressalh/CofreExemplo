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
public class SenhaInvalidaSteps  {

    SensorPorta sensorMock = mock(SensorPorta.class);
    Memoria memoriaMock = mock(Memoria.class);
    CofrePM cofrePM = new CofrePM(sensorMock, memoriaMock);  


    
@Given("^quando a soenha correta for \"([^\"]*)\"$")
public void quando_a_soenha_correta_for(String arg1) throws Exception {
     when(sensorMock.fechada()).thenReturn(Boolean.TRUE);
     when(sensorMock.travada()).thenReturn(Boolean.TRUE); 
     when(memoriaMock.getSenha()).thenReturn(arg1);
}

    @Given("^entrei com (\\d+)$")
    public void entrei_com(int num) throws Exception {
        cofrePM.pressButton(num);
    }

    @When("^eu pressionar ir$")
    public void eu_pressionar_ir() throws Exception {
        cofrePM.ok();
    }


    @Then("^a mensagem \"([^\"]*)\" deve aparecer$")
    public void a_mensagem_deve_aparecer(String arg1) throws Exception {
        String a = cofrePM.getDisplay();
        assertEquals(arg1, a);
        
    }
}
