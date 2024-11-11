const mongoose = require("mongoose")
const connnect = mongoose.connect(process.env.MONGO_URI)
connnect.then(()=>{
    console.log("Database connected Successfully")
})
.catch(()=>{
    console.log("Unable to connect to DataBase");
})


const LoginSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
})


const collection = new mongoose.model("users", LoginSchema);

module.exports = collection;