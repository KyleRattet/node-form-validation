var express = require('express');
var router = express.Router();

var puppyArray = [];
var peopleArray = [];
// var idArray = [];

//on submit, route to puppynew or personnew form
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Add A Puppy' });
});


/////////////
/// puppy ///
/////////////

//create new puppy form, take input and render to puppy table
router.post('/puppy/new', function(req, res, next) {
  res.render('puppynew', { title: 'Add A Puppy' });

  // console.log(req.body);
  // puppyArray.push(req.body.name);
  // idArray.push(req.body.id);
});

//puppy list of all puppies
router.post('/puppies', function(req, res, next) {

  var errors = puppyValidationCheck(req.body.name, req.body.id);

  //push form data into arrays to display

  if (errors.length > 0) {

    res.render('puppynew', {
      title: 'Add A Puppy',
      errors : errors
    });

  } else {
  puppyArray.push(req.body);
  // idArray.push(req.body.id);
  console.log(puppyArray);
  // console.log(idArray);

  //render puppies html
  res.render('puppies', {
    title: 'Showing Puppies',
    success: "The puppy was saved successfully.",
    puppyArray: puppyArray,
    // idArray: idArray
  });

 }

});


//////////////
/// person ///
//////////////

//create new person form, take input and render to people table
router.post('/people/new', function(req, res, next) {

  res.render('personnew', { title: 'Add A Person' });
  // console.log(req.body);
  // puppyArray.push(req.body.name);
  // idArray.push(req.body.id);
});

//people list of all people
router.post('/people', function(req, res, next) {


  var errors = puppyValidationCheck(req.body.name, req.body.hobby);
  if (errors.length > 0) {

    res.render('personnew', {
      title: 'Add A Person',
      errors : errors
    });

  } else {
  //push form data into arrays to display
  peopleArray.push(req.body);
  // idArray.push(req.body.id);
  console.log(peopleArray);
  // console.log(idArray);

  //render people html
  res.render('people', {
    title: 'Showing People',
    peopleArray: peopleArray,
    success: "The person was saved successfully.",
    // idArray: idArray
  });

  }

});

//add puppy validation check function, check to see if array is full,

function puppyValidationCheck(puppyName, puppyID) {

  var errorArray = [];
  var puppyNameTrimmed = puppyName.trim();
  var puppyIDTrimmed = puppyID.trim();

//puppy name validations
  if (puppyNameTrimmed === '') {
    errorArray.push("Name cannot be blank.");
  }

//puppy ID validations
  if (puppyIDTrimmed === '') {
    errorArray.push('Tag cannot be blank.');
  } else if (puppyIDTrimmed.length < 3) {
    errorArray.push('A Tag must be at least 3 characters long.');
  }

  return errorArray;

}


module.exports = router;
