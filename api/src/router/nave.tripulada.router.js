const express = require('express');
const NaveTripuladaService = require('../services/nave.tripulada.service')
const router = express();

const serviceTripulada = new NaveTripuladaService()

router.get('/', async (req, res) => {

    try {
        const naveTripulante = await serviceTripulada.find();
        res.status(200).send(naveTripulante)
    }catch (e) {
        console.error(e)
    }
})


router.post('/', async(req,res)=> {
    try {
        const body = req.body
        res.status(201).json(await serviceTripulada.create(body))
    }catch (e){
        console.error(e)
    }
})

module.exports = router;