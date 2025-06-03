const express = require('express'); 

const router = express.router() 

router.get('/', (req, res, next) => {
    res.status().json({success: true, message:"This will send all of the book data"});
 });
 
 router.get('/:id', (req, res, next) => {
    res.status().json({success: true, message:"This will send a single book based on its id"});
 });
 
 router.post('/create/new', (req, res, next) => {
    res.status().json({success: true, message: "This will create new book"});
 });
 
 router.put('/update/:id', (req, res, next) => {
    res.status().json({success: true, message:"This will update a book by its id"});
 });
 
 router.delete('/delete/:id', (req, res, next) => {
    res.status().json({ success: true, message: "This will delete book by its id"});
 });
 
 module.exports; 