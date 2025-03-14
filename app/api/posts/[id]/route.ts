// app/api/posts/[id]/route.ts
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Post, { PostDocument } from "@/models/Post";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/options";

// GET: 投稿詳細データを取得する
export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const post = await Post.findById(params.id);
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    return NextResponse.json(post);
  } catch (error) {
    console.error("Error in GET /api/posts/[id]:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

// PUT: 投稿の更新
export async function PUT(request: Request, context: any) {
  // ログイン中のユーザー情報を取得（編集権限チェックのため）
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const resolvedContext = await context;
  const id = resolvedContext.params.id;
  try {
    await connectToDatabase();
    
    // 編集前に現在の投稿を取得し、所有者チェックを実施
    const post = await Post.findById(id);
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    if (post.user !== session.user.id) {
      return NextResponse.json(
        { error: "You are not allowed to edit this post." },
        { status: 403 }
      );
    }

    const body = await request.json();
    const updatedPost: PostDocument | null = await Post.findByIdAndUpdate(id, body, { new: true });
    if (!updatedPost) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    return NextResponse.json(updatedPost);
  } catch (error) {
    console.error("Error in PUT /api/posts/[id]:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

// DELETE: 投稿の削除
export async function DELETE(request: Request, context: any) {
  // ログイン中のユーザー情報を取得
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const resolvedContext = await context;
  const id = resolvedContext.params.id;
  try {
    await connectToDatabase();

    // 対象の投稿を取得
    const post = await Post.findById(id);
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    // 投稿の所有者と、ログイン中のユーザーを比較
    if (post.user !== session.user.id) {
      return NextResponse.json(
        { error: "You are not allowed to delete this post." },
        { status: 403 }
      );
    }

    const deletedPost: PostDocument | null = await Post.findByIdAndDelete(id);
    if (!deletedPost) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Post deleted" });
  } catch (error) {
    console.error("Error in DELETE /api/posts/[id]:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
