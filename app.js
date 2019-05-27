const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const queries = require('./queries')
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())

//Get Queries
app.get('/', (req, res) => {
    queries.listAllBooks().then(books => res.json({ books }))
})

//Create Queries
app.post('/books', (req, res) => {
    console.log(req.body)
    queries.addBook(req.body).then(status => res.json({ status }))
})

//Update Queries
app.put('/books/:id', (req, res) => {
    queries.updateBookTitleById(req.body, req.params.id).then(status => res.json({ status }))
})

//Delete Queries
app.delete('/books/:id', (req, res) => {
    queries.deleteBookById(req.params.id).then(status => res.json({ status }))
})

app.listen(port, () => {
    console.log(`listening on ${port}`)
})
