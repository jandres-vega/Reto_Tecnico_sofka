const express = require('express');
const NaveTripuladaService = require('../services/nave.tripulada.service')
const router = express();

const serviceTripulada = new NaveTripuladaService()

router.post('/', async(req,res)=> {
    try {
        const body = req.body
        res.status(201).json(await serviceTripulada.create(body))
    }catch (e){
        console.error(e)
    }
})

module.exports = router;