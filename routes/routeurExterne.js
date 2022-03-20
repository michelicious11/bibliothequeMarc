import { Router } from 'express';
import path from 'path';
import sequelize from './../database/connexion-config.js';
import Emprunt from './../model/emprunt.js';
import Compte from './../model/compte.js';
import Livre from './../model/livre.js';
const __dirname = path.resolve()
const router = Router();
;

sequelize.sync().
then(() => console.log("Base de donnees chargee"));

//Envoyer une requete GET que 'index' soit la page par defaut
router.get('/', (req, res) => {
    res.render("index", {layout: 'index'});
});

//Envoyer une requete GET pour naviguer a la page 'index'
router.get('/index', (req, res) => {
    res.render("index", {layout: 'index'});
});

/*
Operations CRUD de 'comptes'
*/
router.route('/comptes') 
    //Requete GET pour rediriger vers la page html 'comptes'
    .get((req, res) => {
        res.render("comptes", {layout: 'index'});
    })
    //Requete POST pour enregister un nouveau compte
    .post( async (req, res) => {
        await Compte.create(req.body);
        res.send('le compte a ete sauvegarde');
    })
    
router.route('/comptes/:id')
    //Envoyer une requete PUT pour modifier un compte avec id
    /*.put('/comptes/:id', async (req, res) => {
    const requestedId = req.params.id;
    const compte = await Compte.findOne({ where: {id : requestedId}})
    compte = req.body;
    await compte.save();
    res.send('Le compte a ete mis a jour')
})
    //Envoyer une requete DELETE pour supprimer un compte avec id
    .delete('/comptes/:id', (req, res) => {
        res.send('Le compte a ete supprimer')
    })
    //Envoyer une requete GET pour avoir un compte avec id
    .get('/comptes/:id', async (req, res) => {
    const requestedId = req.params.id;
    const compte = await Compte.findOne({ where: {id : requestedId}})
    res.send(compte);
})*/;

/*
Operations CRUD de 'emprunts'
*/
router.route('/emprunts') 
    //Requete GET pour rediriger vers la page html 'emprunts'
    .get((req, res) => {
        res.render("emprunts", {layout: 'index'});
    })
    //Requete POST pour enregister un nouveau compte
    .post( async (req, res) => {
        await Emprunt.create(req.body);
        res.send("l'emprunt a ete sauvegarde");
    })
    
router.route('/emprunts/:id')
    //Envoyer une requete PUT pour modifier un emprunt avec id
   /* .put('/emprunts/:id', async (req, res) => {
    const requestedId = req.params.id;
    const emprunt = await Emprunt.findOne({ where: {id : requestedId}})
    compte = req.body;
    await emprunt.save();
    res.send("L'emprunt a ete mis a jour")
})
    //Envoyer une requete DELETE pour supprimer un emprunt avec id
    .delete('/emprunts/:id', (req, res) => {
        res.send("L'emprunt a ete supprimer")
    })
    //Envoyer une requete GET pour avoir un emprunt avec id
    .get('/emprunts/:id', async (req, res) => {
    const requestedId = req.params.id;
    const emprunt = await Emprunt.findOne({ where: {id : requestedId}})
    res.send(emprunt);
})*/;

/*
Operations CRUD de 'livres'
*/
router.route('/livres') 
    //Requete GET pour rediriger vers la page html 'livres'
    .get((req, res) => {
        res.render("livres", {layout: 'index'});
    })
    //Requete POST pour enregister un nouveau livre
    .post( async (req, res) => {
        await Livre.create(req.body);
        res.send('le livre a ete sauvegarde');
    })
    
router.route('/livres/:id')
    //Envoyer une requete PUT pour modifier un livre avec id
    /*.put('/livres/:id', async (req, res) => {
    const requestedId = req.params.id;
    const compte = await Compte.findOne({ where: {id : requestedId}})
    compte = req.body;
    await compte.save();
    res.send('Le livre a ete mis a jour')
})
    //Envoyer une requete DELETE pour supprimer un livre avec id
    .delete('/livres/:id', (req, res) => {
        res.send('Le livre a ete supprimer')
    })
    //Envoyer une requete GET pour avoir un livre avec id
    .get('/livres/:id', async (req, res) => {
    const requestedId = req.params.id;
    const Livre = await Livre.findOne({ where: {id : requestedId}})
    res.send(livre);
})*/;

router.route('/contact') 
    //Requete GET pour rediriger vers la page html 'livres'
    .get((req, res) => {
        res.render("contact", {layout: 'index'});
    })

    router.route('/login') 
    //Requete GET pour rediriger vers la page html 'livres'
    .get((req, res) => {
        res.render("login", {layout: 'index'});
    })

export default router;
