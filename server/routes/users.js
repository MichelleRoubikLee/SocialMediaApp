const { User, validate } = require("../models/user");
const express = require("express");
const router = express.Router();

//endpoints and route handlers go here

//get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    return res.send(users);
  } catch (ex) {
    return res.status(500).send(`Internal server Error: ${ex}`);
  }
});

//put new user
router.post('/new', async (req,res) => {
    try {
        // const{error}=validate(req.body);
        // if (error)
        //     return res.status(400).send(error);

        const user = new User ({
            userId: req.body.userId,
            name: req.body.name,
            joinDate: req.body.joinDate,
            aboutMe: req.body.aboutMe,
            email: req.body.email,
            friends: [],
            comments: [],
        });

        await user.save();
        
        return res.send(user);
    } catch (ex) {
        return res.status(500).send(`InternalServerError:${ex}`);
    }
});

module.exports = router;

