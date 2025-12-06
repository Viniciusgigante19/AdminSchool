import { Router } from 'express';
import express from 'express';
import path from 'path';
import api from './api.js'

export default (function () {

    const router = Router();

    router.use(express.json());

    router.use(express.static(path.join(CONSTANTS.DIR, 'public')));

    router.get("/", (req, res) => {
        res.sendFile(path.join(CONSTANTS.DIR, 'public', 'index.html'));
    });

    router.use('/', api());

    router.use((req, res) => {
        res.status(CONSTANTS.HTTP.NOT_FOUND).json({ error: "Not found" });
    });

    return router;

})()