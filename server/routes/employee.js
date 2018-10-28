var express = require('express');
var router = express.Router();
var Joi = require('joi');
var bodyParser = require('body-parser');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('employee', { title: 'Employee' });
});

module.exports = router;