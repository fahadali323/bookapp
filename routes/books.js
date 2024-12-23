const express = require('express')
const router = express.Router()
const Book = require('../models/books')

//All Books Route
router.get('/', (req, res) => {
    res.send('All Books')
})

//New Books Route
router.get('/new', (req, res) => {
    res.send('New Book')
})

//Create Book Route
router.post('/', async (req, res) => {
    res.send('Create Book')
})

module.exports = router

