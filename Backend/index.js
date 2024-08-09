const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
app.use(cors());
app.use(express.json());
dotenv.config();
const DB=require("./Config/DB");
const port = process.env.PORT || 4000;


// routes
app.use("/api",require("./routes/book-route"));
app.use("/api",require("./routes/user-route"));


app.listen(port, () => {
    console.log(`Sever is ruuning at ${port}`);
})