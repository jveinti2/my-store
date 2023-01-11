const { response } = require('express');
const express = require('express');
const ProductsServices = require('./../services/product.service');

const router = express.Router();
const service = new ProductsServices();

//Get
router.get('/', async function (req, res) {
  const products = await service.find();
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

router.get('/products/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
    next(error);
  }
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
router.post('/', async function (req, res) {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json({
    message: 'Product created',
    newProduct,
  });
});

//Patch
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const newProduct = await service.update(id, body);
    res.json({
      message: 'Product updated',
      newProduct,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

//Delete
router.delete('/:id', async function (req, res) {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta);
});

module.exports = router;
