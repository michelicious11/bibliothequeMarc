import connectionPromise from '../database/connection.js';
import { Livre } from '../model/livre.js';
import { Compte } from '../model/Compte.js';


/**
 * Retourne une liste de tous les emprunts
 */
 export const getAllEmprunts = async () => {
    let connection = await connectionPromise;
    let results = await connection.all('SELECT * FROM Emprunt');
    return results;
}

/**
 * Ajouter un emprunt dans la base de données.
 */
export const addEmprunt = async () => {
    let connection = await connectionPromise;

    // Crée le nouvelle emprunt.
    let result = await connection.run(
        `INSERT INTO emprunt(id_utilisateur, id_etat_emprunt, date)
        VALUES(1, 1, ?)`,
        [Date.now()]
    );

    // Copie tous les éléments du panier dans la emprunt.
    // Essentiellement, on insère chaque élément du panier dans une 
    // emprunt_produit associé à la emprunt précédemment créé.
    await connection.run(
        `INSERT INTO emprunt_produit(id_emprunt, id_produit, quantite)
        SELECT ?, id_produit, quantite FROM panier`,
        [result.lastID]
    );

    // Vide le panier.
    await emptyPanier();
}

/**
 * Modifie l'état d'une emprunt dans la base de données.
 * @param {Number} idemprunt Identifiant de la emprunt à modifier.
 * @param {Number} idEtat Nouvel identifiant de l'état de la emprunt.
 */
export const modifyEtatemprunt = async (idemprunt, idEtat) => {
    let connection = await connectionPromise;

    await connection.run(
        'UPDATE emprunt SET id_etat_emprunt = ? WHERE id_emprunt = ?',
        [idEtat, idemprunt]
    )
}



/**
 * Retourne une liste de toutes les emprunts
 * dans la base de données.
 */
 export const getAllEmprunts = async () => {
    let connection = await connectionPromise; 
    // Recherche de tous les emprunts
    let results = await connection.all(
        `SELECT * FROM Emprunt`
    );
    //liste vide pour les resultats
    let emprunts = [];
    //loop pour remplir la liste
    for (const row of results) {
        emprunts.push({
            id_emprunt: row.id_emprunt,
            id_livre: row.id_livre,
            id_compte: row.id_compte,
            date_emprunt: row.date_emprunt,
            date_retour: row.date_retour,
        });
    }
    return emprunts;
}