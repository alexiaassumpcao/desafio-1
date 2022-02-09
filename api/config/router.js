const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!").status(200)
})


app.get("/products", (req, res) => {
    res.send("Produtos").status(200)
})

app.get("/services", (req, res) => {
    res.send("Serviços").status(200)
})



module.exports = app