const Images = require("../models/imageModel");

exports.insertImages = (body) => {
    return Images.create(body);
}

exports.getImages = () => {
    return Images.find();
}

