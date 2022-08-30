exports.signUp = async(req, res, next) => {
    return res.status(200).send({message:"hitting the admin signup route"})
}

exports.logIn = async(req, res) => {
    return res.status(200).send({message:"hitting the admin login route"})
}

exports.updateAdmin = async(req, res) => {
   return res.status(200).send({message:"hitting the update admin route"})
}

exports.deleteAdmin = async(req, res) => {
    console.log("reached here");
    return res.status(200).send({message:"hitting the delete admin route"})
}

exports.data = async(req, res) => {
   return res.status(200).send({message:"hitting the admin data route"})
}