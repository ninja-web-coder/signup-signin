const mongoose=require('mongoose');

// connect mongoDB
mongoose.connect('mongodb+srv://admin:log@cluster0.9db04.mongodb.net/log?retryWrites=true&w=majority');
const db=mongoose.connection;

// on error
db.on('error',console.error.bind(console,"Error connecting to DB: MONGODB"));
//on connection
db.once('open',function(){
    console.log('Connected to DB:: MONGODB');
});

// export db
module.exports=db;
