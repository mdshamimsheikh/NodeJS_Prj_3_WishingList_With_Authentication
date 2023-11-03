import mongoose from "mongoose";
const Schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});
export const User = mongoose.model("User", Schema);

