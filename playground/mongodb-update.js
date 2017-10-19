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

    // findOneAndUpdate - similar to findOneAndDelete
    // db.collection('Todos')
    // .findOneAndUpdate({_id: new ObjectID("59e87c926362f8b23524d0c9")}, {$set:{completed:true}}, {returnOriginal:false})
    // .then( (result) => {
    //   console.log(result);
    // });

    // CHALLENGE update name and set increment age
    db.collection('myOwnDocument')
    .findOneAndUpdate({_id: 123}, {$set:{name:'Andrew'}, $inc:{age:10}}, { returnOriginal:false })
    .then((result) => {
      console.log(result);
    }, (error) => {
      console.log("got problem leh", error);
    })

    // db.close();
});
