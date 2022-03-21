import { Model, DataTypes } from 'sequelize';
import sequelize from './../database/connexion-config.js';

class Compte extends Model {}

Compte.init({
        prenom: { type: DataTypes.STRING },
        nom: { type: DataTypes.STRING },
        mot_de_passe: { type: DataTypes.STRING },
        email: { type: DataTypes.STRING },
        adresse: { type: DataTypes.STRING },
}, {
    sequelize,
    modelName: 'compte'
})

export default Compte