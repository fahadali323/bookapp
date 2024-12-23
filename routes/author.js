const express = require('express')
const router = express.Router()
const Author = require('../models/author')

//All Authors Route
// All Authors Route
router.get('/', async (req, res) => {
    let searchOptions = {}
    if (req.query.name != null && req.query.name !== '') {
        searchOptions.name = new RegExp(req.query.name, 'i'); // Search for authors by name (case insensitive)
    }

    try {
        const authors = await Author.find(searchOptions); // Use searchOptions in the query
        res.render('authors/index', { authors: authors, searchOptions: req.query }); // Pass searchOptions to the view
    } catch {
        res.redirect('/');
    }
})


//New Author Route
router.get('/new', (req, res) => {
    res.render('authors/new',  {author: new Author()})
})

//Create Author Route
router.post('/', async (req, res) => {
    const author = new Author({
        name: req.body.name
    })
    try {
        const author = await author.save()
        res.redirect('authors')
    } catch {
        res.locals.errorMessage = 'Error Creating Author...'
        res.render('authors/new', { author: author })
    }
})

module.exports = router

