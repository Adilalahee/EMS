import express from 'express'
import cors from 'cors'
import 'dotenv/config'
const app=express();
app.use(cors());
app.use(express.json());

app.listen(process.env.PORT,()=>{
    console.log(`port running is ${process.env.PORT}`)
})

app.get('/',(req,res)=>{
    res.send("EMS is loading")
})