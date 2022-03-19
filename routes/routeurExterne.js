import { Router } from 'express';
import path from 'path';

const __dirname = path.resolve();


const router = Router();

router.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, './views/index.html'));
});

router.get('/comptes', (request, response) => {
    response.sendFile(path.join(__dirname, './views/comptes.html'));
});

router.post('/comptes', (request, response) => {
    console.log("comptes");
});

router.put('/comptes/:id', (request, response) => {
    console.log("comptes");
});

router.delete('/comptes/:id', (request, response) => {
    console.log("comptes");
});

router.get('/livres', (request, response) => {
    response.sendFile(path.join(__dirname, './views/livres.html'));
});

router.post('/livres', (request, response) => {
    console.log("livres");
});

router.put('/livres/:id', (request, response) => {
    console.log("livres");
});

router.delete('/livres/:id', (request, response) => {
    console.log("livres");
});

router.get('/emprunts', (request, response) => {
    response.sendFile(path.join(__dirname, './views/emprunts.html'));
});

router.post('/emprunts', (request, response) => {
    console.log("emprunts");
});

router.put('/emprunts/:id', (request, response) => {
    console.log("emprunts");
});

router.delete('/emprunts/:id', (request, response) => {
    console.log("emprunts");
});

export default router;
