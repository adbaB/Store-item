const boom = require('@hapi/boom');
const faker = require('faker');

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
    const newUser = {
      id: faker.datatype.uuid(),
      ...data,
    }
    this.users.push(newUser)
    return newUser
    ;
  }
  async find(size) {
    const limit = size || this.users.length;
    const list = [];
    for (let i = 0; i < limit; i++) {
      list.push(this.users[i]);
    }
    //console.log(list)
    return list;
  }
  async findOne(id) {
    const user = this.users.find((item) => item.id === id);
    if (!user) {
      throw boom.notFound('User not found');
    }
    if (user.isEditable) {
      throw boom.conflict('User is Block');
    }
    return user;
  }
  async update(id, changes) {
    const index = this.users.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound('Product not found');
    } else {
      const user = this.users[index];
      this.users[index] = {
        ...user,
        ...changes,
      };
      return  this.users[index]
    }
  }
  async delete(id) {
    const index = this.users.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound('Product not found');
    } else {
      this.users.splice(index, 1);
      return {
        Message: 'User Deleted',
        id,
      };
    }
  }
}

module.exports = UserServices;
