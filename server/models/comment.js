const mongoose = require('mongoose');
const Joi = require('joi');
const { join } = require('path');
const config = require('config');

const commentSchema = new mongoose.Schema({
    text: {type: String, required: true},
    likes: {type: Number, default: 0},
    dislikes: {type: Number, default: 0},
    postDate: {type: Date, default: Date.now()},
});

const Comment = mongoose.model('', commentSchema)

function validateComment(comment){
    const schema = Joi.object({
        likes: Joi.number(),
        dislikes: Joi.number(),
        text: Joi.string().required(),
    });
    return schema.validate(comment);
}

exports.Comment = Comment;
exports.validateComment = validateComment;
exports.commentSchema = commentSchema;