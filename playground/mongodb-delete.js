//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect');
    }
    console.log('Connected.');

    //db.collection('Todos').deleteMany({text:'Eat launch'}).then((res) => {
      //  console.log(res);
    //});

    //db.collection('Todos').deleteOne({text:'Eat launch'}).then((res) => {
      //  console.log(res);
    //});

    //db.collection('Todos').findOneAndDelete({completed:false}).then((res) => {
      //  console.log(res);
    //});



    //db.close();
});