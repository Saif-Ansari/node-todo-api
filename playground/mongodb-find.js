// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectId} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('unable to connect to server');
    }

    console.log('connected to mongo server');

    // db.collection('todos').find({completed:true}).toArray().then((docs)=>{
    //     console.log('todos');
    //     console.log(docs);
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('Error',err);
    // })
  
    //using id for searching
    // db.collection('todos').find({_id:new ObjectId('5bfd5deaf56669dc32507132')}).toArray().then((docs)=>{
    //     console.log('todos');
    //     console.log(docs);
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('Error',err);
    // })

    //using count
    //  db.collection('todos').find().count().then((count)=>{
    //     console.log(`todos count: ${count}`);
    // },(err)=>{
    //     console.log('Error',err);
    // })
    // db.close();
    //assignment
    db.collection('users').find({name:'saif'}).toArray().then((docs)=>{
        console.log('todos');
        // console.log(docs);
        console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        console.log('Error',err);
    })
})
