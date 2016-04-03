var express = require('express');
var router = express.Router();

var multer = require('multer')
var upload = multer()


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

router.post('/api/upload', upload.single('file'), function(req, res) {
    res.send('File size : '+req.file.size)
})

module.exports = router;
