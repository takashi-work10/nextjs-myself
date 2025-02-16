import mongoose from "mongoose";


export interface IDiagnosisResult extends mongoose.Document {
  pattern: "A" | "B" | "C" | "D"; 
  answers: number[];             
  createdAt: Date;
}

const DiagnosisResultSchema = new mongoose.Schema({
  pattern: { type: String, enum: ["A", "B", "C", "D"], required: true },
  answers: { type: [Number], required: true },
  createdAt: { type: Date, default: Date.now },
});

const DiagnosisResult =
  mongoose.models.DiagnosisResult ||
  mongoose.model<IDiagnosisResult>("DiagnosisResult", DiagnosisResultSchema);

export default DiagnosisResult;
