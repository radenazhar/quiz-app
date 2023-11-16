const express = require("express");
const quizController = require('../controller/quizController');
const router = express.Router();


router
    .route("/")
    .post(quizController.createQuestion)
    .get(quizController.getAllQuestion)
    
router
    .route("/:id")
    .get(quizController.getQuestionById)
    .delete(quizController.deleteQuestion)
    .put(quizController.updateQuestion);
    


module.exports = router;