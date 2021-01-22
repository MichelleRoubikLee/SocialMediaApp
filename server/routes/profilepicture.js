const { pictureSchema, validatePicture } = require("../models/profilepicture");
const express = require("express");
const router = express.Router();

router.post('/', async (req,res) => {
    try {
        const {er} = validatePicture(req.body);
        if(er)
            return res.status(400).send(er);

        info = new picture({
            // userId: req.body.userId,
            aboutPetText: req.body.aboutPetText,
            name: req.body.name
        });

        await info.save();

        return res.send(info);
    } catch (ex) {
        return res.status(500).send(`InternalServerError:${ex}`);
    }

})


module.exports = router;