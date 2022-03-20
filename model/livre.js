import { Model, DataTypes } from 'sequelize';
import sequelize from './../database/connexion-config.js';

class Livre extends Model {}
    Livre.init({
        titre: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        auteur: {
            type: DataTypes.STRING,
            allowNull: false
        },
        resume: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        id_emprunt: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
    }, {
        sequelize,
        modelName: 'livre'
    })

    export default Livre