// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

 const prodConfig = Object.assign(
  {},
  devConfig,
  { client: 'pg', connection: process.env.DATABASE_URL}
)

module.exports = {
  development: devConfig,
  production: prodConfig
}

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