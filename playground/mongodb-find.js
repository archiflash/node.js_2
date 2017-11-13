//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect');
    }
    console.log('Connected.');
/*
    db.collection('Todos').find({
        _id: new ObjectID('5a01c60d8286142f1c09cae3')
    }).toArray().then((docs)=> {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetcj Todos', err);
    });
    */
/*
    db.collection('Todos').find().count().then((count)=> {
        console.log(`Todos count: ${count}`);

    }, (err) => {
        console.log('Unable to fetcj Todos', err);
    });
    */
    db.collection('Users').find({name: 'Archi'}).count().then((count)=> {
        console.log(`Result count: ${count}`);
    }, (err) => {
        console.log('Unable to fetcj Todos', err);
    });
    db.collection('Users').find({name: 'Archi'}).toArray().then((docs)=> {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetcj Todos', err);
    });
    db.close();
});