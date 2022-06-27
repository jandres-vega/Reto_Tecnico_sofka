const express = require('express');
const NaveSondaService = require('../services/nave.sonda.service');
const router = express();

const serviceSonda = new NaveSondaService();

router.get('/',async (req,res) => {
    const {name} = req.query
    try {
        if (name) {
            const nameNave = await serviceSonda.findByName(name);
            res.status(200).send(nameNave)
        }else {
            const naveSatelite = await serviceSonda.find();
            res.status(200).send(naveSatelite)
        }
    }catch (e) {
        console.error(e)
    }
})

router.post('/', async(req,res)=> {
    try {
        const body = req.body
        res.status(201).json(await serviceSonda.create(body))
    }catch (e){
        console.error(e)
    }
})

module.exports = router;