const express = require('express');

const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');

const compression = require('compression');
const mongoose = require('mongoose');
const admin = require('./routes/admin');
const patient = require('./routes/patient');
const clerk = require('./routes/clerk');

const port = process.env.PORT || 3000;

const { auth } = require('./middleware/auth');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false})); 

app.use(compression());
app.use(cors());

app.use('/clerk', clerk);
app.use('/patient', patient);
app.use('/Admin', admin);
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: error, data: data });
});

mongoose.connect('mongodb+srv://first:6PhsjC3EuCp4z9oy@cluster0.kb4eg.mongodb.net/clinic?retryWrites=true&w=majority',
  {
    useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true,
  }).then((data) => {
  app.listen(port);
}).catch((err) => {
  console.log(err);
});
