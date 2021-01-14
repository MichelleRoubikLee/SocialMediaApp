const mongoose = require('mongoose');
const Joi = require('joi');
const Email = require('mongoose-type-email');

//user schema goes here
const userSchema = new mongoose.Schema({
    userId: {type: Number, required: true},
    name: {type: String, required: true, minlength: 5, maxlength: 255 },
    joinDate: {type: Date, default: Date.now()},
    aboutMe: {type: String, maxlength: 500},
    email: {type: mongoose.SchemaTypes.Email},
    friends: {type: Array},
    // comments: [commentSchema],
});

const User = mongoose.model('user',userSchema);
//validation goes here

function validateUser(user) {
    const schema = Joi.object({
        userId: Joi.number().required(),
        name: Joi.number(),
        joinDate: Joi.number(),
        aboutMe: Joi.string().min(5).max(255).required(),
        email: Joi.string().email(),
        //friends and comments are validated in separate process
    });
    return schema.validate(user);
}

//export goes here

exports.User = User;
exports.userSchema = userSchema;