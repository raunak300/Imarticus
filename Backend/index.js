const express=require('express');
const app=express();
const dotenv=require('dotenv')
dotenv.config()

const Connect=require('./Model/connect')
const cookieParser=require('cookie-parser')
app.use(express.json())
app.use(cookieParser()); 
app.use(express.urlencoded({ extended: true }));
const cors=require('cors');
const corsOptions={
    origin: 'http://localhost:5173',
   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
   credentials: true,

}
app.use(cors(corsOptions));

const authRoutes=require('./routes/authroutes')
app.use('/api/auth',authRoutes)

app.listen(3000,(req,res)=>{
    console.log("listening");
    Connect();
})