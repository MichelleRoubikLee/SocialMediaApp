const mongoose = require('mongoose');
const Joi = require('joi');
const { join } = require('path');
const config = require('config');

const commentSchema = new mongoose.Schema({
    // postId: {type: String, required: true},
    text: {type: String, required: true},
    postDate: {type: Date, default: Date.now()},
});

const comment = mongoose.model('', commentSchema)

function validateComment(comment){
    const schema = Joi.object({
        // postId: Joi.string().required(),
        text: Joi.string().required(),
    });
    return schema.validate(comment);
}

exports.comment = comment;
exports.validateComment = validateComment;