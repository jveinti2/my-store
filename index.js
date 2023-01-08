const express = require('express');
const routerApi = require('./routes');


const app = express();
const port = 3000;

app.use(express.json())

app.get('/', function (req, res) {
  res.send('Home Page')
});

routerApi(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
