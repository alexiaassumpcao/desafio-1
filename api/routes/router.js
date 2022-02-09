const express = require('express');
const { getServices, createNewService } = require("../controllers/services")
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!").status(200)
})


app.get("/products", (req, res) => {
    res.send("Produtos").status(200)
})

app.get("/services", (req, res) => {
    const services = getServices()
    res.status(200).json(services)
})

app.post("/services", (req, res) => {
    const { body } = req
    const error = createNewService(body)
    if(error !== ""){
        res.status(400).send(error)
    }
    res.status(201).send()
})



module.exports = app