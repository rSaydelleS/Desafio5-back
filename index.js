const express = require('express');
const app = express();
const path = require('path');
const routes = require('./src/routes');
const port = 3000;
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log("olá")
});
app.get('/', (req, res) => {
    res.send('olá')
})
routes(app);
