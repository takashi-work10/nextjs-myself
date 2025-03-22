// app/api/update-profile/route.ts
import { connectToDatabase } from "../../../lib/db";
import UserProfile from "../../../models/UserProfile";

export async function POST(req: Request) {
  const { userId, email, nickname, grade, school } = await req.json();
  await connectToDatabase();

  let profile = await UserProfile.findOne({ userId });
  if (profile) {
    // 既存の場合は全てのフィールドを更新する（emailも更新）
    profile.email = email;
    profile.nickname = nickname;
    profile.grade = grade;
    profile.school = school;
    await profile.save();
  } else {
    // 新規作成
    profile = await UserProfile.create({ userId, email, nickname, grade, school });
  }
  return new Response(JSON.stringify(profile), { status: 200 });
}
