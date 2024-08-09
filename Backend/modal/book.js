const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    title:String,
    image:String
})

module.exports = mongoose.model("book",bookSchema);