// app/api/posts/[id]/like/route.ts
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Post, { PostDocument } from "@/models/Post";

export async function PATCH(request: Request, context: { params: Promise<{ id: string }> }) {
  await connectToDatabase();
  // context.params が Promise として渡される場合、await してから使用
  const { id } = await context.params;
  const body = await request.json();
  const userId = body.user;
  if (!userId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }
  const post: PostDocument | null = await Post.findById(id);
  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }
  // すでにいいねしているかチェック（1アカウント1回）
  if (post.likedBy.includes(userId)) {
    return NextResponse.json({ error: "Already liked" }, { status: 400 });
  }
  post.likedBy.push(userId);
  post.likes += 1;
  await post.save();
  return NextResponse.json(post, { status: 200 });
}
