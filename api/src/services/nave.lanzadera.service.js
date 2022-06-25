const { models } = require('../libs/conexion');
//const {NaveLanzadera} = require("../db/models/naveLanzadera");
const {NaveSatelite} = require("../db/models/naveSatelite");
const {NaveTripulada} = require("../db/models/naveTripulada");
const {NaveSonda} = require("../db/models/naveSonda");

class NaveLanzaderaR {

    constructor(){}

    async create(data){
        const {
            nameNave,
            weight,
            cap_combustible,
            speed_max,
            push,
            type,
        } = data

        return await models.NaveLanzadera.create({
            nameNave,
            weight,
            cap_combustible,
            speed_max,
            push,
            type,
        })

    }

    async find() {
        // const attributes1 = ['id','nameSatelite','locationEart','typeLanding'];
        // const attributes2 = ['id','nameT','numberCrew','purposeNave'];
        // const attributes3 = ['id','nameS','location','earthDistance'];
        return await models.NaveLanzadera.findAll()

    }
}
module.exports = NaveLanzaderaR;