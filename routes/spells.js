var express = require('express');
var router = express.Router();

/* GET Spells page. */
router.get('/', function(req, res, next) {
  res.render('spells', { title: 'Search Results: Spells' });
});

module.exports = router;
