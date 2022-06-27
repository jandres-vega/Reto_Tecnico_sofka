const { models } = require('../libs/conexion');
const {NaveLanzadera} = require("../db/models/naveLanzadera");

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

    async findByName(name) {
        const naveL =  await this.find()
        const nameNave  = naveL.filter(data => data.nameNave === name)
        console.log(nameNave)
        return nameNave

    }

}
module.exports = NaveLanzaderaR;