// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

DATABASE_URL = 'postgres://rzbhtqrehlkvtm:16920f3f20a61d6d2d60f2430a96ebd250ff968a266d6c1cc242a2fe74b9cd3a@ec2-3-93-206-109.compute-1.amazonaws.com:5432/dbdsh9ues0kt3l'

module.exports = {
    client: 'pg',
    connection: 'postgres://rzbhtqrehlkvtm:16920f3f20a61d6d2d60f2430a96ebd250ff968a266d6c1cc242a2fe74b9cd3a@ec2-3-93-206-109.compute-1.amazonaws.com:5432/dbdsh9ues0kt3l',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }

};
