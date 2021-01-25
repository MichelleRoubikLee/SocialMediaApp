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
        
        await user.save();
        const token = user.generateAuthToken();
        // const token = user.generateAuthToken();
        return res
            .header('x-auth-token', token)
            .header('access-control-expose-headers', 'x-auth-token')
            .send({_id: user._id, userName: user.userName, email: user.email});
      } catch (ex) {
        return res.status(500).send(`InternalServerError:${ex}`);
    }
});



//add a comment
router.put('/:userId/comment', auth, async (req, res) => {
    try{
        const { error } = validateComment(req.body);
        
        if(error) return res.status(400).send("ValidationError " + error);
        
        const comment = new Comment ({
            text: req.body.text
        });
        
        const user = await User.findByIdAndUpdate(
            req.params.userId,
            {$push: {comments: comment}},
            {new: true}
        );
        
        if (!comment) return res.status(400).send(`The user with id "${req.params.userid}" does not exist.`);
        
        console.log("hit1");

        await user.save();
        
        console.log("hit2");

        return res.send(user);

    } catch(err) {
        
        return res.status(500).send(`Internal Server Error: ${err}`);
    }
});

// add like to comment
router.put('/:userId/:commentId/like', auth, async (req, res) => {
    try{
        const user = await User.findByIdAndUpdate(req.params.userId);
        user.comments.filter(function(element){
            if(element._id == req.params.commentId){
                element.likes ++;
            }
        })
        console.log(user);

        await user.save();
        return res.send(user);

    } catch(ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

// add dislike to comment
router.put('/:userId/:commentId/dislike', auth, async (req, res) => {
    try{
        const user = await User.findByIdAndUpdate(req.params.userId);
        user.comments.filter(function(element){
            if(element._id == req.params.commentId){
                element.dislikes ++;
            }
        })
        console.log(user);

        await user.save();
        return res.send(user);

    } catch(ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

// delete a comment
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



