// app/generateFeedback/route.ts
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";

export async function POST(request: Request) {
  try {
    await connectToDatabase();
    const { userId, diagnosisResult } = await request.json();
    const feedback = `あなたの診断結果パターン "${diagnosisResult.pattern}" に基づいて、次はこの学習方法を試してみてください！`;
    return NextResponse.json({ feedback });
  } catch (error) {
    console.error("Error generating feedback:", error);
    return NextResponse.json({ error: "Failed to generate feedback" }, { status: 500 });
  }
}
