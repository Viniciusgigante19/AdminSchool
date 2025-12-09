import express from 'express';
import db from '../../app/models/index.js';
import getAlunos from '../../app/controllers/alunoController/getAluno.js';
import getAlunoById from '../../app/controllers/alunoController/getAlunoById.js'
import insertAluno from '../../app/controllers/alunoController/insertAluno.js'
import updateAluno from '../../app/controllers/alunoController/updateAluno.js'
import deleteAlunoById from '../../app/controllers/alunoController/deleteAluno.js'
import authMiddleware from '../../app/middleware/auth.js';

import { broadcast } from '../../server.js';
import { type } from 'os';

const router = express.Router();

router.get('/', getAlunos);        // listar todos
router.get('/:id', getAlunoById);       // buscar por id
router.post('/', insertAluno);           // criar novo
router.put('/:id', updateAluno);        // atualizar existente
router.delete('/:id', deleteAlunoById);  // deletar por id

router.post("/", async (req, res) => {
    const aluno = await insertAluno(req, res);
    broadcast({type: "aluno_criado", aluno});
});

router.put("/:id", async (req, res) => {
  const aluno = await updateAluno(req, res);
  broadcast({ type: "aluno_atualizado", aluno });
});

router.delete("/:id", async (req, res) => {
  const aluno = await deleteAlunoById(req, res);
  broadcast({ type: "aluno_removido", aluno });
});


//rotas protejudas com middleware
//router.get('/', authMiddleware, getAlunos);        // listar todos
//router.get('/:id', authMiddleware, getAlunoById);       // buscar por id
//router.post('/', authMiddleware, insertAluno);           // criar novo
//router.put('/:id', authMiddleware, updateAluno);        // atualizar existente
//router.delete('/:id', authMiddleware, deleteAlunoById);  // deletar por id


//Broadcast no chat
/*
router.post("/", authMiddleware, async (req, res) => {
    const aluno = await insertAluno(req, res);
    broadcast({type: "aluno_criado", aluno});
});

router.put("/:id", authMiddleware, async (req, res) => {
  const aluno = await updateAluno(req, res);
  broadcast({ type: "aluno_atualizado", aluno });
});

router.delete("/:id", authMiddleware, async (req, res) => {
  const aluno = await deleteAlunoById(req, res);
  broadcast({ type: "aluno_removido", aluno });
});
*/


export default router;
