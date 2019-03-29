const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const queries = require('./queries')
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())

app.listen(port, () => {
    console.log(`listening on ${port}`)
})
