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
    console.error("Error in POST /api/posts:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await connectToDatabase();
    const body = await request.json();
    if (!body.content || !body.user || !body.category) {
      return NextResponse.json(
        { error: "Content, user, and category are required" },
        { status: 400 }
      );
    }
    // ユーザープロフィールからニックネームを取得
    const userProfile = await UserProfile.findOne({ userId: body.user });
    console.log("UserProfile found:", userProfile);
    // プロフィールが存在し、かつnicknameが設定されていればそれを、なければフォールバック値を使用
    const nickname = userProfile && userProfile.nickname ? userProfile.nickname : "Unknown";
    console.log("Computed nickname:", nickname);
    
    const post = await Post.create({ ...body, nickname });
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error("Error in POST /api/posts:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
