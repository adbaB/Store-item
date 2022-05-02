const boom = require('@hapi/boom');
const faker = require('faker');
const {models} = require('./../libs/sequelize')
class UserServices {
  constructor() {
    this.users = [];
    this.generate();

  }
  generate() {
    const limit = 50;
    for (let i = 0; i < limit; i++) {
      this.users.push({
        id: faker.datatype.uuid(),
        userName: faker.internet.userName(),
        name: faker.name.firstName(),
        lastname: faker.name.lastName(),
        password: faker.internet.password(),
        isEditable: faker.datatype.boolean(),
      });
    }
  }
  async create(data) {


        const newUser = await models.User.create(data)
      return newUser

    ;
  }
  async find(size) {
    try {
      const data = await models.User.findAll()
      return data


    } catch (error) {
        throw new Error(error)
    }

  }
  async findOne(id) {
    const user = await models.User.findByPk(id);

    if (!user) {
      throw boom.notFound('User not found');
    }

    return user;
  }
  async update(id, changes) {

    const rta = models.User.update(changes,{
      where:{id}
    })

   return rta
  }
  async delete(id) {

    const rta = await models.User.destroy({where: {id}})
    return rta
}
}
module.exports = UserServices;
