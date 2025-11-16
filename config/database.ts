const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.POSTGRES_DB, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
  host: 'postgres_host', // o alias definido no compose
  port: 5432,            // porta interna do container
  dialect: 'postgres',
  logging: false          // ou true para ver queries
});

module.exports = sequelize;
