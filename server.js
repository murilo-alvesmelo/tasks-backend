const dbConfigObj = require('./knexfile')

// .....

const app = express()

let dbConnectionConfig

switch (process.env.NODE_ENV='production'){
  case 'production':
    dbConnectionConfig = dbConfigObj.production
    break;
  default:
    dbConnectionConfig = dbConfigObj.development
}

const appDb = connectToDb(dbConnectionConfig)
Model.knex(appDb)