# language: en
Feature: Cofre destravado
  Verificar se o cofre esta destravado


    Scenario: Teste inicial
    Given quando a senha for ""   
    When eu pressionar ir
    Then a mensagem "Entre com a senha 6 digitos" deve aparecer