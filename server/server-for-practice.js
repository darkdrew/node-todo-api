const mongoose = require('mongoose');

// configuring mongoose to use Promise
mongoose.Promise = global.Promise;
// Using mongoose to connect to database
mongoose.connect('mongodb://localhost:27017/FinalToDoApp');

// create Mongoose model
const Todo = mongoose.model('Todo', {
  // obj properties
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

// new constructor function
// const newTodo = new Todo({
//   text: 'Something to do'
// });

// const newTodo = new Todo({
//   text: 'I Cooked dinner',
//   completed: true,
//   completedAt: 123
// });

// savng the instance to the database
// newTodo.save().then( (doc) => {
//   console.log(`Saved Todo: ${doc}`);
// }, (error) => {
//   console.log(`got problem : ${error}`);
// });

// User email - require it - trim it - set type -set min length 1
const mail = mongoose.model('user', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

const myMail = new mail({
  email: 'andreleong@gmail.com'
})

myMail.save().then ((email) =>{
  console.log(`Saved email ${email}`);
}, (error) => {
  console.log(`got prob : ${error}`);
})
