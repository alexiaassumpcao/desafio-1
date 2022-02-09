const express = require("express")
const bodyParser = require('body-parser');
const routes = require('./routes/router');
const { HOME_MESSAGE, PONG_MESSAGE, OK_MESSAGE } = require("./constants/routes") 
const app = express()

app.get("/ping", (req, res) => {
    res.status(200).send(PONG_MESSAGE)
})

app.get("/health", (req, res) => {
    res.status(200).send(OK_MESSAGE)
})

app.get("/", (req, res) => {
    res.status(200).send(HOME_MESSAGE)
})

app.listen(3000, () => {
    console.log(`Look at http://localhost:3000`)
})
app.use(bodyParser.json())

app.use("/v1", routes)

