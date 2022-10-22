exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('tasks').del()
      .then(function () {
        // Inserts seed entries
        return knex('tasks');
      });
  };