const {mongoose} = require('../server/db/mongoose');
const {ObjectID} = require('mongodb');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// Todo.remove({}).then((result)=> {
//     console.log(result);
// });


// Todo.findByIdAndRemove({_id:'5bfe56297d291ad007721e9c'}).then((todo)=>{
//     console.log(todo);
// })
// Todo.findByIdAndRemove('5bfe56297d291ad007721e9c').then((todo)=>{
//     console.log(todo);
// })