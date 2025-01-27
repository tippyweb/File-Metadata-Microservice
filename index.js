/**
 * ####################################################
 *    File Metadata Microservice - 2024-10-11
 * ####################################################
 */

var express = require('express');
var cors = require('cors');
require('dotenv').config();

// adding multer for file uploading
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});


app.post('/api/fileanalyse', upload.single('upfile'), (req, res, next) => {

  const responseObject = {
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  };
  res.json(responseObject);

});


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
