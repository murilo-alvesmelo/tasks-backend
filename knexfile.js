// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

module.exports = {
  production:{
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      diectory: __dirname + '/migrations',
    },
    seeds:{
      directory: __dirname + '/config'
    }
  }
};

/* module.exports = {

  client: 'postgresql',
  connection: {
    database: 'tasks',
    user:     'postgres',
    password: '1234'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }

}; */