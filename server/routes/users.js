const { Comment, validateComment} = require('../models/comment.js');
const { User, validateUser } = require("../models/user");
const bcrypt = require('bcrypt');
const auth = require('../middleware/auth');
const express = require("express");
const router = express.Router();


//get all users
router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        return res.send(users);
    } catch (ex) {
        return res.status(500).send(`Internal server Error: ${ex}`);
    }
});

//get all friend users



//register new user
router.post('/new', async (req,res) => {
    try {
        const{error}=validateUser(req.body);
        if (error)
            return res.status(500).send(error.details[0].message);
            let user = await User.findOne({ email:req.body.email});
            if (user) return res.status(400).send('User already registered.');
        const salt = await bcrypt.genSalt(10);
        user = new User ({
            userName: req.body.userName,
            // joinDate: req.body.joinDate, -- may want to switch this to Date.now() and pass in on registration
            email: req.body.email,
            password:await bcrypt.hash(req.body.password, salt),
        });
        console.log(user);
        await user.save();
        const token = user.generateAuthToken();
        return res
            .header('x-auth-token', token)
            .header('access-control-expose-headers', 'x-auth-token')
            .send({_id: user._id, userName: user.userName, email: user.email, password: user.password});
      } catch (ex) {
        return res.status(500).send(`InternalServerError:${ex}`);
    }
});


//get all posts
// router.get('/', async (req, res) => {
//     try{
//         const postComment = await comment.find();
//         if(!postComment)
//         return res.status(400).send(`The comment with id "${req.params}" does not exist.`);
//         return res.send(postComment);
//     } catch (ex){
//         return res.status(500).send(`Internal Server Error: ${ex}`);
//     }
// }
// );

// //get comment by comment id
// router.get('/:commentId', async (req, res) => {
//     try{
//         const postComment = await comment.find({commentId: req.params._id});
//         console.log(postComment)
//         if(!postComment)
//         return res.status(400).send(`The comment with id "${req.params.id}" does not exist.`);
//         return res.send(postComment);
//     } catch (ex){
//         return res.status(500).send(`Internal Server Error: ${ex}`);
//     }
// });



//add a comment
router.put('/:userId/comment', async (req, res) => {
    try{
        const{ error } = validateComment(req.body);
        if(error) return res.status(400).send(error);

        const comment = new Comment ({
            text: req.body.text
        });

        const user = await User.findByIdAndUpdate(
            req.params.userId,
            {
                comments: comment
            },
            {new: true}
        );

        if (!comment) return res.status(400).send(`The user with id "${req.params.id}" does not exist.`);
        await user.save();
        return res.send(user);
    } catch(ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

//add like to comment
// router.put('/:commentId', async (req, res) => {
//     try{

//         const comment = await Comment.findByIdAndUpdate ({
//             text: req.body.text
//         });

//         if (!comment) return res.status(400).send(`The user with id "${req.params.id}" does not exist.`);
//         await user.save();
//         return res.send(user);
//     } catch(ex) {
//         return res.status(500).send(`Internal Server Error: ${ex}`);
//     }
// });

//delete a comment
// router.delete('/:id', async (req, res) => {
//     try{
//         const comments = await comment.findByIdAndRemove(req.params.id);
//         if (!comment)
//             return res.status(400).send(`The comment with id "${req.params.id}" does not exist.`);
//         return res.send(comment);
//     } catch(ex){
//         return res.status(500).send(`Internal Server Error: ${ex}`);
//     }
// });


module.exports = router;



