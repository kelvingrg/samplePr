const express=require('express')
const router=express.Router()
const {doSignUp} =require('../controllers/userController')


router.get('/',doSignUp)

module.exports=router