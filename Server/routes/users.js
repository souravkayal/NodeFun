var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/all_users', function(req,res){
  var data = [{'name':'Sourav'}];
  res.json(data);

});

router.get('/about', function(req,res){
  res.render('users', { title: 'This is user page..' });
});

module.exports = router;
