const router = require('express').Router();


router.get('/', (req, res) => {
    res.render('mytasks')
})

module.exports = router;