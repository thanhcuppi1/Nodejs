const express = require('express')
const methodOverride = require('method-override')
const {engine} = require('express-handlebars')
const { url } = require('inspector')
const path = require('path')
const route = require('./routes')
const db = require('./config/db')

db.connect()


const app = express()


app.engine('handlebars', engine({
    helpers: {
        sum: (a, b) => a +b 
    }
}))
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'resources', 'views'))

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.use(methodOverride('_method'))

route(app)


app.listen(3000)

