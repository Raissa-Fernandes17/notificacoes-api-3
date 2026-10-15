# Registro de Testes de Integração

**Aluno:** Raissa Fernandes  
**Grupo:** [Maria Fernanda, Isadora, Maria Eloisa, Raissa Fernandes]  
**Data:** 15/10/2026

## Banco de teste

**Nome do banco de teste:** `notificacoes_test`

**Por que ele é separado do banco da API?**

Para executar os testes sem apagar ou alterar os dados utilizados pela API.

## Testes escritos

| # | Arquivo | O que o teste verifica | Verde ou vermelho? |
|---|---|---|---|
| 1 | `evento.integration.test.js` | Se o evento válido é gravado corretamente no banco | Verde |
| 2 | `participante.integration.test.js` | Se o participante com e-mail inválido é recusado e não é gravado | Verde |
| 3 | `participante.integration.test.js` | Se o nome atualizado é salvo no banco | Vermelho |

## Resultado

`Tests: 1 failed, 5 passed, 6 total`

## Defeito encontrado

**Teste:** `ParticipanteService.atualizar (integração) — grava o nome novo no banco`

**Esperado:** `Ana Maria`

**Obtido:** `Ana`

**O que o usuário da API veria?**

A rota pode responder HTTP 200, mas o nome do participante continua como "Ana" no banco, em vez de ser atualizado para "Ana Maria".