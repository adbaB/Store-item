const joi = require('joi')


const id = joi.string().uuid()
const departament = joi.string().min(4).max(50)

const createDepartamentSchema = joi.object({
  departament :departament.required()
})

const updateDepartamentSchema = joi.object({
  departament :departament
})

const getDepartamentSchema = joi.object({
  id : id.required()
})

module.exports = {createDepartamentSchema,updateDepartamentSchema,getDepartamentSchema}
