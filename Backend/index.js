import express from "express";
import { PORT,mongodbURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';


const app=express();
//Middleware for enable cors for all routes
app.use(cors());

//Middleware for parsing request body
app.use(express.json());

//Middleware for books route
app.use('/books',booksRoute);



mongoose.connect(mongodbURL)
.then(()=>{
    console.log('App connected to Data Base.');
    app.listen(PORT,()=>{
        console.log(`App is running on PORT: ${PORT}`);
    });
})
.catch((error)=>{
    console.log(error);
});