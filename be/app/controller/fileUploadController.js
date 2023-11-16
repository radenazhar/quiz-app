const multer = require('multer');
const storage = multer.diskStorage({
    destination : function(req,file,cb){
        return cb(null, "./uploads")
    },
    filename : (req, file, cb) => {
        return cb(null, `${Date.now()}_${file.originalname}`)
    } 

})

const upload = multer({ storage });

exports.upload = (req, res) => {
    upload.array('file')(req, res, (err) => {
        if (err) {
          console.error(err);
          return res.status(500).send('Error uploading file');
        }
    
        console.log(req.files);
        return res.send('File upload successful!');
})
}