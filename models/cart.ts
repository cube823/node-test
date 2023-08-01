// const Sequelize = require('sequelize');

// const sequelize = require('../util/database');

// const Cart = sequelize.define('cart', {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true
//   }
// });

class Cart {
  _id: string

  constructor(_id: string) {
    this._id = _id
  }
}

module.exports = Cart
