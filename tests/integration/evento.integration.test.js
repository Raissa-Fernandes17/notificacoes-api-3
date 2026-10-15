
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

  it("grava o evento no banco com o nome correto", async () => {
    // Arrange
    const dados = {
      nome: "Evento de Tecnologia",
      data: "2026-11-20"
    };

    // Act
    const criado = await EventoService.criar(dados);

    // Assert: consultar o banco de verdade
    const doBanco = await Evento.findByPk(criado.id);

    expect(doBanco).not.toBeNull();
    expect(doBanco.nome).toBe("Evento de Tecnologia");
  });
});
