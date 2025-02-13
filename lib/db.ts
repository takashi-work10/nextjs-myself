// lib/db.ts
import mongoose from "mongoose";

const MONGODB_URI: string = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI を .env.local に設定してください");
}

// このアプリ専用のグローバルキャッシュ変数を定義します。
// 他のアプリと混ざらないように、myAppMongooseというユニークな名前にしています。
let cached = globalThis.mongoose;

if (!cached) {
  cached = globalThis.mongoose = { conn: null, promise: null };
}

export async function connectToDatabase() {
  // すでに接続済みならキャッシュされた接続を返す
  if (cached.conn) {
    return cached.conn;
  }
  // まだ接続していなければ、mongoose.connect()のPromiseをキャッシュする
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((mongooseInstance) => mongooseInstance);
  }
  // Promiseが解決するのを待って、接続をキャッシュ
  cached.conn = await cached.promise;
  return cached.conn;
}
