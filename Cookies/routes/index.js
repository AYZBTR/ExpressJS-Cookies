var express = require('express');
var router = express.Router();

//Creating a Cookies
router.get('/', function(req, res) {
  res.cookie("age",25);
  res.render('index');
});

//Reading Cookies
router.get('/readCookies', function(req, res){
  console.log(req.cookies.age);
  res.send("check")
});


//deleting cookies
router.get('/deleteCookies', function(req, res){
  res.clearCookie("age");
  res.send("Clear done")
});

module.exports = router;
