const connection = require('./knexfile')[process.env.NODE_ENV || 'development']
const database = require('knex')(connection)

module.exports = {
  //GET ALL BOOKS
  listAllBooks() {
    return database('books')
  },

  //GET BY TITTLE
  //GET BY AUTHOR
  //GET BY BOOK
  //GET BY LANGUAGE
  //GET BY COUNTRY
  //GET BY GENRE

  //CREATE
  addBook(newBook) {
    return database('books').insert(newBook).returning('*')
  },

  //UPDATE
  updateBookTitleById(bookInfo, id) {
    return database('books').update(bookInfo).where('id', id).returning('*')
  },

  //DELETE
  deleteBookById(id) {
    return database('books').where('id', id).del()
  },

}
