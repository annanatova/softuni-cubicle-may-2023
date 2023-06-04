const router = require('express').Router();

router.get('/create', (req, res) => {
    res.render('accessory/create');
});

router.post('/create', (req, res) => {
    const body = req.body;
    // TODO: Add accessory data to database
    res.redirect('/')
});

module.exports = router;