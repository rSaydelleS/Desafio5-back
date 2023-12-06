const mongoose = require('mongoose');

const BDconnect = async (req = null, res = null, next = null) => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
        console.log("conexão realizada com sucesso");
        try {next(); } catch (error) {    };
        return mongoose;
    } catch (error) {
        console.error("Falha oa se conectar ao banco de dados" + error);
        return error;
    }
}

module.exports = BDconnect;