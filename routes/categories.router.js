const express = require('express')

const CategoryServices = require('./../services/categories.service')
const router = express.Router()
const services = new CategoryServices
const validatorHandler = require('./../middleware/validator.handler')
const {createDepartamentSchema,updateDepartamentSchema,getDepartamentSchema} = require('./../schema/category.schema')

router.get('/',async (req,res,next)=>{

  try {
    const {size} = req.query
    const categories = await services.find(size)
    res.json(categories);

  } catch (error) {
    next(error)
  }



})
router.get('/:id',
validatorHandler(getDepartamentSchema,'params'),
async (req,res,next)=>{

  try {
    const {id} = req.params
    const category = await services.findOne(id)
    res.json(category)

  } catch (error) {
      next(error)
  }
})

router.post('/',
validatorHandler(createDepartamentSchema,'body')
,async (req,res,next)=>{

  try {
    const body = req.body
    const category =  await services.create(body)
    res.json(category)

  } catch (error) {
    next(error)
  }
})
router.put('/:id',

validatorHandler(getDepartamentSchema,'params'),
validatorHandler(updateDepartamentSchema,'body')
,async (req,res,next)=>{
  try {
    const {id} = req.params
    const body = req.body
    const category = await services.update(id,body)
    res.json(category)

  } catch (error) {
    next(error)
  }
})

router.patch('/:id',

validatorHandler(getDepartamentSchema,'params'),
validatorHandler(updateDepartamentSchema,'body')
,async (req,res,next)=>{
  try {
    const {id} = req.params
    const body = req.body
    const category = await services.update(id,body)
    res.json(category)

  } catch (error) {
    next(error)
  }
})

router.delete('/:id',
validatorHandler(getDepartamentSchema,'params')
,async (req,res,next)=>{
  try {
    const {id} = req.params
    const category =await services.delete(id)
    res.json(category)

  } catch (error) {
    next(error)
  }
})

router.get('/categories/:categoryId/products/:productId',async (req,res,next)=>{

  try {
    const {categoryId,productId} = req.params
    res.json({
      category : "Home Products",
      categoryId,
      productId,
      name : "licuadora",
      price: 35
    })

  } catch (error) {
    next(error)
  }


  })


module.exports = router
