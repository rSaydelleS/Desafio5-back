const express = require('express');
const app = express();
const useRouter = require('./src/route/user');
const BDconnect = require('./src/middlewares/DBconnect');
const routes = require('./src/routes');
const port = 3000;
require('dotenv').config();


app.listen(port);
app.get('/', (req, res) => {
    res.send('olaaaa!');
    console.log( "servidor operacionalna porta" + port);
});
routes(app);