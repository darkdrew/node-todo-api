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

// // creating data
// // insertOne lets me insert a new document to my collection. It takes two args 1st is obj to store key/value, 2nd is callback
// db.collection('Todos').insertOne({
//   text: 'Something to do',
//   completed: false
// }, (error,result)=> {
//   if(error){
//     return console.log('unable to insert Todo', error);
//   }
//   console.log(JSON.stringify(result.ops, undefined, 2));
// });

// Insert new doc into User (name,age,location)
db.collection('myOwnDocument').insertOne({
  name: 'Batman',
  age: 24,
  location: 'Gotham'
}, (error, result) => {
  if(error){
    return console.log('Unable to insert document');
  }
  console.log('Inserted', JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
} );

    // close the connection of mongodb server
    db.close();
});
