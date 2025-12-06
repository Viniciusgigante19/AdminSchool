import express from 'express';
import api from './api.js';

const router = express.Router();

router.use(express.json());
router.use('/api', api());   // todas as rotas da API ficam em /api

export default router;


/*
import AlunoRoutes from './api/Alunos.js';
import ProfessorRoutes from './api/Professor.js';
import AdministradorRoutes from './api/Administrador.js';
import TurmaRoutes from './api/Turma.js';
import AtividadeRoutes from './api/Atividade.js';
import PresencaRoutes from './api/Presenca.js';
import PagamentoRoutes from './api/Pagamento.js';
import UsuarioRoutes from './api/Usuario.js';
import ChatBotRoutes from './api/ChatBot.js';

const router = express.Router();

router.use('/alunos', AlunoRoutes);
router.use('/professores', ProfessorRoutes);
router.use('/administradores', AdministradorRoutes);
router.use('/turmas', TurmaRoutes);
router.use('/atividades', AtividadeRoutes);
router.use('/presencas', PresencaRoutes);
router.use('/pagamentos', PagamentoRoutes);
router.use('/usuarios', UsuarioRoutes);
router.use('/chatbot', ChatBotRoutes);

export default router
*/