import express from "express";
import userRout from "./routes/user.js";
import taskrouter from "./routes/task.js";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import cors from "cors";
import { errMidleware } from "./midlewares/err.js";
export const app = express();
app.use(express.json());
config({
    path:"./data/config.env",
})
app.use(cookieParser());
app.use(cors({
    origin:[process.env.FRONT_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
}));
app.use("/users",userRout);
app.use("/task",taskrouter);

app.get('/',(req,res)=>{
    res.send("Nice Working");
})

app.use(errMidleware);
