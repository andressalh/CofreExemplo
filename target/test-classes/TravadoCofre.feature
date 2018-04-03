# language: en
Feature: Cofre travado
  Verificar se o cofre esta travado


    Scenario: Senha invalida
    Given quando a soenha correta for "123456"
    And entrei com 0
    And entrei com 0
    And entrei com 4
    And entrei com 5
    And entrei com 6
    And entrei com 9
    When eu pressionar ir
    Then a mensagem "senha errada. Tente novamente" deve aparecer

    
Scenario: Senha pequena
    Given quando a senha  for "123456"
    And entrei com o numero 0
    And entrei com o numero 0
    And entrei com o numero 4
    And entrei com o numero 5
    And entrei com o numero 6
    When pressionei ir
    Then mensagem "senha errada. Tente novamente" aparecerá

Scenario: Senha valida
    Given quando a senha "123456"
    And entrei com  1
    And entrei com  2
    And entrei com  3
    And entrei com  4
    And entrei com  5
    And entrei com  6
    When clicar no ir
    Then mensagem  "senha correta. Cofre aberto" 