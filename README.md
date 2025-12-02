# 🏫 Sistema Escolar - Backend

Este é um sistema de gerenciamento escolar desenvolvido com Node.js, Express e Sequelize. Ele permite o controle de alunos, professores, turmas, atividades, presenças, pagamentos, usuários e interações com chatbot.

---

## 🚀 Tecnologias

- Node.js
- Express
- Sequelize (ORM)
- PostgreSQL (ou outro banco relacional)
- JavaScript ES Modules

---

## 📦 Pré-requisitos

Antes de começar, você vai precisar ter instalado:

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/) (ou outro banco compatível)
- [Git](https://git-scm.com/)

---

## 📥 Como clonar o projeto

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git

cd AdminSchool/
```

## Instale as dependências

npm install

## Subir containers

Docker compose up --build -d

# Execute migrations e seeds

docker compose exec api-node npm run migrate

docker compose exec api-node npm run seed

# comandos úteis se necessário 
 - apagar banco: docker compose exec api-node npx sequelize-cli db:drop
 - criar banco: docker compose exec api-node npx sequelize-cli db:create
 - executar migration e seeds novamente


As rotas estão todas em routes/index.js
exemplo no terminal: 
curl http://localhost:3000/alunos
curl http://localhost:3000/alunos/2
curl http://localhost:3000/chatbot
curl http://localhost:3000/professores