// setting up the express server
const express=require('express')
const app=express()
app.use(express.json())
const port=9000
// importing the DOTenv file
require('dotenv').config()
// importing and using the routes
const GetUser=require("./routes/GET")
const DeleteUser=require("./routes/DELETE")
const UpdateUser=require("./routes/PUT")
const AddUser=require("./routes/POST")
app.use('/',GetUser)
app.use('/',UpdateUser)
app.use('/',DeleteUser)
app.use('/',AddUser)
const mongoose = require('mongoose');
// connecting the mongoDB server
async function connectDB(){
    try{
    await mongoose.connect(process.env.URL)
    console.log("connected")
    } catch(e){
        console.error(e)
    }
}
connectDB()
// starting the server
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})