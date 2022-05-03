'use strict';
const {CUSTOMER_TABLE,CustomerSchema} = require('./../models/costumer.model')
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CUSTOMER_TABLE,CustomerSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.drop(CUSTOMER_TABLE)
  }
};
