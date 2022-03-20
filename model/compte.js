import { Model, DataTypes } from 'sequelize';
import sequelize from './../database/connexion-config.js';

class Compte extends Model {}

Compte.init({
        prenom: { type: DataTypes.STRING, allowNull: false },
        nom: { type: DataTypes.STRING, allowNull: false },
        mot_de_passe: { type: DataTypes.STRING,allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false},
        adresse: { type: DataTypes.STRING,allowNull: true },
}, {
    sequelize,
    modelName: 'compte'
})

export default Compte