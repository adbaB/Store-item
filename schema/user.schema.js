const joi = require('joi')

const id = joi.number()
const name = joi.string().min(5).max(10)
const lastName = joi.string().min(5).max(50)
const userName = joi.string().min(3).max(15)
const password = joi.string()
const email = joi.string().email()

const createUsersSchema = joi.object({
  name: name.required(),
  lastName:lastName.required(),
  userName: userName.required(),
  password: password.required(),
  email: email.required()


})

const updateUsersSchema = joi.object({
  name: name,
  lastName:lastName,
  userName: userName,
  password: password,
  email: email

})

const getUsersSchema = joi.object({
  id : id
})

module.exports = {createUsersSchema,updateUsersSchema,getUsersSchema}
