const express = require('express')
const router = express.Router()

router.get('/', async (req, res) =>{
    // res.send("Index page")
    // let books 
    // try {
    //     books = await Book.find().sort({ createdAt: 'desc'}).limit(10).exec()
    // } catch {
    //     books = []
    // }
    res.render('index')
})

module.exports = router