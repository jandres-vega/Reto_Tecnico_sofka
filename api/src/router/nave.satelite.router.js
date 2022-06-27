const express = require('express')
const NaveSteliteService = require('../services/nave.satelite.service')

const router = express();

const serviceSatelite = new NaveSteliteService();

router.get('/',async (req, res) => {
    const name = req.query.name;
    try {
        if (name) {
            const nameNave = await serviceSatelite.findByName(name)
            res.status(200).json(nameNave)

        }else {
            const naveSatelite = await serviceSatelite.find();
            res.status(200).send(naveSatelite)
        }
    }catch (e) {
        console.error(e)
    }

})
router.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const naveEliminada = await serviceSatelite.delete(id) ;
        res.status(200).send(naveEliminada)
    }catch (e) {
        console.error(e)
    }
})



router.post('/', async(req,res)=> {
    try {
        const body = req.body
        res.status(201).json(await serviceSatelite.create(body))
    }catch (e){
        console.error(e)
    }
})



module.exports = router;