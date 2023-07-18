var mongoose = require('mongoose');
const USER =require('../models/user').users




const doSignUp=(req,res)=>{

    console.log("hi i reached here ");
    USER.find({email:"kelvin@gmail.com"}).then(res=>{
        console.log("userCount",res);
    })
    USER({email:"kelvin@gmail.com",password:123}).save()
}

module.exports={
    doSignUp
}