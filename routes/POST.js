const express = require("express");
const router = express.Router();
const Person = require("../models/user");

// posting a new user
router.post('/',async (req,res)=>{
    const user= new Person(req.body)
    await user.save()
    res.send(user)
})
module.exports = router;