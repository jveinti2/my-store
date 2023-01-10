const express = require('express');
const ProductsServices = require('./../services/product.service');

const router = express.Router();
const service = new ProductsServices();

//Get
router.get('/', function (req, res) {
  const products = service.find();
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
  const product = service.findOne(id);
  res.json(product);
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
  const body = req.body;
  res.status(201).json({
    message: 'Product created',
    data: body,
  });
});

//Patch
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'Product updated',
    data: body,
    id,
  });
});

//Delete
router.delete('/:id', function (req, res) {
  const { id } = req.params;
  res.json({
    message: 'Deleted',
    id,
  });
});

module.exports = router;
