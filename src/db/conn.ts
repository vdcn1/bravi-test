import mongoose from "mongoose";

export const database = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/bravi-teste");
        console.log("Database connected");
    } catch (error: any) {
        console.log("Database connection failed" + error.toString());
    }
}