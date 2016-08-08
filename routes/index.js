var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/registration', function(req, res) {
  //get db
  var db = req.db;
  
  //get form values
  var username = req.body.username;
  var pwd = req.body.pwd;
  var verifyPwd = req.body.verifyPwd;
  var fName = req.body.fName;
  var lName = req.body.lName;
  var email = req.body.email;
  
  //set collection
  var collection = db.get('users');
  
  //send to db
  collection.insert({
    username: username,
    pwd: pwd,
    verifyPwd: verifyPwd,
    fName: fName,
    lName: lName,
    email: email
  }, function(err, doc) {
    if(err){
      //return error
      res.send('Opps...something went wrong adding your account. Please try again :(');
    }else{
     //forward to secuess page
      res.redirect('/');
    }
  });
});

module.exports = router;
