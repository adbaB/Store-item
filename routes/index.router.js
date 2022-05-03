const express = require('express')
const productsRouter = require('./products.router')
const usersRouter = require('./users.router')
const categoriesRouter = require('./categories.router')
const customersRouter = require('./customers.router')
function routerIndex(app){
  const router = express.Router()
  app.use("/api/v1",router)
  router.use("/products",productsRouter)
  router.use("/users",usersRouter)
  router.use("/categories",categoriesRouter)
  router.use("/Customers",customersRouter)
}

module.exports = routerIndex
