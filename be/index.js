const express = require("express")
const cors = require("cors")
const mongoose = require('mongoose')
const quizRoute = require('./app/routes/quizRoutes')
const uploadRoutes = require('./app/routes/uploadRoutes');
const app = express();

const corsOptions = {
    origin: "*"
}


//register cors middleware
app.use(cors(corsOptions));
app.use(express.json());


mongoose.connect('mongodb://127.0.0.1:27017/quiz_apps', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then( () => console.log('Connected to mongoDb'))
    .catch(err => console.error('Error connection to MongoDB', err))

app.use('/questions', quizRoute)
app.use('/uploads', uploadRoutes )
// const storage = multer.diskStorage({
//     destination : function(req,file,cb){
//         return cb(null, "./uploads")
//     },
//     filename : (req, file, cb) => {
//         return cb(null, `${Date.now()}_${file.originalname}`)
//     } 

// })
/*const upload = multer({ storage });


app.post("/uploads", upload.array("file"), (req,res) => {
    console.log(req.files)
    res.send('File upload succesfull!')
});
*/
console.log(mongoose.version);
const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=> {
    console.log(`Server berjalan di port ${PORT}`);
})
