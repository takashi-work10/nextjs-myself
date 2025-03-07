// app/api/posts/[id]/route.ts
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Post, { PostDocument } from "@/models/Post";

export async function PUT(request: Request, context: any) {
  const { params } = context;
  const { id } = params;
  try {
    await connectToDatabase();
    const body = await request.json();
    const updatedPost: PostDocument | null = await Post.findByIdAndUpdate(
      id,
      body,
      { new: true }
    );
    if (!updatedPost) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    return NextResponse.json(updatedPost);
  } catch (error) {
    console.error("Error in PUT /api/posts/[id]:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE(request: Request, context: any) {
  const { params } = context;
  const { id } = params;
  try {
    await connectToDatabase();
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
