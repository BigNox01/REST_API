const mongoose=require('mongoose')
// creating the schema
const PersonSchemaModel= new mongoose.Schema({
    name:String,
    email:{
        type:String,
        required:true,
    },
    age:Number,
    car:String
})
const Person=mongoose.model("Person",PersonSchemaModel)
module.exports=Person