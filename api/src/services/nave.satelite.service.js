const { models } = require('../libs/conexion');
const {NaveLanzadera} = require("../db/models/naveLanzadera");

class NaveSteliteService {

    constructor() {}

    async create(data) {
        const {
            nameNave,
            weight,
            cap_combustible,
            speed_max,
            push,
            type,
            nameSatelite,
            locationEart,
            typeLanding
        } = data
        const newNaveL = await models.NaveLanzadera.create({
            nameNave,
            weight,
            cap_combustible,
            speed_max,
            push,
            type,
        })
        const newNaveS = await models.NaveSatelite.create({
            nameSatelite,
            locationEart,
            typeLanding
        })
        return await newNaveL.setNaveSatelite(newNaveS);
    }

    async find() {
        return await models.NaveSatelite.findAll({
            include: {
                model: NaveLanzadera
            }
        })
    }

    async findOne(id) {
        const intId = parseInt(id);
        return (await this.find()).filter(data => data.id === intId);
    }

    async findByName(name) {
        const naveSatelites = await this.find()
        return naveSatelites.filter(data => data.nameSatelite === name);
    }

    async delete(id) {
        const intId = parseInt(id);
        await models.NaveSatelite.destroy({
            where: {
                'id': intId
            }
        })
    }
    
}

module.exports = NaveSteliteService;