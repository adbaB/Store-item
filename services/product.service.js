const faker = require('faker');
const boom = require('@hapi/boom')
class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }
  generate() {
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseFloat(faker.commerce.price()),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean()
      });
    }
  }
  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.products.push(newProduct);
    return newProduct;
  }
  find(size) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const limit = size || this.products.length;
        const list = [];
        for (let i = 0; i < limit; i++) {
          list.push(this.products[i]);
        }
        resolve(list);
      }, 5000);
    });
  }
  async findOne(id) {

    const product =  this.products.find((item) => item.id === id);
    if(!product){
      throw boom.notFound('Product not found')
    }
    if(product.isBlock){
      throw boom.conflict('Product is Block')
    }
    return product
  }
  async update(id, changes) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound('Product not found');
    } else {
      const product = this.products[index];
      this.products[index] = {
        ...product,
        ...changes,
      };
      return this.products;
    }
  }
  async delete(id) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound('Product not found');
    } else {
      this.products.splice(index, 1);
      return {
        Message: 'Product Deleted',
        id,
      };
    }
  }
}

module.exports = ProductsService;
