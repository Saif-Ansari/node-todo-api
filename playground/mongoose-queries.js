const {mongoose} = require('../server/db/mongoose');
const {ObjectID} = require('mongodb');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// var id =  '5bfe56297d291ad007721e9c';

var userid='5bfe6052a47080c422a2a3a3';

// if(!ObjectID.isValid(id)){
//     console.log('id is invalid');
// }
// console.log('demo');
// Todo.find({
//     _id:id
// }).then((todos)=>{
//     console.log('Todos: ',todos);
// });

// Todo.findOne({
//     _id:id
// }).then((todo)=>{
//     console.log('Todp: ',todo);
// });

// Todo.findById(id).then((todos)=>{
//     if(!todos){
//         return console.log('Id not found');
//     }
//     console.log('Id Method ',todos);
// }).catch((e)=>console.log(e));

User.findById(userid).then((todos)=>{
    if(!todos){
        return console.log('Id not found');
    }
    console.log('Id Method ',todos);
}).catch((e)=>console.log(e));