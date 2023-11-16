const Question = require("../models/quizModel");


exports.createQuestion = (body) => {
    return Question.create(body);
}

exports.getQuestion = () => {
    return Question.find();
}

exports.getQuestionById = (id) => {
    return Question.findById(id);
}

exports.deleteQuestion = (id) => {
    console.log(id)
    return Question.findByIdAndDelete(id);
}

exports.updateQuestion = (id, body) => {
    return Question.findByIdAndUpdate(id, body, {useFindAndModify : true});
}