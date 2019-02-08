const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        console.log(req.body)
        const {username, password} = req.body
        const db = req.app.get('db')
        const { session } = req

        const hash = bcrypt.hashSync(password, 10)
        let newUser = await db.register({username, password: hash})
        newUser = newUser[0]

        session.user = {...newUser}
        res.status(201).send(session.user)
        
    },
    login: async (req, res) => {
        const {username, password} = req.body
        const db = req.app.get('db')
        const {session} = req

        let foundUser = await db.login({username})
        foundUser = foundUser[0]

        if(!foundUser){
            res.status(418)
        }
        
        let correctUser = bcrypt.compareSync(password, foundUser.password)
        if(!correctUser){
            res.status('Unauthorized')
        }else{
            delete foundUser.password
            session.user = foundUser
            res.status(200).send(session.user)
        }

    }
}