const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("Hello World 3")
})

app.listen(3020, () => {
    console.log("Server is running")
})