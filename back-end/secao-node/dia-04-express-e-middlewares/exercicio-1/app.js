const express = require('express');
const validateName = require('./middlewares/validateName');
const validatePrice = require('./middlewares/validatePrice');

const app = express();

app.use(express.json());

app.post('/activities', validateName, validatePrice, (_req, res) =>  {
  res.status(201).json({ message: 'Atividade registrada com sucesso!' })

})

module.exports = app;