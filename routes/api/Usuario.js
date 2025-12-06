import express from 'express';
import db from '../../app/models/index.js';

import getUsuarios from '../../app/controllers/usuarioController/getUsuarios.js';
import getUsuarioByName from '../../app/controllers/usuarioController/getUsuarioByName.js';
import insertUsuario from '../../app/controllers/usuarioController/insertUsuario.js';
import updateUsuario from '../../app/controllers/usuarioController/updateUsuario.js';
import deleteUsuarioById from '../../app/controllers/usuarioController/deleteUsuario.js';

// controller para login
import loginUsuario from '../../app/controllers/usuarioController/loginUsuario.js';

const router = express.Router();

router.get('/', getUsuarios);        // listar todos
router.get('/:name', getUsuarioByName);       // buscar por nome
router.post('/', insertUsuario);           // criar novo
router.put('/:id', updateUsuario);        // atualizar existente
router.delete('/:id', deleteUsuarioById);  // deletar por id

// rota de login
router.post('/login', loginUsuario);

export default router;
