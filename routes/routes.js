import express from 'express';
import api from './api.js';

const router = express.Router();

router.use(express.json());
router.use('/api', api());   // todas as rotas da API ficam em /api

export default router;