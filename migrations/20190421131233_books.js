
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', (book) => {
    book.increments('id')
    book.string('title')
    book.string('author')
    book.string('genre')
    book.integer('pages')
    book.integer('year')
    book.string('imageLink')
    book.string('language')
    book.string('link')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('books')

};
