import mongoose from "mongoose";

interface MongooseCache {
  conn: mongoose.Connection | null;
  promise: Promise<mongoose.Mongoose> | null;
}

if (!globalThis.mongoose) {
  globalThis.mongoose = { conn: null, promise: null };
}

const cached: MongooseCache = globalThis.mongoose;

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("MONGODB_URI is not defined");
    }
    cached.promise = mongoose.connect(uri).then((mongooseInstance) => mongooseInstance);
  }
  cached.conn = (await cached.promise).connection;
  return cached.conn;
}
