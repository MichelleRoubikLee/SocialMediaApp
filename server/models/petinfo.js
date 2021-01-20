const mongoose = require('mongoose');
const Joi = require('joi');
const CORS = require('cors');
const config = require('config');


const petInfoSchema = new mongoose.Schema({
    name: {type: String, required: true},
    aboutPetText: {type: String, maxlength: 500},
});

const PetInfo = mongoose.model('petinfo', petInfoSchema);

function validateInfo(petInfo) {
    const schema = Joi.object({
        name: Joi.string().required(),
        aboutPetText: Joi.string().max(500),
    });
    return schema.validate(petInfo);
}


exports.PetInfo = PetInfo;
exports.validateInfo = validateInfo;
exports.petInfoSchema = petInfoSchema;