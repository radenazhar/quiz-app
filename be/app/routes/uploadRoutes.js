const express = require('express');
const fileUploadController = require('../controller/fileUploadController')
const router = express.Router();



router
    .route("/")
    .post(fileUploadController.upload);

module.exports = router;