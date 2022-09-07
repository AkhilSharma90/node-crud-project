const User = require("../models/userModel");


exports.signUp = async(req, res, next) => {
   try{
      const newUser = await createUserObj(req);
      const savedUser = await User.create(newUser);
      return res.status(200).send({message:"User created successfully", user:savedUser})
   }catch(err){
      return res.status(400).send({error:"Unable to create user", error: err})
   }
}

exports.logIn = async(req, res) => {
   const foundUser = await User.findOne({email: req.body.email});
   if(!foundUser){
      res.status(400).send({error:"User doesn't exist"});
   }else{
    return res.status(200).send({message:"found user", user:foundUser})
   }
   }

exports.updateUser = async(req, res) => {
   return res.status(200).send({message:"hitting the update user route"})
}

exports.deleteUser = async(req, res) => {
    console.log("reached here");
    return res.status(200).send({message:"hitting the delete user route"})
}

exports.data = async(req, res) => {
   return res.status(200).send({message:"hitting the data route"})
}

const createUserObj = async (req) => {
   return{
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
   };
}