const boom = require('@hapi/boom');
const faker = require('faker');

class CategoryServices {
  constructor() {
    this.categories = [];
    this.generate();
  }
  generate() {
    const limit = 20;
    for (let i = 0; i < limit; i++) {
      this.categories.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.department(),
        number: faker.commerce.product()
      });
    }
  }
  async create(data) {
    const newCategory = {
      id: faker.datatype.uuid(),
      ...data,
    }
    this.categories.push(newCategory)
    return newCategory
    ;
  }
  async find(size) {
    const limit = size || this.categories.length;
    const list = [];
    for (let i = 0; i < limit; i++) {
      list.push(this.categories[i]);
    }
    //console.log(list)
    return list;
  }
  async findOne(id) {
    const Category = this.categories.find((item) => item.id === id);
    if (!Category) {
      throw boom.notFound('Category not found');
    }

    return Category;
  }
  async update(id, changes) {
    const index = this.categories.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound('Category not found');
    } else {
      const Category = this.categories[index];
      this.categories[index] = {
        ...Category,
        ...changes,
      };
      return  this.categories[index]
    }
  }
  async delete(id) {
    const index = this.categories.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound('Category not found');
    } else {
      this.categories.splice(index, 1);
      return {
        Message: 'Category Deleted',
        id,
      };
    }
  }
}

module.exports = CategoryServices;
