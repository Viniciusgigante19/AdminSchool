import { Router } from 'express';
import alunoApi from './api/Alunos.js';
import usuarioApi from './api/Usuario.js'

export default function() {
    const router = Router();
    
    router.get('/', (req, res) => {
        res.status(200).json({ message: 'API está funcionando!' });
    });

    router.use('/alunos', alunoApi);

    router.use('/usuarios', usuarioApi);


    return router;
}