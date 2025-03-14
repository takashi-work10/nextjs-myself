import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Comment, { CommentDocument } from "@/models/Comment";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/options"; // パスはプロジェクトに合わせて調整

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  // セッション情報を取得（ログインしているかチェック）
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await connectToDatabase();

  // 対象のコメントを取得
  const comment = await Comment.findById(params.id);
  if (!comment) {
    return NextResponse.json({ error: "Comment not found" }, { status: 404 });
  }

  // コメントの所有者と、ログイン中のユーザーのIDを比較
  if (comment.user !== session.user.id) {
    return NextResponse.json(
      { error: "You are not allowed to delete this comment." },
      { status: 403 }
    );
  }

  // 所有者であればコメントを削除
  const deletedComment: CommentDocument | null = await Comment.findByIdAndDelete(params.id);
  if (!deletedComment) {
    return NextResponse.json({ error: "Comment not found" }, { status: 404 });
  }
  return NextResponse.json({ message: "Comment deleted" });
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  // セッション情報を取得（ログインしているかチェック）
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await connectToDatabase();

  // 編集対象のコメントを取得
  const comment = await Comment.findById(params.id);
  if (!comment) {
    return NextResponse.json({ error: "Comment not found" }, { status: 404 });
  }

  // コメントの所有者と、ログイン中のユーザーのIDを比較
  if (comment.user !== session.user.id) {
    return NextResponse.json(
      { error: "You are not allowed to edit this comment." },
      { status: 403 }
    );
  }

  try {
    const body = await request.json();
    // ここでは、更新内容として content のみを受け取る前提
    const updatedComment: CommentDocument | null = await Comment.findByIdAndUpdate(
      params.id,
      { content: body.content },
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
