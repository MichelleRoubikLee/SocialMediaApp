const {comment, validateComment} = require('../models/comment.js');
const express = require('express');
const { required, validate } = require('joi');
const router = express.Router();

outer.get('/:id', async (req, res) => {
    try{
        const postComment = await comment.find({videoId: req.params.id});
        console.log(postComment)
        if(!postComment)
        return res.status(400).send(`The comment with id "${req.params.id}" does not exist.`);
        return res.send(postComment);
    } catch (ex){
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

router.get('/', async (req, res) => {
    try{
        const postComment = await comment.find();
        console.log(postComment)
        if(!postComment)
        return res.status(400).send(`The comment with id "${req.params}" does not exist.`);
        return res.send(postComment);
    } catch (ex){
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
}
);

router.post('/', async (req, res) => {
    try{
        const { error } = validateComment(req.body);
        if(error)
            return res.status(400).send(error);

        const comments = new comment({
            videoId: req.body.videoId,
            text: req.body.text,
        });
        console.log(req.body);

await comment.save();

return res.send(comment);
} catch(ex){
    console.log(ex);
 return res.status(500).send(`Internal Server Error: ${ex}`);
}
});

router.put('/:id', async (req, res) => {
    try{
        const{ error } = validateComment(req.body);
        if(error) return res.status(400).send(error);

        const comments = await comment.findByIdAndUpdate(
            req.params.id,
            {
                videoId: req.body.videoId,
                text: req.body.text,
            },
            {new: true}
        );
        if (!comment)
            return res.status(400).send(`The comment with id "${req.params.id}" does not exist.`);

            await comment.save();

            return res.send(comment);
          } catch(ex) {
              return res.status(500).send(`Internal Server Error: ${ex}`);
          }
});

router.delete('/:id', async (req, res) => {
    try{

        const comments = await comment.findByIdAndRemove(req.params.id);

        if (!comment)
            return res.status(400).send(`The comment with id "${req.params.id}" does not exist.`);

        return res.send(comment);
    } catch(ex){
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});


module.exports = router;
