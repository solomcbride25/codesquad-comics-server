const booksData = require('../data/books.js');

const getAllBooks = (req, res, next) => {
  try {
    const books = booksData;
    awaitbooksData.find();
    res.status(200).json({
      success: true,
      message: "Book data retrieved",
    });
  } catch {
    res.status(400).json({ error: true, message: "Book data not retrieved" });
  }
};

const getBook = (req, res, next) => {
  try {
   // const book = booksData.find((book) => book._id === _id);
   awaitgetBook.findOne(_id);
   res.status().json({
    success: true,
    data: book,
    message: "Book data found",
  });
  } catch {
    res.status(400).json({
      error: true,
      message: "Book data not found",
    });
  }
};

const createBook = async (req, res, next) => {
  const {
    title,
    author,
    publisher,
    genre,
    pages,
    ratings,
    synopsis,
    imageUrl,
  } = req.body;

  try {
    const newBook = req.body;

    console.log("Creating a book with:", {
      title,
      author,
      publisher,
      genre,
      pages,
      rating,
      synopsis,
      imageUrl,
    });

    res.status(201).json({
      success: true,
      message: "Book data received",
      data: {
        title,
        author,
        publisher,
        genre,
        pages,
        ratings,
        synopsis,
        imageUrl,
      },
    });
  } catch {
    res.status(400).json({
      error: true,
      message: "Book data not received",
    });
  }
};

const updateBook = async (req, res, next) => {
  const {
    title,
    author,
    publisher,
    genre,
    pages,
    ratings,
    synopsis,
    imageUrl,
  } = req.body;

  try {
    const newBook = req.body;
    res.status(201).json({
      status: true,
      message: "New book successfully created",
      data: newBook,
    });
  } catch {
    res.status(400).json({
      error: true,
      message: "New book failed to be created",
    });
  }
};

const deleteBook = async (req, res, next) => {
  try {
    const books = booksData.filter((book) => book._id !== _id);
    res.status(200).json({
      success: true,
      message: "Book was successfully deleted.",
      data: books,
    });
  } catch {
    res.status(400).json({
      error: true,
      message: "Book failed to be deleted.",
    });
  }
};

module.exports = { getAllBooks, getBook, createBook, updateBook, deleteBook };
