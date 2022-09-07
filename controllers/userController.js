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


   exports.getAllUsers = async(req, res) => {
      const allUsers = await User.find({});
      if(!allUsers){
         res.status(400).send({"error":"no users found"})
      }else{
         return res.status(200).send({message:"here are the found users:", allUsers})
      }
   }

exports.updateUser = async(req, res) => {
   try{
   const updatedUser = await User.findByIdAndUpdate(req.params.userId, {$set: req.body}, {new: true})
   if (!updatedUser) {
      return res.status(400).send({ message: "Could not update user" });
    }
    return res.status(200).send({ message: "User updated successfully", updatedUser });

  } catch (error) {
    return res.status(400).send({ error: "An error has occurred, unable to update user" });
  }
}

exports.deleteUser = async(req, res) => {
    try{
      const deletedUser = await User.findByIdAndDelete(req.params.userId);
      if(!deletedUser){
         return res.status(400).send({message:"could not delete user, seems like a database issue"})
      }else{
         return res.status(200).send({message:"user deleted successfully!"})
      }
   }catch(error){
      return res.status(400).send({error:"an error occured, unable to delete user"})
   }
    
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