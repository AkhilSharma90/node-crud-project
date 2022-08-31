const User = require("../models/userModel");

const {registerValidation, loginValidation} = require("../middleware/validation");

exports.signUp = async(req, res, next) => {
   const { error, value } = registerValidation(req.body);
   if (error) return res.status(400).send(error.details[0].message);

  
}

exports.logIn = async(req, res) => {
    return res.status(200).send({message:"hitting the login route"})
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