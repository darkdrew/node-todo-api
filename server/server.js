// NPM Imports
const express = require('express');
const bodyParser = require('body-parser');

// Local Imports
// Grabbing the file for connection
const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { Users } = require('./models/users');

// CRUD operators CREATE READ UPDATE DELETE

// Set up express app
const app = express();

// Using the NPM bodyParser
// The app.use(bodyParser.json()) ensures the body is properly formatted JSON.
app.use(bodyParser.json());

// POST route
// bodyParser extracts the body of incoming request and makes it available on req.body in your route.
app.post('/todos', (req,res) => {
  // creating an instance of mongoose model
  const todo = new Todo({
    text: req.body.text
  });

  // saving it to the database
  // if successful, send the doc back here
  todo.save().then( (doc)=> {
    res.send(doc);
  } ,(error)=> {
    // 400 code means Bad Request
    res.status(400).send(error);
  });
})

const port = process.env.PORT || 3000;
app.listen(port,() => console.log('Listening on port', port) )
