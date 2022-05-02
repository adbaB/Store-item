const { ValidationError } = require("sequelize")

function logErrors(error,req,res,next){
  console.log(error)
  next(error)
}

function errorHandler(error,req,res,next){
  res.status(500).json({
    message: error.message,
    stack: error.stack
  })

}

function boomErrorHandler(error,req,res,next){
  if(error.isBoom){
    const {output} = error
    res.status(output.statusCode).json(output.payload)
  }
  next(error)
}

function queryErrorHandler(err, req, res, next) {
  if (err instanceof ValidationError) {

    res.status(409).json({
    statusCode : 409,
    message: err.parent.name,
    errors: err.parent.detail
    });
  }

  next(err);
}
module.exports = { logErrors,errorHandler,boomErrorHandler,queryErrorHandler}
