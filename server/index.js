import  express from "express";
import  bodyParser from "body-parser";
import  mongoose from "mongoose";
import  cors from "cors";

import postRoutes from './routes/posts.js' 

const app=express();
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

app.use('/posts',postRoutes);
mongoose.connect("mongodb://localhost:27017/Memories");
const PORT=process.env.PORT||5000;




app.listen(PORT, ()=>{
    console.log("app started on port 5000");
})
