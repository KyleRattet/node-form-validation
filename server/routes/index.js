var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Add A Puppy' });
});

router.post('/puppy/new', function(req, res, next) {
  res.render('puppynew', { title: 'Add A Puppy' });
});





module.exports = router;
