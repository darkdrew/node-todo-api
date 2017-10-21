// NPM Imports
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

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
});

// GET route
app.get('/todos', (req,res) => {
  Todo.find().then( (todos) => {
    res.send({todos});
  }, (error) => {
    res.status(400).send(error);
  })
})

// GET /todos/:id
app.get('/todos/:id', (req,res) => {
  const id = req.params.id;
  // Validate ID using isValid
  if(!ObjectID.isValid(id)){
    console.log('its invalid ID');
    //  res 404 - send back empty body
    return res.status(404).send();
  }
  // findById
  Todo.findById(id).then( (todo) => {
    if(!todo){
      return res.status(404).send();
    }
    res.send({todo:todo});
  }).catch((e) => {
    res.status(400).send();
  })
  // success if todo - send back
  // if no todo - 404 - send empty body back
  // error 400 - send back empty body
})

const port = process.env.PORT || 3000;
app.listen(port,() => console.log('Listening on port', port) )

module.exports = { app };
