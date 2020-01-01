const express = require("express");
const mongoose = require("mongoose");

// iniciando o app
const app = express();

// iniciando o bd
mongoose.connect("mongodb+srv://starter:starter@cluster0-kj5ow.mongodb.net/starter?retryWrites=true&w=majority")

//rotas
app.get("/", (req, res) => {
    res.send("Hello starter !");
});

app.listen(3001);