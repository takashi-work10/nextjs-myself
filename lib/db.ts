// lib/db.ts
import mongoose from "mongoose";

// .env.local で設定した接続文字列を使います
const MONGODB_URI: string = process.env.MONGODB_URI!; // ! は「必ず値がある」という意味

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI を .env.local に書いてね！");
}

/*
  開発中はホットリロードで何度も接続処理が実行されるので、
  グローバル変数に接続状態を保存して再利用します。
*/
let cached = globalThis.mongoose as {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
} | null;

if (!cached) {
  cached = { conn: null, promise: null };
  globalThis.mongoose = cached;
}

export async function connectToDatabase(): Promise<typeof mongoose> {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
