# Testes Automatizados com Jest e Supertest

Projeto desenvolvido para a disciplina de **Desenvolvimento de Aplicações Corporativas** do Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas (IFRS - Campus Bento Gonçalves)[cite: 3].

O objetivo deste repositório é demonstrar a implementação de testes automatizados em ambiente Node.js, abrangendo testes unitários, testes de integração de APIs REST e técnicas de isolamento através de *mocks*[cite: 3, 6, 43].

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**
- **Express.js**: Criação dos serviços e rotas HTTP da API[cite: 6, 9, 25]
- **Axios**: Cliente HTTP para chamadas a serviços externos[cite: 43]
- **Jest**: Framework para execução e orquestração das suítes de testes[cite: 6, 10, 24]
- **Supertest**: Testes de integração de endpoints HTTP sem necessidade de inicialização manual de portas de rede[cite: 6, 24, 25]
- **Nodemon**: Execução em ambiente de desenvolvimento com reinicialização automática[cite: 9]

---

## 📂 Estrutura do Projeto

```text
api-tests-intro/
├── node_modules/
├── src/
│   ├── app.js             # Configuração das rotas e instância da aplicação Express[cite: 25]
│   ├── somar.js           # Função de cálculo com validação de parâmetros de entrada[cite: 20]
│   └── userService.js     # Serviço de consumo assíncrono via Axios[cite: 43]
├── tests/
│   ├── app.test.js        # Testes de integração de rotas com Supertest
│   ├── somar.test.js      # Testes unitários com describe, test.each e ciclo de hooks[cite: 16, 18, 34, 35]
│   └── userService.test.js # Testes com isolamento e mock através de jest.mock
├── package.json           # Definição de dependências e scripts de execução[cite: 9, 15]
├── server.js              # Inicialização do servidor HTTP[cite: 9, 25]
└── README.md
