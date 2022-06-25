const {Model, DataTypes} = require('sequelize');

const NAVE_MODEL = 'neves_sonda';

const NaveSonda_Schema = {

    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    nameS: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    earthDistance: {
        type: DataTypes.STRING,
        allowNull: false,
    }

}

class NaveSonda extends Model{

    static associate() {
        //associaciones
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: NAVE_MODEL,
            modelName: 'NaveSonda',
            timestamps: false
        }
    }
}
module.exports = {
    NaveSonda,
    NaveSonda_Schema,
    NAVE_MODEL
}