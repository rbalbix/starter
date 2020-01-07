const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// iniciando o app
const app = express();
app.use(express.json());


app.use(cors());

// iniciando o bd
mongoose.connect("mongodb+srv://starter:starter@cluster0-kj5ow.mongodb.net/starter?retryWrites=true&w=majority"
    , { useNewUrlParser: true, useUnifiedTopology: true })
    .then (() => {
        console.log("Connected.");
    }).catch(e => {
        console.log(`ERROR: ${e}` );
    });

requireDir("./src/models");

// Rotas
app.use("/api", require("./src/routes"));

app.listen(3001);