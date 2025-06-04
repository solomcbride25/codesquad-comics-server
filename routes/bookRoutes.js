const express = require('express');
const { getAllBooks, getBook, createBook, updateBook, deleteBook } = require("../controllers/bookControllers"); 

const router = express.router() 

router.get('/', (req, res, next) => {
    res.status().json({success: true, message:"This will send all of the book data"});
 });
 
 router.get("/:id", getBook);
 
 router.post('/create/new', createBook)
 
 
 router.put('/update/:id', updateBook)
 
 router.delete('/delete/:id', deleteBook)
 
 module.exports(); 