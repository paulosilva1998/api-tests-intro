const somar = require("../src/somar");

describe("Casos VÁLIDOS da função somar()", () => {
  beforeAll(() => {
    console.log("Iniciando suíte de testes de somar...");
  });

  afterAll(() => {
    console.log("Suíte de testes de somar finalizada.");
  });

  test.each([
    [2, 3, 5],
    [-4, -2, -6],
    [5, -2, 3],
    [0, 10, 10],
    [0, 0, 0],
  ])("Deve somar %p + %p e retornar %p", (a, b, esperado) => {
    expect(somar(a, b)).toBe(esperado);
  });
});

describe("Casos INVÁLIDOS da função somar() (espera ERROS)", () => {
  test.each([
    ["2", 3],
    [2, "3"],
    [null, 5],
    [5, null],
    [undefined, 2],
    [2, undefined],
    [NaN, 1],
    [1, NaN],
    [{}, 1],
    [1, {}],
  ])("Deve lançar erro ao somar %p e %p", (a, b) => {
    expect(() => somar(a, b)).toThrow("Os parâmetros devem ser números");
  });
});