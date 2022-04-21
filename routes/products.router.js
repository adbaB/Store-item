const express = require('express');
const ProductsService = require('./../services/product.service');
const validatorHandler = require('./../middleware/validator.handler');
const {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
} = require('./../schema/product.schema');

const router = express.Router();
const service = new ProductsService();

router.get('/', async (req, res) => {
  const { size } = req.query;
  const products = await service.find(size);
  res.json(products);
});
router.get('/filter', async (req, res) => {
  res.send('i am filter');
});
router.get(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);

      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }
);
router.post('/',
validatorHandler(createProductSchema, 'body'),
async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json({
    message: 'created',
    data: newProduct,
  });
});
router.patch('/:id',
validatorHandler(getProductSchema, 'params'),
validatorHandler(updateProductSchema, 'body'),
async (req, res, next) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const product = await service.update(id, body);
    res.json({
      message: 'Updated',
      data: product,
    });
  } catch (error) {
    next(error);
  }
});
router.delete('/:id',
validatorHandler(getProductSchema, 'params'),
async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.delete(id);
    res.json(product);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
