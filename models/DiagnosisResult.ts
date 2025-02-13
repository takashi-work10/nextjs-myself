// models/DiagnosisResult.ts
import mongoose from "mongoose";

// TypeScriptの設計図（interface）です。
// IDiagnosisResultは、MongoDBに保存する診断結果の形を定義しています。
export interface IDiagnosisResult extends mongoose.Document {
  pattern: "A" | "B" | "C" | "D"; // 結果パターンは4種類
  answers: number[];             // 16問分の答えの配列（例: [1,2,...,16]）
  createdAt: Date;
}

// DiagnosisResultSchemaは、実際にMongoDBに保存する際のルール（スキーマ）です。
const DiagnosisResultSchema = new mongoose.Schema({
  pattern: { type: String, enum: ["A", "B", "C", "D"], required: true },
  answers: { type: [Number], required: true },
  createdAt: { type: Date, default: Date.now },
});

// DiagnosisResultモデルは、DiagnosisResultSchemaに基づいて作られた
// データ操作用の道具です。すでに同じ名前のモデルがあれば再利用します。
const DiagnosisResult =
  mongoose.models.DiagnosisResult ||
  mongoose.model<IDiagnosisResult>("DiagnosisResult", DiagnosisResultSchema);

export default DiagnosisResult;
