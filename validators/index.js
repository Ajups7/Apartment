// users can sign up
// users can post reviews
// 

const Joi = require("joi");
 

module.exports = {
    createUserValidator: (req, res, next) => {
        const schema = Joi.object({
            first_name: Joi.string().alphanum().min(3).max(30).required(),
            last_name: Joi.string().alphanum().min(3).max(30).required(),
            email: Joi.string().email({
              minDomainSegments: 2,
              tlds: { allow: ["com", "net"] },
            }),
            password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
            repeat_password: Joi.ref("password"),
            dob: Joi.date().max("2004-1-1"),
            phonenumber: Joi.string().pattern(new RegExp("^[0-9]{10}$")).required(),
          });

          const result = schema.validate(req.body);
    if (result.error) {
      return res.status(400).send(result.error.details[0].message);
    }
    
    // res.send(req.body)

    // console.log(result);
    next();
    },

    createReviewValidator: (req, res, next) => {
        //description, location, user_id, type, uploads
        const schema = Joi.object({
          user_id: Joi.number(),
         description: Joi.string(),
          location: Joi.string(),
          uploads: Joi.string(),
          type: Joi.string().valid('landlord', 'amenity', 'environment of the apartment' )
        }); 

        const result = schema.validate(req.body);
    if (result.error) {
      return res.status(400).send(result.error.details[0].message);
    }
    console.log(result)
    next();
},


    reviewUpvoteValidator: (req, res, next) => {
        // review_id, upvote
        const schema = Joi.object({
          review_id: Joi.number(),
          upvote: Joi.number()
        });
    
        const result = schema.validate(req.body);
        if (result.error) {
          return res.status(400).send(result.error.details[0].message);
        }
    
        next();
},

};