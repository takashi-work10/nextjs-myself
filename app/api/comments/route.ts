// app/api/comments/route.ts
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Comment from "@/models/Comment";
import UserProfile from "@/models/UserProfile";

export async function GET(request: Request) {
  try {
    await connectToDatabase();
    const { searchParams } = new URL(request.url);
    const postId = searchParams.get("postId");
    if (!postId) {
      return NextResponse.json({ error: "postId is required" }, { status: 400 });
    }
    // .lean() でプレーンオブジェクトに変換
    const comments = await Comment.find({ postId }).sort({ createdAt: 1 }).lean();
    // 各コメントに nickname がなければ補完
    await Promise.all(
      comments.map(async (comment) => {
        if (!comment.nickname) {
          const userProfile = await UserProfile.findOne({ userId: comment.user });
          comment.nickname = userProfile ? userProfile.nickname : "Unknown";
        }
      })
    );
    return NextResponse.json(comments);
  } catch (error) {
    console.error("Failed to fetch comments", error);
    return NextResponse.json({ error: "Failed to fetch comments" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await connectToDatabase();
    const body = await request.json();
    if (!body.postId || !body.user || !body.content) {
      return NextResponse.json(
        { error: "postId, user, and content are required" },
        { status: 400 }
      );
    }
    // ユーザープロフィールから nickname を取得
    const userProfile = await UserProfile.findOne({ userId: body.user });
    console.log("UserProfile found for comment:", userProfile);
    const nickname = userProfile ? userProfile.nickname : "Unknown";
    console.log("Computed nickname for comment:", nickname);
    // クライアント側で送信された nickname があっても上書きする
    const comment = await Comment.create({ ...body, nickname });
    return NextResponse.json(comment, { status: 201 });
  } catch (error) {
    console.error("Error in POST /api/comments:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
