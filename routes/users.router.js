const express = require('express')

const router = express.Router()

router.get("/user", (req,res)=>{
  const {limit,offset} = req.query
  if(limit && offset){
    res.json({
      limit,
      offset
    })
  }else {
    res.send('no hay parametros')
  }

})

module.exports = router
