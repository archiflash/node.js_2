//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect');
    }
    console.log('Connected.');
/*
    db.collection('Todos').insertOne({
        text: 'Something',
        completed: false
    }, (err, result) => {
       if (err) {
           return console.log('Unable to insert', err);
       }

       console.log(JSON.stringify(result.ops, undefined, 2))
    });
    */
/*
    db.collection('Users').insertOne({
        name: 'Archi',
        age: 25,
        location: 'Samui'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
        console.log(result.ops[0]._id.getTimestamp());
    });
*/
    db.close();
});