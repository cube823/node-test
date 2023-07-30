const _mongodb = require('mongodb')
const _getDb = require('../util/database').getDb

const ObjectId = _mongodb.ObjectId

class User {
  name: string
  email: string

  constructor(name: string, email: string) {
    this.name = name
    this.email = email
  }

  save() {
    const db = _getDb()
    return db
      .collection('users')
      .insertOne(this)
      .then((result) => result)
      .catch((err) => err)
  }

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
