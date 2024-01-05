const mongoose=require('mongoose')
const colors=require('colors')

const connectDB=async()=>{
    try{
     await mongoose.connect(process.env.MONGO_URI);
     console.log('connected to mongo database');

    }catch(error){
        console.log(`Mongodb database error ${error}`)
    }
};
module.exports=connectDB;
