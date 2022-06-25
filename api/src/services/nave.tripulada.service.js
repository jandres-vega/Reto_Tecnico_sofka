const { models } = require('../libs/conexion');
const {NaveSatelite} = require("../db/models/naveSatelite");

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

}

module.exports = NaveTripuladaService;