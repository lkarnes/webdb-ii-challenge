const router = require('express').Router();
const db = require('./data/dbConfig.js');
module.exports = router;

router.get('/', (req, res)=> {
    db('cars').select('*').then(cars => {
        res.status(200).json(cars)
    }).catch(err=> {
        res.status(500).json({error: err})
    });
})

router.post('/', (req, res)=> {
    const body= req.body;
    console.log(body);
    db('cars').insert(body).then(car => {
        res.status(201).json(body)
    }).catch(err => {
        res.status(500).json({error: err})
    })
})