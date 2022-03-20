import { Model, DataTypes } from 'sequelize';
import sequelize from './../database/connexion-config.js';

class Emprunt extends Model {}
    Emprunt.init({
        compte: { type: DataTypes.INTEGER, allowNull: false },
        date_emprunt: { type: DataTypes.DATE, allowNull: false },
        date_retour: { type: DataTypes.DATE, allowNull: false },
    }, {
        sequelize,
        modelName: 'emprunt'
    })

export default Emprunt
