import express from 'express' //backend framework
import mongoose from 'mongoose' //It collect backend database
import cors from 'cors'
import dotenv from 'dotenv'

import userRoutes from './routes/users.js'
import questionsRoutes from './routes/Questions.js'
import answerRoutes from './routes/Answers.js'

const app = express();
dotenv.config();
app.use(express.json({limit:"30mb", extended:true}))
app.use(express.urlencoded({limit:"30mb", extended:true}))
app.use(cors());

app.get('/',(req, res) => {
     res.send("This is a Stack Overflow Clone API")
})

app.use('/user', userRoutes)
app.use('/questions', questionsRoutes)
app.use('/answer', answerRoutes)

const PORT= process.env.PORT || 5000

const DATABASE_URL = process.env.CONNECTION_URL
mongoose.connect( DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true } )
     .then(() => app.listen(PORT, () => {console.log(`server running on port ${PORT}`)} ))
     .catch((err) => console.log(err.message))