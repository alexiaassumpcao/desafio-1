const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("Hello World!").status(200)
})


app.listen(3000, () => {
    console.log(`Look at http://localhost:3000`)
})
