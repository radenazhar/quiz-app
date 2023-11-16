const imageServices = require('../services/imageServices');

exports.insertImage = async(req,res) => {
    try {
        const newImage = await imageServices.insertImages(req.body);
        res.status(200).json(newImage);
    } catch (error) {
        res.status(400).json({error : "Bad request"})
    }
}

exports.getImage = async(req, res) => {
    try {
        const newImage = await imageServices.getImages();
        res.status(200).json({
            status : 200,
            message : "success",
            data : newImage
        });
    } catch (error) {
        res.status(400).json({error : "Bad request"});
    }
}