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
git clone https://github.com/Viniciusgigante19/AdminSchool.git
cd AdminSchool/
```

## Instale as dependências

npm install

## Subir containers

Docker compose up --build -d

# Execute migrations e seeds

docker compose exec api-node npm run migrate

docker compose exec api-node npm run seed

# comandos úteis se as migrations ou seeds falharem: 
 - APAGAR DB: docker compose exec api-node npx sequelize-cli db:drop
 - CRIAR DB: docker compose exec api-node npx sequelize-cli db:create
 - PASSO NECESSÁRIO: executar migration e seeds novamente


## nginx server (algumas rotas)
## Rotas importantes:
 - http://localhost:5173/dashboard/users

## api-node
 - http://localhost:3000/api 

# para acessar o banco de dados pelo navegador acesse :
 - http://localhost:3000/api/usuarios
 - http://localhost:3000/api/alunos


# Para testar o login crie um usuario peno terminal (administrador, professor e aluno):

- curl -X POST http://localhost:3000/api/usuarios \
-H "Content-Type: application/json" \
-d '{
  "username": "teste3",
  "senha": "123456",
  "tipo_usuario": "administrador",
  "nivel_acesso": "Total",
  "status": "Ativo"
}'

## Acesse:
 - http://localhost:5173/login
   
## login com usuario ADMIN (redirecionamento para os dashboard desabilitado)
- nome: nome criado
- senha: senha criada










# Exemplo CRUD no terminal (bash): 
# GET - todos os alunos
curl http://localhost:3000/api/alunos

# GET - aluno por ID
curl http://localhost:3000/api/alunos/2

# POST - criar aluno
curl -X POST http://localhost:3000/api/alunos \
-H "Content-Type: application/json" \
-d '{
  "nome":"Maria",
  "cpf":"12345678900",
  "responsavel_nome":"João",
  "responsavel_email":"joao@email.com"
}'

# PUT - atualizar aluno por ID
curl -X PUT http://localhost:3000/api/alunos/2 \
-H "Content-Type: application/json" \
-d '{
  "nome":"Maria Silva"
}'

# DELETE - remover aluno por ID
curl -X DELETE http://localhost:3000/api/alunos/2


===========================================================


# GET - todos os usuários
curl http://localhost:3000/api/usuarios

# GET - usuário por ID
curl http://localhost:3000/api/usuarios/1

# POST - criar usuário
curl -X POST http://localhost:3000/api/usuarios \
-H "Content-Type: application/json" \
-d '{
  "username":"wagner",
  "senha":"123456",
  "tipo_usuario":"Administrador",
  "nivel_acesso":"Total"
  "status":""Ativo"
}'

# PUT - atualizar usuário por ID
curl -X PUT http://localhost:3000/api/usuarios/1 \
-H "Content-Type: application/json" \
-d '{
  "status":"inativo"
}'

# DELETE - remover usuário por ID
curl -X DELETE http://localhost:3000/api/usuarios/1
