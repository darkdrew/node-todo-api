const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {Users} = require('./../server/models/users')

const id = `59ea0e1444eb7c2588318dc1`;

// check if ID is valid
if(!ObjectID.isValid(id)){
  console.log('ID not valid');
}

// Todo.find({
//   _id: id
// }).then( (todos) => {
//   console.log('Todos', todos);
// })
//
// // Grabs the first match
// Todo.findOne({
//   _id: id
// }).then( (todo) => {
//   console.log('Todo', todo);
// })

// Query by ID
Todo.findById(id).then( (todo) => {
  if(!todo){
    return console.log('Id not found!');
  }
  console.log('Todo By Id', todo);
}).catch((e)=> console.log(e))

// findById Challenge
Users.findById(`59e8c1417179e9331896e31c`).then( (user) => {
  if(!user){
    return console.log('there are no user');
  }
  console.log('userrrrr is:', user);
}).catch((e) => console.log('problem here', e))
