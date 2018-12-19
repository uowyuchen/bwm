const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');

mongoose.connect(config.DB_URI,{ useNewUrlParser: true })

const app = express();
// process.env.port is server side setup
const PORT = process.env.PORT || 3000;

app.get('/rentals', function (req, res) {
  res.json({'success': true});
});

app.listen(PORT, function () {
  console.log('I am running');
});
