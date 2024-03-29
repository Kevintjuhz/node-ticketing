import mongoose from "mongoose";
import {app} from "./app";
const start = async () => {
    console.log("Starting up.....")

    if (!process.env.JWT_KEY) {
        throw new Error("JWT_KEY key was undefined")
    }

    if (!process.env.MONGO_URI) {
        throw new Error("MONGO_URI key must be defined")
    }

    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB")
    } catch (err) {
        console.error(err);
    }

    app.listen(3000, () => {
        console.log("Listening on port 3000!!!")
    });
}

start();