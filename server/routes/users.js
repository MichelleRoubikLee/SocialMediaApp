const { User, validateUser } = require("../models/user");
const bcrypt = require('bcrypt');
const auth = require('../middleware/auth');
const express = require("express");
const router = express.Router();

//endpoints and route handlers go here

//protected routes here
// router.post('/:userId/shoppingcart/:productId', auth, async (req, res) => {  //may want to change these to comments?
// router.put('/:userId/shoppingcart/:productId', auth, async (req, res) => {  //starting page 16 tutorial
// router.delete('/:userId/shoppingcart/:productId', auth, async (req, res) => { 


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
        const{error}=validateUser(req.body);
        if (error)
            return res.status(400).send(error.details[0].message);

            let user = await User.findOne({ email:req.body.email});
            if (user) return res.status(400).send('User already registered.');
        const salt = await bcrypt.genSalt(10);
        user = new User ({
            name: req.body.name,
            // joinDate: req.body.joinDate, -- may want to switch this to Date.now() and pass in on registration
            email: req.body.email,
            password:await bcrypt.hash(req.body.password, salt),
        });

        await user.save();

        const token = user.generateAuthToken();

        return res
          .header('x-auth-token', token)
          .header('access-control-expose-headers', 'x-auth-token')
          .send({_id: user._id, name: user.name, email: user.email});

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

