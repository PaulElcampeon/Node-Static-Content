const express = require("express")

const app = express()

app.set("views", "views")

app.set("view engine", "hbs")

app.listen(3000, () => {
    console.log("The server is now running on port 3000!")
});

module.exports = app