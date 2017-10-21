const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {Users} = require('./../server/models/users')

// // I can't put () empty needs to be ({}) to remove every docs
//   Todo.remove({}).then( (result) => {
//     console.log(result);
//   })

  // Todo.findOneAndRemove()
  // Todo.findByIdAndRemove()

  Todo.findByIdAndRemove('59eac7b3cf6ce1e60c14e174').then( (todo) => {
      console.log(todo);
  })
