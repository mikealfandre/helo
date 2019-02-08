const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
require('dotenv').config()
const session = require('express-session')

const cr = require('./controller')
const pc = require('./postsController')

const app = express()
app.use(bodyParser.json())

const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    maxAge: null
}));


massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))
})

app.post('/auth/register', cr.register)
app.post('/auth/login', cr.login)

//posts endpoints

app.get('/api/posts/:userid', pc.getAll)
app.post('/api/post/:userid', pc.newPost)

