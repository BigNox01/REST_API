const express = require("express");
const router = express.Router();
const Person = require("../models/user");

// getting all the users
router.get('/',async (req,res)=>{
    let user=await Person.find()
    res.send(user)
})
module.exports = router;