const {Model, DataTypes} = require('sequelize');

const NAVE_MODEL = 'neves_tripulada';

const NaveTripulada_Schema = {
    id:{
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    nameT: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numberCrew: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    purposeNave: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}

class NaveTripulada extends Model{

    static associate() {
        //associaciones
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: NAVE_MODEL,
            modelName: 'NaveTripulada',
            timestamps: false
        }
    }
}

module.exports = {
    NAVE_MODEL,
    NaveTripulada,
    NaveTripulada_Schema
}