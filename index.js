const express = require('express');
const routerApi = require('./routes');

const { logErrors, errorHandler } = require('./middlewares/error.handler');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', function (req, res) {
  res.send('Home Page');
});

routerApi(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
