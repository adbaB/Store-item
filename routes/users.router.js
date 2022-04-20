const express = require('express')
const faker = require('faker');
const router = express.Router()

router.get('/', (req,res)=>{
  const {size} = req.query
  const users = []
  const limit = size || 10
  for (let i = 0; i < limit; i++) {
    users.push({
      username: faker.internet.userName(),
      name: faker.name.firstName(),
      lastname : faker.name.lastName(),
     })

  }
  res.json(users);



})
router.get('/:id',(req,res)=>{
  const {id} = req.params

  res.json({

    username: faker.internet.userName(),
    name: faker.name.firstName(),
    lastname : faker.name.lastName(),
    id
  })
})

router.post('/',(req,res)=>{
  const {id,name,lastName,userName} = req.body

  res.json({
    message: "Created",
    data:{
      id,
      name,
      lastName,
      userName
    }
  })
})
router.put('/:id',(req,res)=>{
  const {id} = req.params
  const {name,lastName,userName} = req.body

  res.json({
    message: "Updated",
    data:{
      name,
      lastName,
      userName
    },
    id
  })
})

router.patch('/:id',(req,res)=>{
  const {id} = req.params
  const {name,lastName,userName} = req.body

  res.json({
    message: "Updated",
    data:{
      name,
      lastName,
      userName
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
module.exports = router
