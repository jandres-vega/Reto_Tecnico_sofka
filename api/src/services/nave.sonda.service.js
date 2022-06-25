const { models } = require('../libs/conexion');
const {NaveLanzadera} = require("../db/models/naveLanzadera");

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

    async find() {
        return await models.NaveSonda.findAll({
            include: {
                model:NaveLanzadera
            }
        })
    }

}

module.exports = NaveSondaService;