# language: en
Feature: Cofre destravado
  Verificar se o cofre esta destravado

  Scenario: Teste inicial
    Given quando a senha for ""
    When eu pressionar ir
    Then a mgs "Entre com a senha 6 digitos" aaparecer

  Scenario: Teste vazio
    Given quando a senha for "123445"
    When eu pressionar limpar
    Then deve aparecer a mensagem ""

  Scenario: Portao nao fecha
    Given quando a senha "123456"
    And entrarei com  1
    And entrarei com  2
    And entrarei com  3
    And entrarei com  4
    And entrarei com  5
    And entrarei com  6
    When quando eu for clicar no ok
    Then essa mensagem deve aparece  "Feche a porta antes de digitar a senha"

  Scenario: Digitar um numero com a porta fechada
    Given a senha é "123456"
    And o 0
    Then mensagem deve aparece  "0"

  Scenario: Gravar Senha Valida Porta Fechada Destravada
    Given qessa senha é "123456"
    And entrarei com a senha 1
    And entrarei com a senha 2
    And entrarei com a senha 3
    And entrarei com a senha 4
    And entrarei com a senha 5
    And entrarei com a senha 6
    When for clicar no ok
    Then isso deve aparece  "Senha salva. Cofre trancado"

  Scenario: Digitar Senha Com Menos De Seis
    Given nova senha é "123456"
    And vou entrar com a senha 1
    And vou entrar com a senha 2
    And vou entrar com a senha 3
    And vou entrar com a senha 4
    And vou entrar com a senha 5
    When preciso clicar no ok
    Then a mensagem  "senha precisa de 6 digitos. Tente novamente"

  Scenario: Digitar Numeros Porta Fechada E Depois Abrir E Digitar
    And preciso entrar com a senha de numero 1
    And preciso entrar com a senha  de numero 2
    Then a mens  "Feche a porta antes de digitar a senha"
