const mongodb = require('mongodb')
const getDb = require('../util/database').getDb

const ObjectId = mongodb.ObjectId

class User {
  constructor(name, email) {
    this.name = name
    this.email = email
  }

  save() {
    const db = getDb()
    return db
      .collection('users')
      .insertOne(this)
      .then((result) => result)
      .catch((err) => err)
  }

  static findById(userId) {
    const db = getDb()
    return db
      .collection('users')
      .findOne({ _id: new ObjectId(userId) })
      .then((result) => result)
      .catch((err) => err)
  }
}

module.exports = User
