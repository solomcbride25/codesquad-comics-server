const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors')
const path = require('path');
const bookRoutes = require('./routes/bookRoutes');
const authRoutes = require('./routes/authRoutes');
const { json } = require('body-parser');

const app = express();
const PORT = 8080;
const register = async (req, res, next) => {
    const { firstName, lastName, username, password } = req.body
    console.log (req.body);
    try {
        const newUser = {firstName, lastName, username, password}
        console.log("The code is operational")
        res.status(201).json({
            success: true,
            message: "New user is created";
            data: newUser;
        })
    } catch (error) {
        res.status(500).json({
            error: true,
            message: "Internal server error!";
        })
    }
}

const login = async(req, res, next) => {
    res.status(200).json({
        success: true,
        message: "User logged in"
    })
};

const logout = async(req, res, next) => {
    console.log("Initializing logout controller logic...")
    res.clearCookie('connect.sid', { path: '/' });
    res.status(200).json({
        message: "User logging out";
    })
    function sessionDestruction(err) {
        //error handling as a final check and a failsafe
        if (err) {
          return next(err);
          console.log("Logout function activated. Logging out...")
        }
      }
      sessionDestruction();
};

const localLogin = async(req, res, next); => {
    const result = true;
    function mockPassport(err, user) {
        //error handling as a final check and a failsafe
        if (err) {
          return next(err);
         }
        }
        //call the mockPassport feature
        mockPassport();
    json({
        success: true,
        message: "Login successful..."
    })
}

const result = {result};

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

module.exports();