const express = require('express')
const NaveSteliteService = require('../services/nave.satelite.service')

const router = express();

const serviceSatelite = new NaveSteliteService();


router.get('/',async (req, res) => {
    try{
        res.json(await serviceSatelite.find())
    }catch (e) {
        console.error(e)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const naveId = await serviceSatelite.findOne(id)
        res.status(200).send(naveId)
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