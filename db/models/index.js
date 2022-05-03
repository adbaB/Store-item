const {User,UserSchema} = require('./user.model')
const {Customer, CustomerSchema} = require('./costumer.model')
function setupModels(sequelize){
  User.init(UserSchema,User.config(sequelize))
  Customer.init(CustomerSchema,Customer.config(sequelize))
}
module.exports = setupModels
