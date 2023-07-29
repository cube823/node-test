const mongodb = require('mongodb')
const getDb = require('../util/database').getDb

class Product {
  constructor(title, price, description, imageUrl, _id) {
    this.title = title
    this.price = price
    this.description = description
    this.imageUrl = imageUrl
    this._id = _id ? new mongodb.ObjectId(_id) : null
  }

  save() {
    const db = getDb()
    return db
      .collection('products')
      .insertOne(this)
      .then((result) => {
        console.log(result)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  static fetchAll() {
    const db = getDb()
    return db
      .collection('products')
      .find()
      .toArray()
      .then((products) => {
        console.log(products)
        return products
      })
      .catch((err) => {
        console.log(err)
      })
  }

  static findById(prodId) {
    const db = getDb()
    return db
      .collection('products')
      .find({ _id: new mongodb.ObjectId(prodId) })
      .next()
      .then((product) => {
        console.log(product)
        return product
      })
      .catch((err) => {
        console.log(err)
      })
  }

  static updateById(prodId, product) {
    const db = getDb()
    return db
      .collection('products')
      .updateOne({ _id: new mongodb.ObjectId(prodId) }, { $set: product })
      .then((product) => {
        console.log('Updated Product!', product)
        return product
      })
      .catch((err) => {
        console.log(err)
      })
  }

  static deleteById(prodId) {
    const db = getDb()
    return db
      .collection('products')
      .deleteOne({ _id: new mongodb.ObjectId(prodId) })
      .then((product) => {
        console.log('Deleted Product!', product)
        return product
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

module.exports = Product
