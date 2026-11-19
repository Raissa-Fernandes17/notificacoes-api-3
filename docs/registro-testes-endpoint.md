# Registro de Testes de Endpoint

Aluno: Raissa Fernandes
Grupo: Grupo 3

## Testes escritos

| # | Verbo e rota | Com token? | Status esperado | Verde ou vermelho? |
| - | ------------ | ---------- | --------------- | ------------------ |
| 1 | POST /eventos | Sim | 201 | Verde |
| 2 | GET /eventos/:id | Não | 404 | Verde |
| 3 | GET /eventos/:id | Não | 400 | Vermelho |

## Resultado

Linha "Tests:" da saída do npm run test:endpoint: Tests: 1 failed, 4 passed, 5 total

## Defeito encontrado

Teste: GET /eventos/:id (responde 400 quando o id tem letras)
Esperado: 400
Obtido: 200
Em qual aula esse mesmo defeito já tinha aparecido, e como: Apareceu na Aula 04 (testes unitários), na função parseId("12abc"), que devolvia o número 12 em vez de dar erro por conter letras.
