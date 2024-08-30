const joi = require("joi")

module.exports = {
    createTaskSchema : async(req,res, next) => {
        try {
            const Schema = joi.object().keys({
                taskName : joi.string().required().min(3).max(30),
                taskDescription: joi.string().required(),
            }) 

            await Schema.validateAsync(req.body)
            next()
        } catch (error) {
            return res.send(error.message);
        }
    }
}