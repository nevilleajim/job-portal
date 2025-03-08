import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/db.js';
import dotenv from "dotenv"

//initialize express method
const app = express();
dotenv.config()

//Connect to database
await connectDB()

//middlewares
app.use(cors())
app.use(express.json())


//Routes
app.get('/', (req, res) => res.send('API working'))

//Port
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
})