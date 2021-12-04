const bodyParser = require('body-parser')
const express = require('express')
require("dotenv")
const app = express()
app.listen(5000)
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-type, authorization")
    next()
})
//Require routes file
require('./routes/routes')(app)