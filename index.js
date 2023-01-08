const faker = require('faker');

const express = require('express');
const app = express();
const port = 3000;

app.get('/', function (req, res) {
  res.send('Home Page');
});

app.get('/products', function (req, res) {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10), // parse con base 10
      image: faker.image.imageUrl(),
    });
  }

  res.send(products);
});

app.get('/prodcuts/details', function (req, res) {
  res.json([
    {
      name: 'Product 1',
    },
    {
      name: 'Product 2',
    },
  ]);
});


app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product quemado',
    price: 'Precio quemado',
  });
});

app.get('/category/:idCategory/products/:idProducts', (req, res) => {
  const { idCategory, idProducts } = req.params;
  res.json({
    idCategory,
    idProducts,
    name: 'Product quemado',
    price: 'Precio quemado',
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
