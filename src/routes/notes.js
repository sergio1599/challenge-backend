const {Router} = require('express');
const router = Router();
const connection = require('../database/databaseConnection');

router.get('/', (req, res) => {
    res.send('Hello World notes!');
});
module.exports= router; 