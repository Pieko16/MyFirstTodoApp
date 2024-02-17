const modelschema = require("../models/auth.js")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

const register = async (req,res) => {
    try{
        const {username,email,password} = req.body;
        const user = await modelschema.findOne({email}) 
        if(user){
            return res.status(500).json({message: "Bu email kullanimda"})
        }
       if(password.length < 6){
        return res.status(500).json({message: "Parola 6 harften uzun olmalı"})
       }
       const pass_hash = await bcrypt.hash(password,12)
       const newUser = await modelschema.create({username,email,password : pass_hash})
       
       const usertoken = await jwt.sign({id : newUser.id},process.env.Secret_token,{expiresIn : "1h"});

       res.status(201).json({
        status: 200,
        newUser,
        usertoken
       })

       }catch(err){
        return res.status(500).json({message: err.message})
       }
}


const login = async (req,res) => {

    try{

        const {email,password} = req.body;
        const user = await modelschema.findOne({email})
        if(!user){
            return res.status(500).json({message : "Boyle bir kullanici bulunamadi"})
        }
        const comparePassword = await bcrypt.compare(password,user.password)
        if(!comparePassword){
            return   res.status(500).json({message : "Yanlis parola"})
        }
        const userToken = jwt.sign({id : user.id} , process.env.Secret_token,{expiresIn : "1h"})

        res.status(200).json({status : 200 , user,userToken})

    }catch(err){
        return res.status(500).json({message : err.message})
    }

}

module.exports = {
    login,register
}