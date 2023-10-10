const express = require('express');
const router = express.Router();
const DBconnect = require('../middlewares/DBconnect');
const bookSchema = require('../models/books');


router.post('/',DBconnect, async (req, res) => {
    console.log("servidor operacional e conectado ao banco de dados");
    let {id, titulo, num, isbn, editora} = await req.body;
    const DBanswer = bookSchema.create({id, titulo, num, isbn, editora});
    res.status(200).json({
        message: "Cadastrado com sucesso",
        answer: DBanswer
    });

})

module.exports = router;