const express = require("express");
const {
  getAllBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/bookControllers");

const router = express.Router();

router.get("/", getAllBooks)

router.get("/:id", getBook);

router.post("/create/new", createBook);

router.put("/update/:id", updateBook);

router.delete("/delete/:id", deleteBook);

module.exports = router;
