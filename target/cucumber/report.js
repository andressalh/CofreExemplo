$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DestravadoCofre.feature");
formatter.feature({
  "name": "Cofre destravado",
  "description": "  Verificar se o cofre esta destravado",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Teste inicial",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "quando a senha for \"\"",
  "keyword": "Given "
});
formatter.match({
  "location": "TesteInicialSteps.quando_a_senha_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu pressionar ir",
  "keyword": "When "
});
formatter.match({
  "location": "SenhaInvalidaSteps.eu_pressionar_ir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a mgs \"Entre com a senha 6 digitos\" aaparecer",
  "keyword": "Then "
});
formatter.match({
  "location": "TesteInicialSteps.a_mgs_aaparecer(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Teste vazio",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "quando a senha for \"123445\"",
  "keyword": "Given "
});
formatter.match({
  "location": "TesteInicialSteps.quando_a_senha_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu pressionar limpar",
  "keyword": "When "
});
formatter.match({
  "location": "LimparSteps.eu_pressionar_limpar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve aparecer a mensagem \"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LimparSteps.deve_aparecer_a_mensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Portao nao fecha",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "quando a senha \"123456\"",
  "keyword": "Given "
});
formatter.match({
  "location": "SenhaValidaSteps.quando_a_senha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entrarei com  1",
  "keyword": "And "
});
formatter.match({
  "location": "PortaNaoFechaSteps.entrarei_com(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entrarei com  2",
  "keyword": "And "
});
formatter.match({
  "location": "PortaNaoFechaSteps.entrarei_com(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entrarei com  3",
  "keyword": "And "
});
formatter.match({
  "location": "PortaNaoFechaSteps.entrarei_com(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entrarei com  4",
  "keyword": "And "
});
formatter.match({
  "location": "PortaNaoFechaSteps.entrarei_com(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entrarei com  5",
  "keyword": "And "
});
formatter.match({
  "location": "PortaNaoFechaSteps.entrarei_com(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entrarei com  6",
  "keyword": "And "
});
formatter.match({
  "location": "PortaNaoFechaSteps.entrarei_com(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "quando eu for clicar no ok",
  "keyword": "When "
});
formatter.match({
  "location": "PortaNaoFechaSteps.quando_eu_for_clicar_no_ok()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "essa mensagem deve aparece  \"Feche a porta antes de digitar a senha\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PortaNaoFechaSteps.essa_mensagem_deve_aparece(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Digitar um numero com a porta fechada",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "a senha é \"123456\"",
  "keyword": "Given "
});
formatter.match({
  "location": "DigatarComPortaFechadaSteps.a_senha_é(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o 0",
  "keyword": "And "
});
formatter.match({
  "location": "DigatarComPortaFechadaSteps.o(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "mensagem deve aparece  \"0\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DigatarComPortaFechadaSteps.mensagem_deve_aparece(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Gravar Senha Valida Porta Fechada Destravada",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "qessa senha é \"123456\"",
  "keyword": "Given "
});
formatter.match({
  "location": "GravarSenhaValidaPortaFechadaDestravadaSteps.qessa_senha_é(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entrarei com a senha 1",
  "keyword": "And "
});
formatter.match({
  "location": "GravarSenhaValidaPortaFechadaDestravadaSteps.entrarei_com_a_senha(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entrarei com a senha 2",
  "keyword": "And "
});
formatter.match({
  "location": "GravarSenhaValidaPortaFechadaDestravadaSteps.entrarei_com_a_senha(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entrarei com a senha 3",
  "keyword": "And "
});
formatter.match({
  "location": "GravarSenhaValidaPortaFechadaDestravadaSteps.entrarei_com_a_senha(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entrarei com a senha 4",
  "keyword": "And "
});
formatter.match({
  "location": "GravarSenhaValidaPortaFechadaDestravadaSteps.entrarei_com_a_senha(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entrarei com a senha 5",
  "keyword": "And "
});
formatter.match({
  "location": "GravarSenhaValidaPortaFechadaDestravadaSteps.entrarei_com_a_senha(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entrarei com a senha 6",
  "keyword": "And "
});
formatter.match({
  "location": "GravarSenhaValidaPortaFechadaDestravadaSteps.entrarei_com_a_senha(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "for clicar no ok",
  "keyword": "When "
});
formatter.match({
  "location": "GravarSenhaValidaPortaFechadaDestravadaSteps.for_clicar_no_ok()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "isso deve aparece  \"Senha salva. Cofre trancado\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GravarSenhaValidaPortaFechadaDestravadaSteps.isso_deve_aparece(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Digitar Senha Com Menos De Seis",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "nova senha é \"123456\"",
  "keyword": "Given "
});
formatter.match({
  "location": "DigitarSenhaComMenosDeSeisSteps.nova_senha_é(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "vou entrar com a senha 1",
  "keyword": "And "
});
formatter.match({
  "location": "DigitarSenhaComMenosDeSeisSteps.vou_entrar_com_a_senha(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "vou entrar com a senha 2",
  "keyword": "And "
});
formatter.match({
  "location": "DigitarSenhaComMenosDeSeisSteps.vou_entrar_com_a_senha(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "vou entrar com a senha 3",
  "keyword": "And "
});
formatter.match({
  "location": "DigitarSenhaComMenosDeSeisSteps.vou_entrar_com_a_senha(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "vou entrar com a senha 4",
  "keyword": "And "
});
formatter.match({
  "location": "DigitarSenhaComMenosDeSeisSteps.vou_entrar_com_a_senha(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "vou entrar com a senha 5",
  "keyword": "And "
});
formatter.match({
  "location": "DigitarSenhaComMenosDeSeisSteps.vou_entrar_com_a_senha(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preciso clicar no ok",
  "keyword": "When "
});
formatter.match({
  "location": "DigitarSenhaComMenosDeSeisSteps.preciso_clicar_no_ok()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a mensagem  \"senha precisa de 6 digitos. Tente novamente\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DigitarSenhaComMenosDeSeisSteps.a_mensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Digitar Numeros Porta Fechada E Depois Abrir E Digitar",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "preciso entrar com a senha de numero 1",
  "keyword": "And "
});
formatter.match({
  "location": "DigitarNumeroPortaFecharEDepoisAbrirEDigitarSteps.preciso_entrar_com_a_senha_de_numero(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preciso entrar com a senha  de numero 2",
  "keyword": "And "
});
formatter.match({
  "location": "DigitarNumeroPortaFecharEDepoisAbrirEDigitarSteps.preciso_entrar_com_a_senha_de_numeros(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a mens  \"Feche a porta antes de digitar a senha\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DigitarNumeroPortaFecharEDepoisAbrirEDigitarSteps.a_mens(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("TravadoCofre.feature");
formatter.feature({
  "name": "Cofre travado",
  "description": "  Verificar se o cofre esta travado",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Senha invalida",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "quando a soenha correta for \"123456\"",
  "keyword": "Given "
});
formatter.match({
  "location": "SenhaInvalidaSteps.quando_a_soenha_correta_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entrei com 0",
  "keyword": "And "
});
formatter.match({
  "location": "SenhaInvalidaSteps.entrei_com(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entrei com 0",
  "keyword": "And "
});
formatter.match({
  "location": "SenhaInvalidaSteps.entrei_com(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entrei com 4",
  "keyword": "And "
});
formatter.match({
  "location": "SenhaInvalidaSteps.entrei_com(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entrei com 5",
  "keyword": "And "
});
formatter.match({
  "location": "SenhaInvalidaSteps.entrei_com(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entrei com 6",
  "keyword": "And "
});
formatter.match({
  "location": "SenhaInvalidaSteps.entrei_com(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entrei com 9",
  "keyword": "And "
});
formatter.match({
  "location": "SenhaInvalidaSteps.entrei_com(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu pressionar ir",
  "keyword": "When "
});
formatter.match({
  "location": "SenhaInvalidaSteps.eu_pressionar_ir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a mensagem \"senha errada. Tente novamente\" deve aparecer",
  "keyword": "Then "
});
formatter.match({
  "location": "SenhaInvalidaSteps.a_mensagem_deve_aparecer(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Senha pequena",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "quando a senha  for \"123456\"",
  "keyword": "Given "
});
formatter.match({
  "location": "SenhaPequenaSteps.quando_a_senha_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entrei com o numero 0",
  "keyword": "And "
});
formatter.match({
  "location": "SenhaPequenaSteps.entrei_com_o_numero(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entrei com o numero 0",
  "keyword": "And "
});
formatter.match({
  "location": "SenhaPequenaSteps.entrei_com_o_numero(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entrei com o numero 4",
  "keyword": "And "
});
formatter.match({
  "location": "SenhaPequenaSteps.entrei_com_o_numero(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entrei com o numero 5",
  "keyword": "And "
});
formatter.match({
  "location": "SenhaPequenaSteps.entrei_com_o_numero(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entrei com o numero 6",
  "keyword": "And "
});
formatter.match({
  "location": "SenhaPequenaSteps.entrei_com_o_numero(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pressionei ir",
  "keyword": "When "
});
formatter.match({
  "location": "SenhaPequenaSteps.pressionei_ir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "mensagem \"senha errada. Tente novamente\" aparecerá",
  "keyword": "Then "
});
formatter.match({
  "location": "SenhaPequenaSteps.mensagem_aparecerá(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Senha valida",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "quando a senha \"123456\"",
  "keyword": "Given "
});
formatter.match({
  "location": "SenhaValidaSteps.quando_a_senha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entrei com  1",
  "keyword": "And "
});
formatter.match({
  "location": "SenhaValidaSteps.entrei_com(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entrei com  2",
  "keyword": "And "
});
formatter.match({
  "location": "SenhaValidaSteps.entrei_com(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entrei com  3",
  "keyword": "And "
});
formatter.match({
  "location": "SenhaValidaSteps.entrei_com(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entrei com  4",
  "keyword": "And "
});
formatter.match({
  "location": "SenhaValidaSteps.entrei_com(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entrei com  5",
  "keyword": "And "
});
formatter.match({
  "location": "SenhaValidaSteps.entrei_com(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entrei com  6",
  "keyword": "And "
});
formatter.match({
  "location": "SenhaValidaSteps.entrei_com(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no ir",
  "keyword": "When "
});
formatter.match({
  "location": "SenhaValidaSteps.clicar_no_ir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "mensagem  \"senha correta. Cofre aberto\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SenhaValidaSteps.mensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("ValidacaoHelper.feature");
formatter.feature({
  "name": "Validao Helper",
  "description": "  Verificar se é numero",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Senha com numeros",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "quando a senha digitada for \u003csenha\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "o resultado vai ser \u003cresultado\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "senha",
        "resultado"
      ]
    },
    {
      "cells": [
        "\"5689\"",
        "True"
      ]
    },
    {
      "cells": [
        "\"56a58\"",
        "False"
      ]
    },
    {
      "cells": [
        "\"12345\"",
        "True"
      ]
    },
    {
      "cells": [
        "\"aaa\"",
        "False"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Senha com numeros",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "quando a senha digitada for \"5689\"",
  "keyword": "Given "
});
formatter.match({
  "location": "EhNumeroSteps.quando_a_senha_digitada_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o resultado vai ser True",
  "keyword": "Then "
});
formatter.match({
  "location": "EhNumeroSteps.o_resultado_vai_ser_True()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Senha com numeros",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "quando a senha digitada for \"56a58\"",
  "keyword": "Given "
});
formatter.match({
  "location": "EhNumeroSteps.quando_a_senha_digitada_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o resultado vai ser False",
  "keyword": "Then "
});
formatter.match({
  "location": "EhNumeroSteps.o_resultado_vai_ser_False()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Senha com numeros",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "quando a senha digitada for \"12345\"",
  "keyword": "Given "
});
formatter.match({
  "location": "EhNumeroSteps.quando_a_senha_digitada_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o resultado vai ser True",
  "keyword": "Then "
});
formatter.match({
  "location": "EhNumeroSteps.o_resultado_vai_ser_True()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Senha com numeros",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "quando a senha digitada for \"aaa\"",
  "keyword": "Given "
});
formatter.match({
  "location": "EhNumeroSteps.quando_a_senha_digitada_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o resultado vai ser False",
  "keyword": "Then "
});
formatter.match({
  "location": "EhNumeroSteps.o_resultado_vai_ser_False()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Senha valida",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "senha pressionado for \u003csenha\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "o resultado dessa acao vai ser \u003cresultado\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "senha",
        "resultado"
      ]
    },
    {
      "cells": [
        "\"123456\"",
        "True"
      ]
    },
    {
      "cells": [
        "\"56a58\"",
        "False"
      ]
    },
    {
      "cells": [
        "\"34 \"",
        "False"
      ]
    },
    {
      "cells": [
        "\"45891a\"",
        "False"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Senha valida",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "senha pressionado for \"123456\"",
  "keyword": "Given "
});
formatter.match({
  "location": "SenhaValidaSteps.senha_pressionado_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o resultado dessa acao vai ser True",
  "keyword": "Then "
});
formatter.match({
  "location": "SenhaValidaSteps.o_resultado_dessa_acao_vai_ser_True()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Senha valida",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "senha pressionado for \"56a58\"",
  "keyword": "Given "
});
formatter.match({
  "location": "SenhaValidaSteps.senha_pressionado_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o resultado dessa acao vai ser False",
  "keyword": "Then "
});
formatter.match({
  "location": "SenhaValidaSteps.o_resultado_dessa_acao_vai_ser_False()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Senha valida",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "senha pressionado for \"34 \"",
  "keyword": "Given "
});
formatter.match({
  "location": "SenhaValidaSteps.senha_pressionado_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o resultado dessa acao vai ser False",
  "keyword": "Then "
});
formatter.match({
  "location": "SenhaValidaSteps.o_resultado_dessa_acao_vai_ser_False()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Senha valida",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "senha pressionado for \"45891a\"",
  "keyword": "Given "
});
formatter.match({
  "location": "SenhaValidaSteps.senha_pressionado_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o resultado dessa acao vai ser False",
  "keyword": "Then "
});
formatter.match({
  "location": "SenhaValidaSteps.o_resultado_dessa_acao_vai_ser_False()"
});
formatter.result({
  "status": "passed"
});
});