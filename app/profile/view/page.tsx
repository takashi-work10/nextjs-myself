// app/profile/view/page.tsx
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../api/auth/options";
import { connectToDatabase } from "../../../lib/db";
import UserProfile from "../../../models/UserProfile";
import Link from "next/link";

export default async function ProfileDisplayPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return (
      <div>
        <p>ログインしていません。</p>
        <Link href="/auth/signin">サインインする</Link>
      </div>
    );
  }

  await connectToDatabase();
  const profileData = await UserProfile.findOne({ userId: session.user.id });
  const plainProfileData = profileData ? JSON.parse(JSON.stringify(profileData)) : null;

  return (
    <div>
      <h1>プロフィール表示</h1>
      {plainProfileData ? (
        <div>
          <p>ニックネーム: {plainProfileData.nickname}</p>
          <p>学年: {plainProfileData.grade}</p>
          <p>志望校: {plainProfileData.school}</p>
        </div>
      ) : (
        <p>プロフィールがまだ登録されていません。</p>
      )}
      <Link href="/profile">プロフィール編集</Link>
    </div>
  );
}
