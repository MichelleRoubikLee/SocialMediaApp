const express = require ('express');
const router = express.Router();
const multer = require('multer');

//define storage for the images

const storage = multer.diskStorage({
    //destination for files
    destination: function (request, file, callback) {
        callback(null, './uploads/images')
    },

//add back the extension
filename: function (request,file,callback) {
    callback(null, Date.now() * file.originalname)
}
});

// upload parameters for multer

const upload = multer({
    storage: storage
    
});

//route that handles a new post [uploading a picture in this case]
//find logged in user, put to update image property with image coming from multer upload
router.post('/image', upload.single('image'), async (request, response) =>{
    console.log(request.file.filename);
    let img = new img({
    img: request.file.filename,
    })
});

module.exports = router;