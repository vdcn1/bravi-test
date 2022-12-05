import mongoose from "mongoose";

export const database = async () => {
    try {
        await mongoose.connect("localhost:27017", {
            appName: "contacts-list",
        });
        console.log("Database connected");
    } catch (error) {
        console.log("Database connection failed");
    }
}