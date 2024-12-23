// Load environment variables only in non-production environments
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()  // Corrected method to load .env variables
}

const express = require('express')
const app = express()
const expressLayout = require('express-ejs-layouts')
const indexRouter = require('./routes/index')
const authorRouter = require('./routes/author')

// Set up EJS view engine and views directory
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayout)
app.use(express.static('public')) // Serve static files (HTML, CSS, JS)

// Set up mongoose to connect to the database
const mongoose = require('mongoose')
mongoose.connect(process.env.Database_url)
const db = mongoose.connection
db.on('error', error => console.log(error))
db.once('open', () => console.log('Connected to Mongoose'))

// Use index router for the root route
app.use('/', indexRouter)
app.use('/authors', authorRouter)



// Start the server on the specified port
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`)
})

