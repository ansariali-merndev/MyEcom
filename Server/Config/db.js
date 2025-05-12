import mongoose from "mongoose";

export const connectdb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI);
    console.log("db connected");
  } catch (error) {
    console.log("db failed", error.message);
  }
};
