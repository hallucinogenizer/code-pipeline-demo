const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("Hello World 2")
})

app.listen(3020, () => {
    console.log("Server is running")
})