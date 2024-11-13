import express from 'express';
//importing the colors package
import colors from 'colors';
//importing dotenv from dotenv pacakage
import dotenv from 'dotenv';
//importing morgan from morgan package
import morgan from 'morgan';
//importing connectDB from mongoose
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js'
import categoryRoutes from './routes/categoryRoutes.js';
import productRoutes from './routes/productRoutes.js';

// cors importing
import cors from 'cors'
// configure env
dotenv.config();

//database configuration
connectDB().then(()=>{
    const app=express();
})

//rest object
const app=express();

//middlewares
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))


//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product",productRoutes)


//rest api
app.get('/',function(req,res){
//     res.send({
//         message: 'Welcome to E-Commerce application using MERN stack Project'
// })
    res.send("<h1>Welcome to E-Commerce Application using MERN stack Project.</h1>");
})

//PORT
const PORT=process.env.PORT || 8080 ;

//run
app.listen(PORT,function(){
    console.log(`Server running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white)
});