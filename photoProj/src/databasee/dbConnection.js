import mongoose from "mongoose"
import { DB_NAME } from "./dbname.js";

export async function connectDB(){
    try {
        console.log(DB_NAME);
        await mongoose.connect(`${process.env.MONOGODB_URI}${DB_NAME}`)
        console.log("MongoDB is connected ")
    } catch (error) {
        console.log("Database connection error", error);
        throw error;
    }
}