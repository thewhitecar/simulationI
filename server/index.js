const express = require('express')
const bodyParser = require('body-parser')
const lc = require('./controller')
require('dotenv').config()
const massive = require('massive');
const controller = require('./controller');
const app = express();

app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
}).catch(err => {
    console.log('DB Connection Error:', err)
})






app.listen(4000, () => {
    console.log('Listening on port 4000')
})