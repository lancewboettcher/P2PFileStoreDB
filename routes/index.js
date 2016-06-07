var express = require('express');
var router = express.Router();

var db = require('../config/DB');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/addFile', function(req, res, next) {
  var file = db.addFile(req.body.filename, req.body.size, req.body.blocks, req.body.hosts[0]);

  res.send(file);
});

router.get('/listFiles', function(req, res, next) {
  res.send(db.listFiles());
});

router.get('/getFile/:filename', function(req, res, next) {
  res.send(db.getFile(req.params.filename));
});

router.post('/removeFile', function(req, res, next) {
  db.removeFile(req.body.filename, req.body.host);

  res.send("Success");
});

router.get('/removeAll', function(req, res, next) {
  db.removeAllFiles();

  res.send("Success");
});

module.exports = router;
