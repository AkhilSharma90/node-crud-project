exports.createProduct = async (req, res, next) => {
    return res.status(200).send({message:"You've hit the create prodcut route"})
}

exports.getProducts = (req, res, next) => {
    return res.status(200).send({message:"You've hit the get all products route"})
}

