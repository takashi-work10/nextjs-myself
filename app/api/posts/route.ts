// app/api/posts/route.ts
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Post, { PostDocument } from "@/models/Post";
import UserProfile from "@/models/UserProfile";

export async function GET() {
  try {
    await connectToDatabase();
    const posts: PostDocument[] = await Post.find({}).sort({ createdAt: -1 });
    return NextResponse.json(posts);
  } catch (error) {  // あるいは catch { ... }
    console.error("Error in GET /api/posts:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await connectToDatabase();
    const body = await request.json();
    if (!body.content || !body.user) {
      return NextResponse.json(
        { error: "Content and user are required" },
        { status: 400 }
      );
    }
    
    // 認証システムから渡されるユーザーID（文字列）で UserProfile を検索
    const userProfile = await UserProfile.findOne({ userId: body.user });
    if (!userProfile) {
      return NextResponse.json({ error: "UserProfile not found" }, { status: 404 });
    }
    
    // Post の user フィールドには、UserProfile の _id (ObjectId) をセットする
    const post = await Post.create({ ...body, user: userProfile._id });
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error("Error in POST /api/posts:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
