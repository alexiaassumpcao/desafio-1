const express = require('express');
const { getServices, createNewService } = require("../controllers/services")
const app = express();




app.get("/products", (req, res) => {
    // TODO: return projects from PetShop
    res.send("Produtos").status(200)
})

app.get("/services", (req, res) => {
    const services = getServices()
    res.status(200).json(services)
})

app.post("/services", (req, res) => {
    const { body } = req
    const error = createNewService(body)
    if(error !== undefined){
        res.status(error.statusCode).send(error.message)
    }
    res.status(201).send()
})



module.exports = app