const express = require('express')

const router = express.Router()


router.get('/categories/:categoryId/products/:productId',(req,res)=>{
  const {categoryId,productId} = req.params

  res.json({
    category : "Home Products",
    categoryId,
    productId,
    name : "licuadora",
    price: 35
  })

  })


module.exports = router
