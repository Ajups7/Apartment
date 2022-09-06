const express = require("express");
const Joi = require("joi");
const controllers = require("../controllers");

const {
    createUserValidator,
    createReviewValidator,
    reviewUpvoteValidator,
} = require("../validators");

const router = express.Router();

router.post("/users", createUserValidator, controllers.users.create);
router.post("/reviews", createReviewValidator, controllers.reviews.create);
router.put("/reviews/:id/upvote", reviewUpvoteValidator, controllers.reviews.upvote);

module.exports = router;