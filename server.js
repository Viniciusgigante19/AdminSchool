import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

const PORT = process.env.NODE_PORT || 3000;

app.listen(PORT,console.log("O app esta ouvindo em 3000 no server.js!"))