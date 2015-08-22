var express = require('express');
var router = express.Router();

var puppyArray = [];
// var idArray = [];

//on submit, route to puppynew form
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Add A Puppy' });
});

//create new puppy form, take input and render to puppy table
router.post('/puppy/new', function(req, res, next) {
  res.render('puppynew', { title: 'Add A Puppy' });
  // console.log(req.body);
  // puppyArray.push(req.body.name);
  // idArray.push(req.body.id);
});

//puppy table of all puppies
router.post('/puppies', function(req, res, next) {
  //push form data into arrays to display
  puppyArray.push(req.body);
  // idArray.push(req.body.id);
  console.log(puppyArray);
  // console.log(idArray);

  //render puppies html
  res.render('puppies', {
    title: 'Showing Puppies',
    puppyArray: puppyArray,
    // idArray: idArray
  });

});









module.exports = router;
