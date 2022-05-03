const joi = require('joi')

const id = joi.number()
const name = joi.string().min(4)
const lastName = joi.string().min(2)
const userName = joi.string().min(3).max(30)
const password = joi.string()
const email = joi.string().email()
const role = joi.string().min(5)

const createUsersSchema = joi.object({
  name: name.required(),
  lastName:lastName.required(),
  userName: userName.required(),
  password: password.required(),
  email: email.required(),
  role


})

const updateUsersSchema = joi.object({
  name: name,
  lastName:lastName,
  userName: userName,
  password: password,
  email: email,
  role

})

const getUsersSchema = joi.object({
  id : id
})

module.exports = {createUsersSchema,updateUsersSchema,getUsersSchema}
