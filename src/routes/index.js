const express   = require('express');
const routes      = express.Router();

routes.get('/', (req, res) => {
  return res.render('layout', {
    title: 'Home',
    message: 'Hello World',
    users: ["Alice", "Bob", "Carol", "Dan"]
  });
});

module.exports = routes;