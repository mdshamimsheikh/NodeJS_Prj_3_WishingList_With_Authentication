import { User } from "../models/user.js";
export const all_user=async (req, res) => {
    const users = await User.find({});
    res.json({
        success: true,
        users,
    });
};
export const register=async (req, res) => {
    const { name, email, password } = req.body;
    await User.create({
        name,
        email,
        password,
    });
    res.status(201).cookie("token","LOL",{
    }).json({
        success: true,
        message: "Registered Successfully",
    });
};
export const special=(req,res)=>{
    res.json({
      success:true,
      message:"Just Joking"
    });
  };
  export const user_id=async(req,res)=>{
    const {id}=req.params;
   const users=await User.findById(id);
    res.json({
        success:true,
        users:{},
    });
};
  export const updated=async(req,res)=>{
    const {id}=req.params;
   const users=await User.findById(id);
    res.json({
        success:true,
        message:"Successfully Updated",
    });
};
  export const deleted=async(req,res)=>{
    const {id}=req.params;
   const users=await User.findById(id);
//    await User.remove()
    res.json({
        success:true,
        message:"Successfully Deleted",
    });
};
