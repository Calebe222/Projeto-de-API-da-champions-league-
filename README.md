# 🏆 API da Liga dos Campeões - DIO

Este projeto é uma API REST desenvolvida como parte do bootcamp da **Digital Innovation One (DIO)**. O objetivo principal é a aplicação prática de conceitos fundamentais de desenvolvimento backend, como criação de rotas, manipulação de dados JSON e versionamento semântico.

## 📌 Objetivo

Fornecer uma interface simples e funcional para consulta de informações sobre os clubes participantes da **UEFA Champions League**, simulando um ambiente real de consumo de dados.

---

## ⚙️ Funcionalidades

- [x] **Listagem Geral:** Retorna todos os clubes participantes.
- [x] **Busca por ID:** Filtra um clube específico através de seu identificador único.
- [x] **Busca por Nome:** Permite localizar clubes através de termos de pesquisa.
- [x] **Formatação Padrão:** Respostas entregues integralmente em formato JSON.

---

## 🛠️ Tecnologias Utilizadas

* **Node.js**: Ambiente de execução.
* **Express**: Framework web para gerenciamento de rotas e middlewares.
* **TypeScript**: Adição de tipagem estática para maior segurança no desenvolvimento.
* **JavaScript (ES6+)**: Base do desenvolvimento da lógica.

---

## 📊 Exemplo de Resposta

`GET /clubs`

```json
[
  {
    "id": 1,
    "name": "Real Madrid"
  },
  {
    "id": 2,
    "name": "Barcelona"
  },
  {
    "id": 3,
    "name": "Manchester City"
  }
]
