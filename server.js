const express = require('express')
const app = express()
const expressLayout = require('express-ejs-layouts')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout' )
app.use(expressLayout)
app.use(express.static('public')) //places html, js files

app.listen(process.env.PORT || 3000)
