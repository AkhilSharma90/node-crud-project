exports.createCategory = async (req, res, next) => {
    return res.status(200).send({message:"hitting the create category route"})
}

exports.getCategories = async (req, res, next) => {
    return res.status(200).send({message:"hitting the get categories route"})
}