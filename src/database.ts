import mongoose from "mongoose";

const uri = process.env.mongo_uri || "mongodb://localhost:27017/blog"; // Adjust the database name accordingly

export async function connect() {
  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true } as mongoose.ConnectOptions);
    return mongoose.connection;
  } catch (error) {
    console.error("Could not connect to MongoDB", error);
    process.exit(1);
  }
}