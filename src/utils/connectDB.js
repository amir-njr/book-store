import mongoose from "mongoose";

async function connectDB() {
  try {
    if (mongoose.connections[0].readyState) return;
    await mongoose.connect("mongodb://localhost:27017/BookStore");
    console.log("Connect To DB");
  } catch {
    console.log("Disconnect To DB");
  }
}

export default connectDB;
