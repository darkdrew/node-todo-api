// Mongo client lets me connect to the server
// const MongoClient = require('mongodb').MongoClient;
// the ObjectID constructor function lets me make new object ids
const { MongoClient, ObjectID } = require('mongodb');

// connect url
// the todoApp is I can kickstart a database even without creating a database first.
MongoClient.connect('mongodb://localhost:27017/todoApp', (error, db)=> {
  if(error) {
    return console.log('Unable to connect to MongoDB server');
  }
    console.log('Connected to MongoDB server');

    // 3 methods of removing database
    // #1 deleteMany - target many docs
    // db.collection('Todos')
    // .deleteMany({text: 'Eat lunch'})
    // .then( (res) => {
    //   console.log(res);
    // });

    // #2 deleteOne - target one doc and removes it
    // db.collection('Todos')
    // .deleteOne({text: 'Eat lunch'})
    // .then( (res) => {
    //   console.log(res);
    // });

    // #3 findOneAndDelete - removes one doc and also returns it's values. Can tell user what got deleted
    // db.collection('Todos')
    // .findOneAndDelete({completed: false})
    // .then( (res) => {
    //   console.log(res);
    // })

    // CHALLENGE deletemany duplicates and choose Robin to delete
    // db.collection('myOwnDocument')
    // .deleteMany({name:'Batman'})
    // .then( (result) => {
    //   console.log(result);
    // })

    db.collection('myOwnDocument')
    .findOneAndDelete({_id: new ObjectID("59e808c6a3e0af1a7817a5ec")})
    .then( (result) => {
      console.log(result);
    })

    // db.close();
});
