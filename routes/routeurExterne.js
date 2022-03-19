import { Router } from 'express';

const router = Router();

router.get('/', (request, response) => {
    response.status(200).send('<h1>Good</h1>');
});

router.get('/account', (request, response) => {
    console.log("comptes");
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
    console.log("livres");
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
    console.log("emprunts");
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