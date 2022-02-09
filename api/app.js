const express = require("express")
const notas = require('./config/router');
const app = express()





app.listen(3000, () => {
    console.log(`Look at http://localhost:3000`)
})

app.use("/v1", notas)

