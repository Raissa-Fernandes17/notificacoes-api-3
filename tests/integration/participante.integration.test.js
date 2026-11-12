
const { sequelize, Participante } = require("../../src/models");
const ParticipanteService = require("../../src/services/ParticipanteService");
const limparBanco = require("../helpers/limparBanco");

// Antes de cada teste: banco vazio
beforeEach(async () => {
  await limparBanco();
});

// Depois de todos os testes: fecha a conexão com o banco
afterAll(async () => {
  await sequelize.close();
});

describe("ParticipanteService.criar (integração)", () => {
  it("grava o participante no banco com nome e e-mail corretos", async () => {
    // Arrange
    const dados = { nome: "Ana Souza", email: "ana@senai.br" };

    // Act
    const criado = await ParticipanteService.criar(dados);

    // Assert: busca novamente no banco
    const doBanco = await Participante.findByPk(criado.id);

    expect(doBanco).not.toBeNull();
    expect(doBanco.nome).toBe("Ana Souza");
    expect(doBanco.email).toBe("ana@senai.br");
  });

  it("não grava dois participantes com o mesmo e-mail", async () => {
    // Arrange
    await ParticipanteService.criar({
      nome: "Ana",
      email: "ana@senai.br",
    });

    // Act + Assert
    await expect(
      ParticipanteService.criar({
        nome: "Outra Ana",
        email: "ana@senai.br",
      })
    ).rejects.toThrow();

    // Assert no banco
    const total = await Participante.count();
    expect(total).toBe(1);
  });
});
