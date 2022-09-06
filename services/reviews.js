const { knex } = require("../database");

module.exports = {
    create: async (data) => { 

        
            const user = await knex("reviews").select("*").where("user_id", data.user_id);
    
            if (!user) {
                return {
                    status: 400,
                    message: `User with id - ${data.user_id} doesnt exist`,
                };
            }
    
            const resp = await knex("reviews").insert(data);
            return {
                status: 200,
                message: "Review Created",
                id: resp[0],
            };
        

    }, 

    fetch: async () => {
        const reviews = await knex("reviews").select("*");

        if (!reviews) {
            return {
                status: 400,
                message: "No Review exist",
            }; 
        }

        return {
            status: 200,
            message: "Review Fetched",
            data: reviews,
        };
    },

    upvote: async (data) => {
        const review = await knex("reviews")
        .select("*")
        .where("id", data.review_id);

        if (!review) {
            return {
                status: 400,
                message: `Review with id - ${data.review_id} doesnt exist`,
            };
        }

        const upvoteUpdate = await knex("reviews")
        .select("*")
        .where("id", data.review_id)
        .update({
            upvote: review[0].upvote + 1
        });

        if (upvoteUpdate) {
            return {
                status: 200,
                message: "Review Upvoted",
            };
        }   else {
            return {
                status: 400,
                message: "Failed"
            };
        }
    }
};