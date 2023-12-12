const express = require('express')
const {engine} = require('express-handlebars')
const { url } = require('inspector')
const path = require('path')
const route = require('./routes')

const app = express()


app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'resources/views'))

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())


route(app)


app.listen(3000)

