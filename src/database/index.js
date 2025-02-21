import mongoose from "mongoose";
import dotenv from 'dotenv'


dotenv.config()

const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.DB_connect)
        console.log("Server is connected !")
    } catch (error) {
        console.log("failed to connect", error)
    }
}

export default connectDatabase