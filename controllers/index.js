module.exports = controllers = {
    users: { create: require("./users").create},
    reviews: {
        create: require("./reviews").create,
        upvote: require("./reviews").upvote
    }
};