const mongoose = require('mongoose');
const Joi = require('joi');
const CORS = require('cors');
const config = require('config');
const multer = require('multer');

const pictureSchema = new mongoose.Schema({
    img: { data: Buffer, contentType: String },
    media: { binaryEncoding: base64, type: image/png }
})

let picture = mongoose.model('picture', pictureSchema);

function validatePicture(picture){
    const schema = Joi.object({
        img: Joi.buffer().Joi.string(),
        media: Joi.binaryEncoding().Joi.type(),
    })
    return schema.validate(picture);
}

exports.picture = picture;
exports.validatePicture = validatePicture;
exports.pictureSchema = pictureSchema;