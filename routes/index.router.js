const productsRouter = require('./products.router')
const usersRouter = require('./users.router')
const categoriesRouter = require('./categories.router')
function routerIndex(app){
  app.use("/products",productsRouter)
  app.use("/users",usersRouter)
  app.use("/categories",categoriesRouter)
}

module.exports = routerIndex
