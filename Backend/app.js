require('dotenv').config();

const express = require('express');

const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://'+ process.env.MONGO_USER + ':' + process.env.MONGO_PASSWORD + '@cluster-mongo.p6pbiro.mongodb.net/library?retryWrites=true&w=majority');

const morgan = require('morgan');
app.use(morgan('combined'));

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const userRoutes = require('./api/routes/users');
app.use('/users', userRoutes);

const starRoutes = require('./api/routes/stars');
app.use('/stars', starRoutes);

app.use((req, res, next) => {
  res.status(404).json({ wiadomosc: 'Not found ' });
});

module.exports = app;
