const mongoose = require('mongoose');

const ArrayImage = new mongoose.Schema({
    title : {type : String},
    linkImage : {type : String}
})

const postImage = new mongoose.Schema({
    author : {type : String},
    ilustrator : {type : String},
    publisher : {type : String},
    linkArrayImage : [ArrayImage],
});

const PostImage = mongoose.model("PostImage", postImage);
module.exports = PostImage;