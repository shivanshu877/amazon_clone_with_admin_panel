const express = require("express");
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const authRouter = express.Router();
authRouter.post("/api/signup" , async (req, res) => {
    try {
        const { email, name, password } = req.body;
    console.log(email);
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ msg: 'already exist' });
    }
    let user = new User({
        email,
        password,
        name
    });
    user = await user.save();
    res.json(user);
    } catch (e) {
        res.status(500).json({error :e.message});
    }
});

authRouter.post("/api/signin" , async (req,res) => {
 try {
    const {email,password} = req.body;
    const user =  await  User.findOne({email}); 
    if(!user) {
        return res 
        .status(400)
        .json({msg : 'User with this  email does not exist!'});
    }
   
    if(password != user.password) {
        return res.status(400).json({msg : "Incorrect Password"});
    }
    const token = jwt.sign({id:user._id} , "passwordKey");
    res.json({token , ...user._doc});
 } catch (e) {
      res.status(500).json({ error :e.message});
 }
});

module.exports = authRouter;
