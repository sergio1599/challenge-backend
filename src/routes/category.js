const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World Category!');
});
module.exports = router; 