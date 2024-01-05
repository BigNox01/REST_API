const express = require("express");
const router = express.Router();
const Person = require("../models/user");

// updating a user
router.put('/:id',async (req,res)=>{
    const user= await Person.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.send(user)
})
module.exports = router;