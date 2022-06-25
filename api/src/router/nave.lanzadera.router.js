const express = require('express');
const NaveLanzaderaR = require('../services/nave.lanzadera.service');
const router = express();

const serviceLanzadera = new NaveLanzaderaR();

router.post('/', async(req,res)=> {
    try {
        const body = req.body
        res.status(201).json(await serviceLanzadera.create(body))
    }catch (e){
        console.error(e)
    }
})

router.get('/', async (req, res) => {
    try {
        res.json(await serviceLanzadera.find())
    }catch (e) {
        console.log(e)
    }
})

module.exports = router;