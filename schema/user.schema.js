const joi = require('joi')

const id = joi.string().uuid()
const name = joi.string().min(5).max(10)
const lastName = joi.string().min(5).max(50)
const userName = joi.string().min(3).max(15)
const password = joi.string()
const isEditable = joi.boolean().default(true)

const createUsersSchema = joi.object({
  name: name.required(),
  lastName:lastName.required(),
  userName: userName.required(),
  password: password.required(),
  isEditable: isEditable

})

const updateUsersSchema = joi.object({
  name: name,
  lastName:lastName,
  userName: userName,
  password: password,
  isEditable: isEditable
})

const getUsersSchema = joi.object({
  id : id
})

module.exports = {createUsersSchema,updateUsersSchema,getUsersSchema}
