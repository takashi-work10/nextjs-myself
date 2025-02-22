import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../lib/db";
import DiagnosisResult from "../../../models/DiagnosisResult";

export async function POST(request: Request) {
try {
  await connectToDatabase();

  const body = await request.json();
  console.log("APIで受け取ったデータ:", body);
  const pattern = body.pattern; 
  const answers = body.answers;  

  const newResult = await DiagnosisResult.create({ pattern, answers });
  console.log("DBに保存された結果:", newResult);

  return NextResponse.json(newResult, { status: 201 });
} catch (error) {
  console.error("エラーが発生しました:", error);
  return NextResponse.json({ message: "サーバーエラーが発生しました" }, { status: 500 });
}
}

export async function GET() {
try {
  await connectToDatabase();

  const latestResult = await DiagnosisResult.findOne({}).sort({ createdAt: -1 });
  return NextResponse.json(latestResult);
}  catch (error) { 
  console.error("GETでエラーが発生しました:", error);
  return NextResponse.json({ message: "サーバーエラーが発生しました" }, { status: 500 });
}
}
