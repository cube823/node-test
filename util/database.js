const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

let _db

const mongoConnect = (callback) => {
  MongoClient.connect(
    'mongodb+srv://cube823:79HWHqwTFi0hwQHa@cluster0.nofnl8c.mongodb.net/?retryWrites=true&w=majority'
  )
    .then((client) => {
      console.log('Connected!')
      _db = client.db()
      console.log('_db', _db)
      callback()
    })
    .catch((err) => {
      console.log(err)
      throw err
    })
}

const getDb = () => {
  if (_db) return _db
  throw 'No database found!'
}

exports.mongoConnect = mongoConnect
exports.getDb = getDb
