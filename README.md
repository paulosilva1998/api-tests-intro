# Testes Automatizados com Jest e Supertest

Projeto desenvolvido para a disciplina de **Desenvolvimento de Aplicações Corporativas** do Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas (IFRS - Campus Bento Gonçalves).

O objetivo deste repositório é demonstrar a implementação de testes automatizados em ambiente Node.js, abrangendo testes unitários, testes de integração de APIs REST e técnicas de isolamento através de *mocks*.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**
- **Express.js**: Criação dos serviços e rotas HTTP da API.
- **Axios**: Cliente HTTP para chamadas a serviços externos.
- **Jest**: Framework para execução e orquestração das suítes de testes.
- **Supertest**: Testes de integração de endpoints HTTP sem necessidade de inicialização manual de portas de rede.
- **Nodemon**: Execução em ambiente de desenvolvimento com reinicialização automática.

---

## 📂 Estrutura do Projeto

```text
api-tests-intro/
├── node_modules/
├── src/
│   ├── app.js             # Configuração das rotas e instância da aplicação Express
│   ├── somar.js           # Função de cálculo com validação de parâmetros de entrada
│   └── userService.js     # Serviço de consumo assíncrono via Axios
├── tests/
│   ├── app.test.js        # Testes de integração de rotas com Supertest
│   ├── somar.test.js      # Testes unitários com describe, test.each e ciclo de hooks
│   └── userService.test.js # Testes com isolamento e mock através de jest.mock
├── package.json           # Definição de dependências e scripts de execução
├── server.js              # Inicialização do servidor HTTP
└── README.md
