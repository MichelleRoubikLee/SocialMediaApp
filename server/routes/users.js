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

router.post("/signup", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await models.User.create({
      username,
      password: hashedPassword
    });
    res.json(user);
  } catch (error) {
    res.status(400).json(error);
  }
});

// router.post("/login", async (req, res, next) => {
//   const { username, password } = req.body;
//   const users = await models.User.findAll({ where: { username } });
//   const user = users[0];
//   const response = await bcrypt.compare(password, user.password);
//   if (response) {
//     const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
//     res.json({ token });
//   } else {
//     res.status(401).json({});
//   }
// });

// router.get("/currentUser", authCheck, async (req, res, next) => {
//   const token = req.headers.authorization;
//   const decoded = jwt.verify(token, process.env.JWT_SECRET);
//   const id = decoded.userId;
//   const users = await models.User.findAll({ where: { id } });
//   const { username, bitBucketUsername } = users[0];
//   res.json({ username, bitBucketUsername });
// });

module.exports = router;

