
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert(
        [
          {
            title: "Things Fall Apart",
            author: "Chinua Achebe",
            genre: "Historical Memoir",
            pages: 209,
            year: 1958,
            imageLink: "images/things-fall-apart.jpg",
            language: "English",
            link: "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
          },
        ]
      );
    });
};
