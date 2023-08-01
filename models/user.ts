const _mongodb = require('mongodb')
const _getDb = require('../util/database').getDb

const ObjectId = _mongodb.ObjectId

interface ICart {
  items: any[]
}

class User {
  name: string
  email: string
  cart: ICart

  constructor(name: string, email: string, cart: ICart) {
    this.name = name
    this.email = email
    this.cart = cart
  }

  save() {
    const db = _getDb()
    return db
      .collection('users')
      .insertOne(this)
      .then((result) => result)
      .catch((err) => err)
  }

  addToCart(product: Product) {}

  static findById(userId) {
    const db = _getDb()
    return db
      .collection('users')
      .findOne({ _id: new ObjectId(userId) })
      .then((result) => result)
      .catch((err) => err)
  }
}

module.exports = User
