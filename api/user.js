const bcrypt = require('bcrypt-nodejs')


module.exports = app => {

    const findUser = (req, res) =>{
        app.db('users')
            .then(users => res.json(users))
            .catch(err => res.status(400).send(err))
    }

    const getHash = (password, callback) =>{
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, null, (err, hash) => callback(hash))
        })
    }

    const save = (req, res) =>{
        getHash(req.body.password, hash => {
            const password = hash
            
            app.db('users')
                .insert({ name: req.body.name, email: req.body.email.toLowerCase(), password})
                .then(_ => res.status(204).send())
                .catch(err => res.status(400).json(err))
        })

    
    }

    return { save, findUser}
}