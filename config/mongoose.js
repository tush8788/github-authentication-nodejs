const mongoose=require('mongoose');

mongoose.set('strictQuery',false);

mongoose.connect('mongodb://localhost/GithubAuth');

const db=mongoose.connection;

db.on('error',()=>{console.log("error in connect mongodb")});

db.once('open',()=>{console.log("DB connect successfully")});

module.exports=db;