const { Router } = require('express');
const router = Router();
router.get('/', (req, res) => {
    res.send('Hello World Auth!');
});
module.exports = router; 