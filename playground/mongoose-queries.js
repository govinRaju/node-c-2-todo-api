const {ObjectID} =require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const{User}  = require('./../server/models/user');

// var id = '5aab3b8fe5653fcac56b97ee';
//
// if(!ObjectID.isValid()){
//   console.log('ID not valid');
// }

// Todo.find({
//   _id : id
// }).then((users)=>{
//   console.log('users',users);
// });
//
// Todo.findOne({
//   _id:id
// }).then((todo)=>{
//   console.log('Todo',todo);
// });

// Todo.findById(id).then((todo)=>{
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id' ,todo);
// }).catch((e)=>console.log(e));

User.findById('5aab4cede5653fcac56b98db').then((user)=>{
  if(!user){
    return console.log('Unable to find user');
  }

  console.log(JSON.stringify(user,undefined,2));
},(e)=> {
  console.log(e);

});
