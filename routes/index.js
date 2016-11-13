var express =   require('express');
var router =    express.Router();
var config =    require('../config');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'one-trick-pony',
    webPort: config.webDefaultPort,
    dnsPort: config.dnsPort,
    dnsAddr: config.dnsAddr });
});

module.exports = router;
