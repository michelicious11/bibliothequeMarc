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


/**
 * Creer un nouveau compte
 */
export const createCompte = async (req, res) => {
  try {
    const post = await Compte.create(req.body);
    return res.status(201).json({
      post,
    });
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

/**
 * Trouver un compte avec son id
 */
const getCompteById = async (req, res) => {
    try {
      const { compteId } = req.params;
      const post = await Compte.findOne({
        where: { id: compteId },
        include: [
          {
            model: models.Comment,
            as: 'comments',
            include: [
             {
              model: models.User,
              as: 'author',
             }
            ]
          },
          {
            model: models.User,
            as: 'author'
          }
        ]
      });
      if (post) {
        return res.status(200).json({ post });
      }
      return res.status(404).send('Post with the specified ID does not exists');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

