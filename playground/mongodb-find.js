// const MongoClient = require('mongodb').MongoClient;
const{MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
   return  console.log('unable to mongodb server');
  }
  console.log('connected to mongo db server');

db.collection('Infor').find({name:'sanju'}).toArray().then((docs) =>{
   // console.log(`Todos count ${count}`);
   console.log(JSON.stringify(docs ,undefined ,2));
// } ,(err)=> {
//   console.log('Unable to fetch todos',err);
});

  // db.close();
});
