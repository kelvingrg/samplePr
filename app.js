const express=require('express')
const app=express()
const hbs=('hbs')
const path=require('path')
const connectDB=require('./config/db')
const user=require('./Routes/user')
const admin=require('./Routes/admin')
app.set('view-engine','hbs')
app.set('views',path.join(__dirname,'pages'))
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}))

app.use('/',user)
app.use('/admin',admin)


connectDB()
app.listen(3000)