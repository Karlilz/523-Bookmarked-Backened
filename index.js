require("dotenv").config();
const express = require ('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bookmarkController = require('./controllers/bookmarkController')
const morgan = require("morgan");

app.use(morgan("tiny"));
app.use(express.urlencoded({ extended:true}));

app.get("/", (req,res) =>{
    res.send("Testing bookmark app")
})

app.use('/bookmark', bookmarkController);

app.listen(PORT, ()=> console.log('Running on', PORT))