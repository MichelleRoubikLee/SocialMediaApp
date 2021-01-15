const mongoose = require('mongoose');
const Joi = require('joi');
const CORS = require('cors');
const config = require('config');
const jwt = require('jsonwebtoken');
// const Email = require('mongoose-type-email'); //commented out as we believe it may be part of mongoose

//user schema goes here
const userSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 5, maxlength: 255 },
    joinDate: {type: Date, default: Date.now()},
    aboutMe: {type: String, maxlength: 500},
    email: {type: String, required: false},
    password: {type: String, required: false},
    friends: {type: Array},
    // comments: [commentSchema],
});
userSchema.methods.generateAuthToken = function () {
    return jwt.sign({_id: this._id, name: this.name, isAdmin: this.isAdmin}, config.get('jwtSecret'));
};
const User = mongoose.model('user',userSchema);
//validation goes here

function validateUser(user) {
    const schema = Joi.object({
        name: Joi.string().min(5).max(50).required(),
        joinDate: Joi.number(),
        aboutMe: Joi.string().min(5).max(255),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(1024).required(),
        //friends and comments are validated in separate process
    });
    return schema.validate(user);
}

//export goes here

exports.User = User;
exports.validateUser = validateUser;
exports.userSchema = userSchema;