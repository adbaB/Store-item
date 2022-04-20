const express = require('express')
const faker = require('faker');
const router = express.Router()



router.get('/', (req,res)=>{
  const {size} = req.query
  const categories = []
  const limit = size || 10
  for (let i = 0; i < limit; i++) {
    categories.push({
      department: faker.commerce.department(),
      id: faker.datatype.uuid(),

     })

  }
  res.json(categories);



})
router.get('/:id',(req,res)=>{
  const {id} = req.params

  res.json({

    department: faker.commerce.department(),
    id: faker.datatype.uuid()
  })
})

router.post('/',(req,res)=>{
  const {id,department} = req.body

  res.json({
    message: "Created",
    data:{
      id,
      department
    }
  })
})
router.put('/:id',(req,res)=>{
  const {id} = req.params
  const {department} = req.body

  res.json({
    message: "Updated",
    data:{
      department
    },
    id
  })
})

router.patch('/:id',(req,res)=>{
  const {id} = req.params
  const {department} = req.body

  res.json({
    message: "Updated",
    data:{
      department
    },
    id
  })
})

router.delete('/:id',(req,res)=>{
  const {id} = req.params


  res.json({
    message: "Deleted",
    id
  })
})

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
