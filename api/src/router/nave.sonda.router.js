const express = require('express');
const NaveSondaService = require('../services/nave.sonda.service');
const router = express();

const serviceSonda = new NaveSondaService();

router.post('/', async(req,res)=> {
    try {
        const body = req.body
        res.status(201).json(await serviceSonda.create(body))
    }catch (e){
        console.error(e)
    }
})

module.exports = router;