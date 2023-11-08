import { User } from "../models/user.js";
import jwt from "jsonwebtoken";
export const authenticate=async(req,res,next)=>{ 
const {token}=req.cookies;
if(!token) return res.status(404).json({
   success:false,
   message:"First Login",
});
  const decoded=jwt.verify(token,process.env.JWT_SCRET);
  req.user=await User.findById(decoded._id);
  next();
}
