// const { number } = require('joi');
const mongoose = require('mongoose');
const { commentSchema } = require('../../../youtubeclone/dcc-library/YouTubeClone/backend/models/comment');
// const Joi = require('joi');

//user schema goes here
const userSchema = new mongoose.Schema({
    userId: {type: Number, required: true},
    name: {type: String, required: true, minlength: 5, maxlength: 255 },
    joinDate: {type: Date, default: Date.now()},
    aboutMe: {type: String, maxlength: 500},
    friends: {type: Array},
    comments: [commentSchema],
});

const User = mongoose.model('user',userSchema);
//validation goes here

//export goes here

exports.User = User;
exports.userSchema = userSchema;