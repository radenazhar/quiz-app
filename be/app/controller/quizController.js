const { restart } = require('nodemon');
const quizServices = require('../services/quizServices')

exports.createQuestion = async(req, res) => {
    try {
        const newQuestion = await quizServices.createQuestion(req.body);
        res.status(200).json(newQuestion);
    } catch (error) {
        res.status(400).json(error);
    }
}


exports.getAllQuestion = async(req, res) => {
    try {
        const newQuestion = await quizServices.getQuestion();
        res.status(200).json({
            status : 200,
            message : "success",
            data : newQuestion
        });
    } catch (error) {
        res.status(400).json({error : "Bad Request"})
    }
}

exports.getQuestionById = async(req, res) => {
    try {
        const newQuestion = await quizServices.getQuestionById(req.params.id);
        res.status(200).json({
            status : 200,
            message : "success",
            data : newQuestion
        })
    } catch (error) {
        res.status(400).json({error : "Bad Request"})
    }
}

exports.deleteQuestion = async(req, res) => {
    try {
        const deletedQuestion = await quizServices.deleteQuestion(req.params.id)
        res.status(200).json({
            status : 200,
            message : "success",
            data : deletedQuestion
        })
        res.status(200).json({message : "Success"})
    } catch (error) {
        res.status(400).json({error : "Bad Requiest"});
    }
}

exports.updateQuestion = async(req,res) => {
    try {
        const newQuestion = await quizServices.updateQuestion(req.params.id, req.body)
        res.status(200).json({
            status : 200,
            message : "success",
            data : newQuestion
        })
    } catch (error) {
        res.status(400).json({error : "Bad Requiest"});
    }
}