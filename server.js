const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
require('dotenv').config();
const bookmarkController = require('./controllers/bookmarkController');
const morgan = require('morgan');
const cors= require ('cors');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('tiny'));
app.use('/bookmark', bookmarkController);

app.get('/', (req, res) => {
    res.send("Hello world!")
})

app.listen(PORT,() => console.log(`Here were are on ${PORT}`))

