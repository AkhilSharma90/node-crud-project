const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const Admin = require("../models/adminModel");
const MASTER_KEY = process.env.MASTER_KEY;
const { registerValidation, loginValidation } = require("../middleware/validation");


// signup
exports.signUp = async (req, res, next) => {
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const emailExist = await Admin.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("email  already exist");

  try {
    const newAdmin = await createAdmin(req);
    const savedAdmin = await newAdmin.save(); 
    return res.status(200).send({ message: "User created successfully!", user: savedAdmin  });
  } catch (error) {
    return res.status(400).send(error);
  }
};

// login
exports.logIn = async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const foundAdmin = await Admin.findOne({ email: req.body.email }); //returns the first document that matches the query criteria or null
  if (!foundAdmin) return res.status(400).send({ message: "Email is not found" });

  try {
    const isMatch = await bcrypt.compareSync(req.body.password, foundAdmin.password);
    if (!isMatch) return res.status(400).send({ message: "invalid password" });

    // create and assign jwt
    const token = await jwt.sign({ _id: foundAdmin._id }, MASTER_KEY);
    
    return res.status(200).header("admin-token", token).send({ "admin-token": token });
  } catch (error) {
    return res.status(400).send(error);
  }
};
// Update admin
exports.updateAdmin = async (req, res) => {
  try {

    req.body.password = await bcrypt.hashSync(req.body.password, 10); //encrypt the password before updating
    const updatedAdmin = await Admin.findByIdAndUpdate(req.params.userId, { $set: req.body }, { new: true });

    if (!updatedAdmin) {
      return res.status(400).send({ message: "Could not update user" });
    }
    return res.status(200).send({ message: "User updated successfully", updatedUser});

  } catch (error) {
    return res.status(400).send({ error: "An error has occurred, unable to update user" });
  }
};

// Delete user
exports.deleteAdmin = async (req, res) => {
  try {
    const deletedAdmin = await Admin.findByIdAndDelete({ _id: req.params.userId}); // the `await` is very important here!

    if (!deletedAdmin) {
      return res.status(400).send({ message: "Could not delete user" });
    }
    return res.status(200).send({ message: "User deleted successfully", user: deletedAdmin});
  } catch (error) {
    return res.status(400).send({ error: "An error has occurred, unable to delete user" });
  }
};

exports.data = async (req, res) => {
  return res.json({
    posts: {
      title: "Admin Authentication",
      discription: "random data you can access because you\'re authenticated",
    },
  });
};

async function createAdmin(req) {
  const hashPassword = await bcrypt.hashSync(req.body.password, 10);
  return new Admin({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hashPassword,
    phone: req.body.phone,
  });
}