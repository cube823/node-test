// const Sequelize = require('sequelize');

// const sequelize = require('../util/database');

class CartItem {
  _id: string
  quantity: number

  constructor(_id: string, quantity: number) {
    this._id = _id
    this.quantity = quantity
  }
}

module.exports = CartItem
