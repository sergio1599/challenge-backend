const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World Notes!');
});
module.exports= router; 