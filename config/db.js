const config = require('../knexfile')[enviroment]
const knex = require('knex')(config)

knex.migrate.latest([config])
module.exports = knex