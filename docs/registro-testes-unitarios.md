# Registro de Testes Unitários

Aluno: Raissa Fernandes
Grupo:
Data: 24/09/2026

## Testes escritos

| #   | Arquivo                         | O que o teste verifica                                                   | Tipo    |
| --- | ------------------------------- | ------------------------------------------------------------------------ | ------- |
| 1   | `tests/unit/validators.test.js` | Verifica se um e-mail válido não retorna erro                            | sucesso |
| 2   | `tests/unit/validators.test.js` | Verifica se um e-mail sem @ retorna mensagem de erro                     | falha   |
| 3   | `tests/unit/validators.test.js` | Verifica se "Ana", com exatamente 3 letras, é aceita quando o mínimo é 3 | borda   |
| 4   | `tests/unit/parseId.test.js`    | Verifica se um ID como "12abc" é rejeitado                               | borda   |

## Resultado

Passaram: 5
Falharam: 0

## Defeito encontrado

Teste: Nenhum
Esperado: —
Obtido: —

## Cobertura

% Lines da linha "helpers": **51,85%**

Em uma frase, o que esse número significa: **É a porcentagem das linhas de código dos helpers que foram executadas pelos testes.**
