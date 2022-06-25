const { models } = require('../libs/conexion');
const {NaveLanzadera} = require("../db/models/naveLanzadera");

class NaveTripuladaService {

    constructor() {}

    async create(data) {
        const {
            nameNave,
            weight,
            cap_combustible,
            speed_max,
            push,
            type,
            nameT,
            numberCrew,
            purposeNave,
        } = data
        const newNaveL = await models.NaveLanzadera.create({
            nameNave,
            weight,
            cap_combustible,
            speed_max,
            push,
            type,
        })
        const newNaveS = await models.NaveTripulada.create({
            nameT,
            numberCrew,
            purposeNave,
        })
        return await newNaveL.setNaveTripulada(newNaveS);

    }

    async find() {
        return await models.NaveTripulada.findAll({
            include: {
                model: NaveLanzadera
            }
        })
    }

}

module.exports = NaveTripuladaService;