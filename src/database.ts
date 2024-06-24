import {MongoClient} from "mongodb";

const uri = process.env.mongo_uri || "mongodb://localhost:27017"; // Adjust the database name accordingly
const client = new MongoClient(uri);

export async function connect() {
  try {
    await client.connect();
    return client.db("pwa_blog"); // Adjust the database name accordingly
  } catch (error) {
    console.error("Could not connect to MongoDB", error);
    process.exit(1);
  }
}