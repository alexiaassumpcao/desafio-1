const express = require('express');
const listServicesController = require("../controllers/services")
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!").status(200)
})


app.get("/products", (req, res) => {
    res.send("Produtos").status(200)
})

app.get("/services", (req, res) => {
    const services = listServicesController()
    res.status(200).json(services)
})



module.exports = app