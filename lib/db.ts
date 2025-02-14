import mongoose from "mongoose";

// まず globalThis.mongoose に値が入っているかチェックし、なければ初期化します。
interface MongooseCache {
  conn: mongoose.Connection | null;
  promise: Promise<mongoose.Mongoose> | null;
}

if (!globalThis.mongoose) {
  globalThis.mongoose = { conn: null, promise: null };
}

// ここで cached は必ず定義された値（MongooseCache型）になります
const cached: MongooseCache = globalThis.mongoose;

export async function connectToDatabase() {
  // すでに接続済みならキャッシュされた接続を返す
  if (cached.conn) {
    return cached.conn;
  }
  // まだ接続していなければ、mongoose.connect() のPromiseをキャッシュする
  if (!cached.promise) {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("MONGODB_URI is not defined");
    }
    cached.promise = mongoose.connect(uri).then((mongooseInstance) => mongooseInstance);
  }
  // 接続が完了したら conn に保存し、返す
  cached.conn = (await cached.promise).connection;
  return cached.conn;
}
