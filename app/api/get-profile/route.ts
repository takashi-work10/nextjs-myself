import { connectToDatabase } from "../../../lib/db";
import UserProfile from "../../../models/UserProfile";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");
  if (!userId) {
    return new Response(JSON.stringify({ error: "userId is required" }), { status: 400 });
  }
  await connectToDatabase();
  const profile = await UserProfile.findOne({ userId });
  // Mongoose ドキュメントを plain object に変換
  const plainProfile = profile ? JSON.parse(JSON.stringify(profile)) : null;
  return new Response(JSON.stringify(plainProfile), { status: 200 });
}
