var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/sedareports', function(req, res, next) {
    res.render('sedareports', { title: 'Seda Raporlar' });
});

module.exports = router;