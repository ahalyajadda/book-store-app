const express=require("express");
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const app=express();
const cors=require("cors");
const router=require("./routes/book-routes");
dotenv.config();

//middlewares
app.use(express.json());
app.use(cors());
app.use("/books",router);

//routes




mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("connected to database"))
.then(()=>{
    app.listen(process.env.PORT || 3001,()=>{
        console.log("serevr started");
    })
})