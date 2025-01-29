const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes');


const app = express();

nunjucks.configure('src/views', {
  autoescape: true,
  express: app,
  watch: true
});

app.set('view engine', 'njk');

app.use(express.urlencoded({ extended: true }));
app.use(routes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});