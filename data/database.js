import mongoose from "mongoose";
export const dbConnect=()=>{
    mongoose.connect(process.env.MONGO_URI, {
    dbName: "BackendAPI",
}).then(() => { console.log("Database Connected.") }).catch((e) => {
    console.log(e);
});
};