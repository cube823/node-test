const FIRST_USER_ID = '64c4c03bf23743afe96db8cf'

const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')

const errorController = require('./controllers/error')
const mongoConnect = require('./util/database').mongoConnect

const app = express()

const _User = require('./models/user')

app.set('view engine', 'ejs')
app.set('views', 'views')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res, next) => {
  _User
    .findById(FIRST_USER_ID)
    .then((user) => {
      req.user = user
      next()
    })
    .catch((err) => console.log(err))
})

app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use(errorController.get404)

mongoConnect(() => {
  app.listen(3000)
})
