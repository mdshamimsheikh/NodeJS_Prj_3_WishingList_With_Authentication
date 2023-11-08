import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import { sendcookies } from "../utils/features.js";
import errHandler from "../midlewares/err.js";

export const login = async (req, res,next) => {
   try {
      const { email, password } = req.body;
      const user = await User.findOne({ email }).select("+password");
      if (!user) return next(new errHandler("Invalid email or user", 404));
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return next(new errHandler("Invalid email or user", 404));
      sendcookies(user, res, `Welcome to ${user.name}`, 201);
   } catch (error) {
      next(error);
   }
};
export const register = async (req, res) => {
   try {
      const { name, email, password } = req.body;
      let user = await User.findOne({ email });
      if (user) return next(new errHandler("User not found", 404));
      const hasshedpassword = await bcrypt.hash(password, 10);
      user = await User.create({ name, email, password: hasshedpassword });
      sendcookies(user, res, "Registered Successfully", 201);
   } catch (error) {
      next(error);
   }
};

export const userProfile = (req, res) => {
   res.status(200).json({
      success: true,
      user: req.user,
   })
};
export const logout = (req, res) => {
   res.status(200).cookie("token", "", {
      expires: new Date(Date.now()),
      sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
      secure: process.env.NODE_ENV === "Development" ? false : true,
   }).json({
      success: true,
      user: req.user,
   })
}








// export const special=(req,res)=>{
//     res.json({
//       success:true,
//       message:"Just Joking"
//     });
//   };
//   export const user_id=async(req,res)=>{
//     const {id}=req.params;
//    const users=await User.findById(id);
//     res.json({
//         success:true,
//         users:{},
//     });
// };
//   export const updated=async(req,res)=>{
//     const {id}=req.params;
//    const users=await User.findById(id);
//     res.json({
//         success:true,
//         message:"Successfully Updated",
//     });
// };
//   export const deleted=async(req,res)=>{
//     const {id}=req.params;
//    const users=await User.findById(id);
// //    await User.remove()
//     res.json({
//         success:true,
//         message:"Successfully Deleted",
//     });
// };
