var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/sedareports', function(req, res, next) {
    res.render('sedareports', { title: 'Seda Raporlar' });
});

router.post('/setlocalparams', function(req, res, next) {
    req.app.locals.startDate = req.body.startDate;
    req.app.locals.endDate = req.body.endDate;
    req.app.locals.selectedMark = req.body.selectedMark;
    res.render('sedareports', { title: 'Seda Raporlar' });
});

module.exports = router;