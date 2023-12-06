const express = require('express');
const router = express.Router();
const DBconnect = require('../middlewares/DBconnect');
const bookSchema = require('../models/books');
const { default: mongoose } = require('mongoose');

router.get('/livros',DBconnect, async (req, res) => {
    try {
        const DBanswer = await bookSchema.find({});
        res.status(200).json({
            message: "Livro encontrado com sucesso",
            answer: DBanswer
        });
    } catch (error) {
        console.log(error);
    }
})

router.get('/livros/:id',DBconnect, async (req, res) => {
    try {
        console.log("servidor operacional e conectado ao banco de dados obtendo um livro");
        let bookId = req.params.id
        const DBanswer = await bookSchema.findOne({id: bookId});
        res.status(200).json({
            message: "Livro encontrado com sucesso",
            answer: DBanswer
        });
    } catch (error) {
        console.log(error);
    }
});


router.post('/livros',DBconnect, async (req, res) => {
    try {
        console.log("servidor operacional e conectado ao banco de dados guardando o livro");
        let {id, titulo, num_paginas, isbn, editora} = req.body;

        console.log(typeof(id, titulo, num_paginas, isbn, editora));
        console.log(id, titulo, num_paginas, isbn, editora);

        const DBanswer = await bookSchema.create({id, titulo, num_paginas, isbn, editora});
        res.status(200).json({
            message: "Cadastrado com sucesso",
            answer: DBanswer
        });
    } catch (error) {
        console.log(error);
    }
});

router.put('/livros/:id',DBconnect, async (req, res) => {
    try {
        console.log("servidor operacional e conectado ao banco de dados para atualizar o livro");
        const urlid = req.params.id;
        let {titulo, num_paginas, isbn, editora} = req.body;
        const chosedBook = await bookSchema.findOne({id: urlid});
        if(!chosedBook){
            throw new Error("Esse livro não consta na biblioteca!")
        }
        const DBanswer = await bookSchema.updateOne({id: urlid}, {titulo, num_paginas, isbn, editora});

        res.status(201).json({
            message: "Editado com sucesso",
            answer: DBanswer
        });
    } catch (error) {
        console.log(error);
    }
});



router.delete('/livros/:id',DBconnect, async (req, res) => {
    try {
        console.log("servidor operacional e conectado ao banco de dados para deletar o livro");
        const urlid = req.params.id;
        const chosedBook = await bookSchema.findOne({id: urlid})
        if(!chosedBook){
            const DBanswer = await bookSchema.deleteOne({id: urlid});
            res.status(200).json({
                message: "Livro deletado com sucesso",
                answer: DBanswer
            });
        }        
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;