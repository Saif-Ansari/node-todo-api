var express = require('express');
var bodyparser = require('body-parser');

var {mongoose} = require('../server/db/mongoose');
var {Todo} = require('../server/models/todo');
var {User} = require('../server/models/user');


var app = express();

app.use(bodyparser.json());

app.post('/todos',(req,res)=>{
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc)=> {
        res.send(doc);
    },(e)=>{
        res.status(400).send(e);
    })
})

app.listen(3000, ()=> {
    console.log('app is up on port 3000');
})