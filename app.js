import express from "express";
import userRout from "./routes/user.js";
import { config } from "dotenv";
export const app = express();
app.use(express.json());
config({
    path:"./data/config.env",
})
app.use("/users",userRout);
app.get('/',(req,res)=>{
    res.send("Nice Working");
})

