exports.createOrder = async(req, res, next) => {
    return res.status(200).send({message:"You've hit create order route"})
}

exports.getOrder = async (req, res, next) => {
    return res.status(200).send({message:"you've hit the get order by id route"})
}

exports.getAllOrders = async (req, res, next) => {
    return res.status(200).send({message:"you've hit the get all orders route"})
}