import mongoose from "mongoose";

//function to connect to mongdb database
const connectDB = async () => {

      mongoose.connection.on('connected', () => console.log("Database connected"));

      await mongoose.connect(`${process.env.MONGODB_URI}/JobPortal`)
}

export default connectDB