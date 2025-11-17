import express from 'express';
import dotenv from 'dotenv';
import { sequelize } from './config/sequelize.js';

dotenv.config();
const app = express();

async function startServer() {
    try {
        await sequelize.authenticate();
        console.log('Conexão com banco estabelecida.');

        const PORT = process.env.NODE_PORT || 3000;

        app.listen(PORT, () => {
            console.log(`O app está ouvindo na porta ${PORT}!`);
        });
    } catch (error) {
        console.error('Erro ao criar servidor:', error.message);
    }
}

startServer();
