const express = require('express');
const NaveLanzaderaR = require('../services/nave.lanzadera.service');

const router = express();

const serviceLanzadera = new NaveLanzaderaR();


router.get('/', async (req, res) => {

    const name = req.query.name;
    try {
        if (name){
            const nameNave = await serviceLanzadera.findByName(name);
            res.status(200).send(nameNave)
        }else {
            res.json(await serviceLanzadera.find())
        }
    }catch (e) {
        console.log(e)
    }
})
router.post('/', async(req,res)=> {
    try {
        const body = req.body
        res.status(201).json(await serviceLanzadera.create(body))
    }catch (e){
        console.error(e)
    }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    console.log(id)
})

module.exports = router;