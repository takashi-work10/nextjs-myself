// app/api/comments/[id]/like/route.ts
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Comment, { CommentDocument } from "@/models/Comment";

export async function PATCH(
  request: Request,
  context: { params: { id: string } }
) {
  try {
    await connectToDatabase();
    const { id } = await context.params;
    const body = await request.json();
    const userId = body.user;

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    const comment: CommentDocument | null = await Comment.findById(id);
    if (!comment) {
      return NextResponse.json({ error: "Comment not found" }, { status: 404 });
    }

    // すでにいいねしているかチェック（1アカウント1回）
    if ((comment.likedBy || []).includes(userId)) {
      return NextResponse.json({ error: "Already liked" }, { status: 400 });
    }

    // いいねの追加
    comment.likedBy = comment.likedBy || [];
    comment.likedBy.push(userId);

    // comment.likes が undefined の場合は 0 に初期化してから加算
    comment.likes = comment.likes ?? 0;
    comment.likes += 1;

    await comment.save();

    return NextResponse.json(comment, { status: 200 });
  } catch (error) {
    console.error("Error in PATCH /api/comments/[id]/like:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
