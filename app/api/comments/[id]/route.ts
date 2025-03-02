// app/comments/[id]/route.ts
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Comment, { CommentDocument } from "@/models/Comment";

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const body = await request.json();
    const updatedComment: CommentDocument | null = await Comment.findByIdAndUpdate(params.id, body, { new: true });
    if (!updatedComment) {
      return NextResponse.json({ error: "Comment not found" }, { status: 404 });
    }
    return NextResponse.json(updatedComment);
  } catch (error) {
    console.error("Error in PUT /api/comments/[id]:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const { id } = params;
    const deletedComment: CommentDocument | null = await Comment.findByIdAndDelete(id);
    if (!deletedComment) {
      return NextResponse.json({ error: "Comment not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Comment deleted" });
  } catch (error) {
    console.error("Error in DELETE /api/comments/[id]:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
