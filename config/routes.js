module.exports = app => {

    //auth routes
    app.post('/signup', app.api.user.save)
    app.post('/login', app.api.auth.login)
    app.get('/users', app.api.user.findUser)
    //task routes

    //get e post
    app.route('/tasks')
        .all(app.config.passport.authenticate())
        .get(app.api.task.findTask)
        .post(app.api.task.create)    

    //delete
    app.route('/tasks/:id')
        .all(app.config.passport.authenticate())
        .delete(app.api.task.remove)
    
    //put
    app.route('/tasks/:id')
        .all(app.config.passport.authenticate())
        .put(app.api.task.toggleTask)

}