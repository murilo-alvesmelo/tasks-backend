const express = require('express')
const app = express();
const db = require('./config/db')
const consign = require('consign')
const connect = require('connect');


consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.db = db

app.listen(process.env.PORT || 3000, () =>{
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
}) 