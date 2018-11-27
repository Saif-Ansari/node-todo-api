const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('unable to connect to server');
    }

    console.log('connected to mongo server');

    // db.collection('todos').insertOne({
    //     text: 'something to do',
    //     completed: false
    // },(err,result)=>{
    //     if(err){
    //         return console.log('error',err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });

    db.collection('users').insertOne({
        name:'saif',
        age: 24,
        location: 'Nagpur'
    },(err,result)=> {
        if(err){
            return console.log('error',err);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });
    db.close();
})
