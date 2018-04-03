# language: en
Feature: Validao Helper
  Verificar se é numero

  Scenario Outline: Senha com numeros
    Given quando a senha digitada for <senha>
    Then o resultado vai ser <resultado>

    Examples: 
      | senha   | resultado |
      | "5689"  | True      |
      | "56a58" | False     |
      | "12345" | True      |
      | "aaa"   | False     |


  Scenario Outline: Senha valida
    Given senha pressionado for <senha>
    Then o resultado dessa acao vai ser <resultado>

    Examples: 
      | senha    | resultado |
      | "123456" | True      |
      | "56a58"  | False     |
      | "34 "    | False     |
      | "45891a" | False     |
