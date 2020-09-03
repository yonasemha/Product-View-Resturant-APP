const User = require('../../models/authUserModel');
const bcrypt=require('bcryptjs');
const config =require("config");
const jwt= require('jsonwebtoken');


exports.addUserAuthToDataBase=(req,res,next)=>{
   const { name, email, password} = req.body;

   //validation simple
   if(!name || !email || !password){
       return res.status(400).json({msg: "Please enter all fields"});
   }

   //check for existing user
   User.findOne({email:email})
   .then(user=>{
       if(user) return res.status(400).json({massage: "user already exist"});

       const newUser = new User({ name, email, password });
       // create salt and hash

       bcrypt.genSalt(10, (err,salt)=>{
           bcrypt.hash(newUser.password,salt,(err,hash)=>{
               if(err) throw err;
               newUser.password = hash;
               newUser.save()
               .then(user=>{
                   jwt.sign(
                       {id: user.id},
                       config.get("jwtSecret"),
                       {expiresIn: 3600},
                       (err,token)=>{
                           if(err) throw err;
                           res.json({
                               token,
                               expiresIn:3600,
                            user: {
                                id: user.id,
                                name: user.name,
                                email: user.email
                            }
                        })
                       }
                   )
               })
               .catch(err=>res.json(err));
           })
       })
   })
}