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

    // db.collection('Todos').find({_id: new ObjectID('59e771a43e897f06b4b1d9b4')}).toArray()
    // .then( (docs) => {
    //   console.log(docs);
    // },(error) => {
    //   console.log('something wrong cant find');
    // })

    // db.collection('Todos').find().count()
    // .then( (counter) => {
    //   console.log(`counter is ${counter}`);
    // }, (error) => {
    //   console.log(error);
    // } )

    db.collection('myOwnDocument').find({name:'Batman'}).toArray()
    .then( (arr) =>{
      console.log(`number of batmans are ${JSON.stringify(arr, undefined, 4)}`);
    }, (error) => {
      console.log(`got problem leh ${error}`);
    })

    // db.close();
});
