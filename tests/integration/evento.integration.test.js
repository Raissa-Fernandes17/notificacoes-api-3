
const { sequelize, Evento } = require("../../src/models");
const EventoService = require("../../src/services/EventoService");
const { ValidationError } = require("../../src/errors/AppError");
const limparBanco = require("../helpers/limparBanco");

beforeEach(async () => {
  await limparBanco();
});

afterAll(async () => {
  await sequelize.close();
});

describe("EventoService.criar (integração)", () => {
  it("não grava evento com nome de 2 letras", async () => {
    const dados = {
      nome: "TI",
      data: "2026-10-15"
    };

    await expect(
      EventoService.criar(dados)
    ).rejects.toThrow(ValidationError);

    const total = await Evento.count();
    expect(total).toBe(0);
  });

  // ============================================================
  // SUA VEZ: complete o teste abaixo, seguindo o modelo do
  // participante.integration.test.js (teste "grava o participante...").
  //
  // 1. Arrange: monte os dados de um evento válido (nome e data)
  // 2. Act:     chame EventoService.criar(dados) com await
  // 3. Assert:  busque o evento no banco com Evento.findByPk(criado.id)
  //             e confira o nome gravado
  //
  // Depois, apague o ".todo" da linha abaixo e troque por um teste completo:
  //   it("grava o evento no banco com o nome correto", async () => { ... });
  // ============================================================
  it.todo("grava o evento no banco com o nome correto");
});
