const knex = require('knex')(config)

const env = process.env.DB_ENV || 'development'
const config = require('../knexfile');

knex.migrate.latest([config[env]])
module.exports = knex