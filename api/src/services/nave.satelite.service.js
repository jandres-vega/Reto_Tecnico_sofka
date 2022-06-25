const { models } = require('../libs/conexion');
const {NaveSatelite} = require("../db/models/naveSatelite");
const {where} = require("sequelize");
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
            location,
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
            location,
            typeLanding
        })
        return await newNaveL.setNaveSatelite(newNaveS);
    }

    async find() {
        const attributes = ['id','nameSatelite','location','typeLanding'];
        return await models.NaveLanzadera.findAll({
            include: {
                model: NaveSatelite,
                attributes: attributes
            }
        });
    }
    async findOne(id) {
        const intId = parseInt(id);
        return (await this.find()).filter(data => data.id === intId);
    }
    delete(id) {

    }
    
}

module.exports = NaveSteliteService;