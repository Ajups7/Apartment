const services = require("../services");

module.exports = {
    create: async (req, res, next) => {
        const resp = await services.reviews.create(req.body);
        return res.status(resp.status).send(resp.message);
    },
    upvote: async (req, res, next) => {
        const resp = await services.reviews.upvote(req.body);
        return res.status(resp.status).send(resp.message);
    }
}