const express = require("express");
const routes = express.Router();

//rotas
routes.get("/", (req, res) => {
    Product.create({
        title: "Starter now",
        description: "Descrição geral",
        url: "http://google.com"
    });

    res.send("Hello starter !");
});

module.exports = routes;