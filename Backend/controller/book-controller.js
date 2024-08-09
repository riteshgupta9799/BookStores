const BookModal = require("../modal/book");


const getBook =async (req,res) =>{
    try {
        const book =await BookModal.find();
        res.status(201).json(book);
        } catch (error) {
            res.status(500).json(error);
    }
}

module.exports = getBook;