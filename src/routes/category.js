const { Router } = require('express');
const router = Router();
const connection = require('../database/databaseConnection');

router.get('/', (req, res) => {
    res.send('Hello World Category!');
});
module.exports = router; 