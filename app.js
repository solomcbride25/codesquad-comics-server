const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors')
const path = require('path');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
const PORT = 8080;

//
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static());
app.use('/api/books', bookRoutes);

app.get('/', (req, res, next) => {
   res.status().json({success: true, message:"This route points to the Home page"});
});

app.get('/api/books', (req, res, next) => {
   res.status().json({success: true, message:"This will send all of the book data"});
});

app.get('/api/books/:id', (req, res, next) => {
   res.status().json({success: true, message:"This will send a single book based on its id"});
});

app.get('/api/books/create/new', (req, res, next) => {
   res.status().json({success: true, message: "This will create new book"});
});

app.get('/api/books/update/:id', (req, res, next) => {
   res.status().json({success: true, message:"This will update a book by its id"});
});

app.get('/api/books/delete/:id', (req, res, next) => {
   res.status().json({ success: true, message: "This will delete book by its id"});
});

app.listen (console.log(`The server is listening on port ${PORT}`))