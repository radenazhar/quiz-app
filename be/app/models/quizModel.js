const mongoose = require('mongoose');

const questionArray = new mongoose.Schema({
    title : { type:String },
    answer : {type : String},
    options : [{ option : String, isCorrect : Boolean, id: String}],
    correctAnswer : {type : String},
})

const postQuiz = new mongoose.Schema({
    title:{type: String},
    questionArr : [questionArray],
})

const PostQuiz = mongoose.model("PostQuiz", postQuiz);
module.exports = PostQuiz;