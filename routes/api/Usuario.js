import express from 'express';
import getUsuarios from '../../app/controllers/usuarioController/getUsuarios.js';
import getUsuarioById from '../../app/controllers/usuarioController/getUsuarioById.js'; // novo controller para buscar por id
import getUsuarioByName from '../../app/controllers/usuarioController/getUsuarioByName.js';
import insertUsuario from '../../app/controllers/usuarioController/insertUsuario.js';
import updateUsuario from '../../app/controllers/usuarioController/updateUsuario.js';
import deleteUsuarioById from '../../app/controllers/usuarioController/deleteUsuario.js';
import loginUsuario from '../../app/controllers/usuarioController/loginUsuario.js';
import authMiddleware from '../../app/middleware/auth.js'; // importa o middleware

const router = express.Router();

router.get('/', getUsuarios);             // listar todos
router.get('/:id', getUsuarioById);       // buscar por id
router.get('/name/:name', getUsuarioByName); // buscar por nome
router.post('/', insertUsuario);          // criar novo
router.put('/:id', updateUsuario);        // atualizar existente
router.delete('/:id', deleteUsuarioById); // deletar por id

// Rotas protegidas com token
/*
router.get('/', authMiddleware, getUsuarios);             // listar todos
router.get('/:id', authMiddleware, getUsuarioById);       // buscar por id
router.get('/name/:name', authMiddleware, getUsuarioByName); // buscar por nome
router.post('/', authMiddleware, insertUsuario);          // criar novo
router.put('/:id', authMiddleware, updateUsuario);        // atualizar existente
router.delete('/:id', authMiddleware, deleteUsuarioById); // deletar por id
*/

// Rota pública de login (não precisa de token)
router.post('/login', loginUsuario);

export default router;
