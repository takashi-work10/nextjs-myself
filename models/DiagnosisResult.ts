// models/DiagnosisResult.ts
import mongoose, { Document, Schema, Model } from "mongoose";

export interface IDiagnosisResult extends Document {
  group: number;      // 最も高かったグループ番号（1～4）
  score: number;      // 全体の合計スコア
  resultText: string; // 結果のテキスト
  answers: number[];  // 個々の質問の答え（例として16問分の数値）
  createdAt: Date;
}

const DiagnosisResultSchema: Schema = new Schema({
  group: { type: Number, required: true },
  score: { type: Number, required: true },
  resultText: { type: String, required: true },
  answers: { type: [Number], required: true },
  createdAt: { type: Date, default: Date.now },
});

const DiagnosisResult: Model<IDiagnosisResult> =
  mongoose.models.DiagnosisResult ||
  mongoose.model<IDiagnosisResult>("DiagnosisResult", DiagnosisResultSchema);

export default DiagnosisResult;
