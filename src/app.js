const PORT = process.env.PORT || 3000

const express = require("express")

const router = require("./router")

const app = express()

app.set("views", "views")

app.set("view engine", "hbs")

app.use(express.static('public'))

app.use("/", router)

app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}!`)
});

module.exports = app