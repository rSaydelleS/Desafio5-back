const mongoose = require('mongoose');

const createBook = new mongoose.Schema({
    id: {
        type: Number,
        required:true,
        index: true
    },
    titulo: {
        type: String,
        required:true,
        index: true
    },
    num_paginas: {
        type: Number,
        required:true,
    },
    isbn: {
        type: String,
        required:true,
    },
    editora
    : {
        type: String,
        required:true,
    },
    },
    {
        timestamps:true
    }
);

const bookSchema = mongoose.models.Book || mongoose.model('Livro', createBook);
module.exports = bookSchema;