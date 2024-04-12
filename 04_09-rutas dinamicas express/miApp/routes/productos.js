var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('productos', { title: 'Express' });
});

router.get('/:nombreProducto', function(req, res, next) {
  res.render('producto', { producto: req.params.nombreProducto });
});



module.exports = router;
