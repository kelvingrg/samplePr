const  mongoose  = require("mongoose");

const userschema=mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const users=mongoose.model('users',userschema)

module.exports={users}