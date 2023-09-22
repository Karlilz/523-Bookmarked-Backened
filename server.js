require("dotenv").config();
const express = require ('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bookmarkController = require('./controllers/bookmarkController')
const morgan = require("morgan");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended:true}));
app.use('/bookmark', bookmarkController);

app.get("/", (req,res) =>{
    res.send("Testing bookmark app")
})

app.listen(PORT,() => console.log(`Running on' ${PORT}`))