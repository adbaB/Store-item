const express = require('express')

const CategoryServices = require('./../services/categories.service')
const router = express.Router()
const services = new CategoryServices



router.get('/', async (req,res,next)=>{

  try {
    const {size} = req.query
    const categories = await services.find(size)
    res.json(categories);

  } catch (error) {
    next(error)
  }



})
router.get('/:id',async (req,res,next)=>{

  try {
    const {id} = req.params
    const category = await services.findOne(id)
    res.json(category)

  } catch (error) {
      next(error)
  }
})

router.post('/',async (req,res,next)=>{

  try {
    const body = req.body
    const category =  await services.create(body)
    res.json(category)

  } catch (error) {
    next(error)
  }
})
router.put('/:id',async (req,res,next)=>{
  try {
    const {id} = req.params
    const body = req.body
    const category = await services.update(id,body)
    res.json(category)

  } catch (error) {
    next(error)
  }
})

router.patch('/:id',async (req,res,next)=>{
  try {
    const {id} = req.params
    const body = req.body
    const category = await services.update(id,body)
    res.json(category)

  } catch (error) {
    next(error)
  }
})

router.delete('/:id',async (req,res,next)=>{
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
