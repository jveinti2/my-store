const faker = require('faker');
const express = require('express');

const router = express.Router();
//Get
router.get('/', function (req, res) {
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

router.get('/prodcuts/details', function (req, res) {
  res.json([
    {
      name: 'Product 1',
    },
    {
      name: 'Product 2',
    },
  ]);
});


router.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product quemado',
    price: 'Precio quemado',
  });
});

router.get('/category/:idCategory/products/:idProducts', (req, res) => {
  const { idCategory, idProducts } = req.params;
  res.json({
    idCategory,
    idProducts,
    name: 'Product quemado',
    price: 'Precio quemado',
  });
});

//Post
router.post('/', function (req, res) {
  const body = req.body
  res.json({
    message: 'Product created',
    data: body
  })
})

module.exports = router;