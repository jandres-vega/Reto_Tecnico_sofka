const { models } = require('../libs/conexion');
const {NaveSatelite} = require("../db/models/naveSatelite");

class NaveSondaService {

    constructor() {}
    async create(data) {
        const {
            nameNave,
            weight,
            cap_combustible,
            speed_max,
            push,
            type,
            nameS,
            location,
            earthDistance
        } = data
        const newNaveL = await models.NaveLanzadera.create({
            nameNave,
            weight,
            cap_combustible,
            speed_max,
            push,
            type,
        })
        const newNaveS = await models.NaveSonda.create({
            nameS,
            location,
            earthDistance
        })
        return await newNaveL.setNaveSonda(newNaveS);

    }

}

module.exports = NaveSondaService;