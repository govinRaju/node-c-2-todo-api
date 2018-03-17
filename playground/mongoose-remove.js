const {ObjectID} =require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const{User}  = require('./../server/models/user');

// Todo.remove({}).then((result)=>{
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findOneAndRemove({_id:'5aad10dd616c1dc44f499289'}).then((todo)=>{
//
// });

// Todo.findByIdAndRemove
Todo.findByIdAndRemove('5aad10dd616c1dc44f499289').then((todo) =>{
console.log(todo);
});
