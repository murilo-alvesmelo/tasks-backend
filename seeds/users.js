exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('users').del()
      .then(function () {
        // Inserts seed entries
        return knex('users').insert([
            {name: 'Murilo', email: 'murilo@gmail.com', password: '1234'},
          ]);;
      });
  };