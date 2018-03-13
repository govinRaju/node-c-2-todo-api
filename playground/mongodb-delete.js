// const MongoClient = require('mongodb').MongoClient;
const{MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
   return  console.log('unable to mongodb server');
  }
  console.log('connected to mongo db server');

//deletemany
// db.collection('Todos').deleteMany({ text: 'Eat lunch'}).then((result)=>{
//   console.log(result);
// });
db.collection('IInfor').findOneAndDelete({
  _id:new ObjectID("5aa81c0876c4e47f130967c6")
}).then((results) =>{
  console.log(JSON.stringify(results,undefined , 2));
});
// db.collection('IInfor').deleteMany({name:'sanju'});

//deleteone
// db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
  // console.log(result);
// });

//find one And delete
// db.collection('Todos').findOneAndDelete({completed:'false'}).then((result)=>{
//   console.log(result);
// });

  // db.close();
});
