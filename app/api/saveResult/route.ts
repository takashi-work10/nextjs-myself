// app/api/saveDiagnosis/route.ts
import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../lib/db";
import DiagnosisResult from "../../../models/DiagnosisResult";

export async function POST(request: Request) {
  try {
    await connectToDatabase();
    const body = await request.json();
    // body には { group, score, resultText, answers } が送られてくると仮定します
    const { group, score, resultText, answers } = body;
    const newResult = await DiagnosisResult.create({ group, score, resultText, answers });
    return NextResponse.json(newResult, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
