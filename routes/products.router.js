const express = require('express');
const ProductsService = require('./../services/product.service');
const router = express.Router();
const service = new ProductsService();
router.get('/', async(req, res) => {
  const { size } = req.query;
  const products =  await service.find(size);
  res.json(products);
});
router.get('/filter', async(req, res) => {
  res.send('i am filter');
});
router.get('/:id', async(req, res) => {
  const { id } = req.params;
  const product =  await service.findOne(id);
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({
      message: 'product not found',
      data: {},
    });
  }
});
router.post('/', async(req, res) => {
  const body = req.body;
  const newProduct =  await service.create(body);
  res.status(201).json({
    message: 'created',
    data: newProduct,
  });
});
router.patch('/:id', async(req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const product = await service.update(id, body);
  res.json({
    message: 'Updated',
    data: product,
  });
  } catch (error) {
    res.status(404).json({
      message: error.message

    });
  }


});
router.delete('/:id', async(req, res) => {
  const { id } = req.params;
  const product = await service.delete(id);
  res.json(product);
});
module.exports = router;
