// app/api/comments/[id]/route.ts
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Comment, { CommentDocument } from "@/models/Comment";

export async function PUT(request: Request, context: unknown) {
  // context の型を内部でキャストする
  const { params } = context as { params: { id: string } };
  try {
    await connectToDatabase();
    const body = await request.json();
    const updatedComment: CommentDocument | null = await Comment.findByIdAndUpdate(
      params.id,
      body,
      { new: true }
    );
    if (!updatedComment) {
      return NextResponse.json({ error: "Comment not found" }, { status: 404 });
    }
    return NextResponse.json(updatedComment);
  } catch (error) {
    console.error("Error in PUT /api/comments/[id]:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE(request: Request, context: unknown) {
  // 同様に context の型をキャスト
  const { params } = context as { params: { id: string } };
  try {
    await connectToDatabase();
    const deletedComment: CommentDocument | null = await Comment.findByIdAndDelete(params.id);
    if (!deletedComment) {
      return NextResponse.json({ error: "Comment not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Comment deleted" });
  } catch (error) {
    console.error("Error in DELETE /api/comments/[id]:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
