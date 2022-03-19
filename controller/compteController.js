import connectionPromise from '../database/connection.js';
import { Compte } from '../model/Compte.js';

/**
 * Retourne une liste de tous les emprunts
 */
 export const getAllComptes = async () => {
    let connection = await connectionPromise;
    let results = await connection.all('SELECT * FROM Compte');
    return results;
}
