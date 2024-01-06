const express=require('express')
const router=express.Router()
const Person=require("../models/user")


router.delete('/delete/:id',async (req,res)=>{
    await Person.findByIdAndDelete(req.params.id)
    res.sendStatus(204);
})
module.exports=router