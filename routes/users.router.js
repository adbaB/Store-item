const express = require('express');
const UserServices = require('./../services/users.service');
const router = express.Router();
const services = new UserServices();

router.get('/', async (req, res, next) => {
  try {
    const { size } = req.query;
    const users =  await services.find(size);
    //console.log(users)
    res.json(users)
  } catch (error) {
    next(error);
  }
});
router.get('/:id', async(req, res, next) => {
  try {
    const { id } = req.params;
    const user =  await services.findOne(id);
    res.status(200).json(user)
  } catch (error) {
    next(error)
  }
});

router.post('/', async(req, res, next) => {
  try {
    const body = req.body;
    const user =  await services.create(body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', async(req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const user = await services.update(id, body);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async(req, res, next) => {
  try {
    const { id } = req.params;
    const user = await services.delete(id);

    res.json(user);
  } catch (error) {
    next();
  }
});
module.exports = router;
