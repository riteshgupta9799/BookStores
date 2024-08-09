const express = require("express");
const getBook = require("../controller/book-controller");
const router = express.Router();

router.get("/book", getBook)

module.exports = router;