const express = require('express')
const bodyParser = require('body-parser')
const lc = require('./controller')
require('dotenv').config()
const massive = require('massive');
const controller = require('./controller');
const app = express();
let controller = require('./controller')

app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
}).catch(err => {
    console.log('DB Connection Error:', err)
})

app.get('/api/products', controller.getProducts)
app.post('/api/products', controller.createProduct)
app.put('/api/products/:id', controller.updateProduct)
app.delete('/api/products/:id', controller.deleteProduct)

app.listen(4000, () => {
    console.log('Listening on port 4000')
})