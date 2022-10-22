exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('users').del()
      .then(function () {
        // Inserts seed entries
        return knex('users').insert([
            {title: 'laundry', description: 'work'},
            {title: 'workout', description: 'less worky'},
            {title: 'play video games', description: 'no worky'}
          ]);;
      });
  };