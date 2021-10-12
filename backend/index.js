const express = require('express')
require("dotenv")
const app = express()
app.listen(5000)
//Require routes file
require('./routes/routes')(app)
