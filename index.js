const express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    bc = require('./controllers/books_controller.js')



app.use(bodyParser.json());
app.use (express.static( __dirname + '/../public/build'))


    app.post('/api/books', bc.create)
    app.get('/api/books', bc.create)
    app.put('/api/books/:id', bc.update)
    app.delete('/api/books/:id', bc.delete)
// app.get('/api/getBooks', bc.get)


app.listen(3000, ()=> {console.log ("I'm listening on port 3000")})