exports.signUp = async(req, res, next) => {
    return res.status(200).send({message:"hitting the signup route"})
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