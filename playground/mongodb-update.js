// const MongoClient = require('mongodb').MongoClient;
const{MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
   return  console.log('unable to mongodb server');
  }
  console.log('connected to mongo db server');

// db.collection('Todos').findOneAndUpdate({
//   _id:new ObjectID('5aa7ff3176c4e47f13095e2a')
// },{
//   $set:{
//     completed:true
//   }
// },{
//   returnOriginal:false
// }).then((result)=>{
//   console.log(result);
// });


db.collection('IInfor').findOneAndUpdate({
  _id:new ObjectID('5aa8205e76c4e47f130969a1')
},{
  $set:{
    name:'Andrew'

},
$inc: {
  age:1
}
},{
  returnOriginal:false
}).then((result)=>{
  console.log(result);
});
  // db.close();
});
