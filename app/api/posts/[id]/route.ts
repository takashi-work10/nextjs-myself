// app/posts/[id]/route.ts
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Post, { PostDocument } from "@/models/Post";

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const body = await request.json();
    const updatedPost: PostDocument | null = await Post.findByIdAndUpdate(params.id, body, { new: true });
    if (!updatedPost) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    return NextResponse.json(updatedPost);
  } catch (error) {
    console.error("Error in PUT /api/posts/[id]:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    // ここでは params.id を直接使わず、awaitして取得する方法が推奨される場合もあります。
    const { id } = params; 
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
