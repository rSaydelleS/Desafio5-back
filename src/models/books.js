const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: "campo obrigatório",
        unique: true,
    },
    pagenumber: {
        type: Number,
        required: "campo obrigatório",
    },
    isbn: {
        type: String,
        required: "campo obrigatório",
    },
    publisher: {
        type: String,
        required: "campo obrigatório",
    },
    },
    {
        timestamps:true
    }
);

module.exports = bookSchema;