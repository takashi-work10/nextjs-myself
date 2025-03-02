// app/profile/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import axios from "axios";

export default function ProfilePage() {
  const { data: session } = useSession();
  const [profile, setProfile] = useState({
    nickname: "",
    grade: "",
    school: ""
  });

  // セッション取得後にプロフィール情報を axios で取得
  useEffect(() => {
    const fetchProfile = async () => {
      if (!session?.user?.id) return;
      try {
        const response = await axios.get(`/api/getProfile?userId=${session.user.id}`);
        const data = response.data;
        setProfile({
          nickname: data?.nickname || "",
          grade: data?.grade || "",
          school: data?.school || "",
        });
      } catch (error) {
        console.error("プロフィール取得エラー:", error);
      }
    };
    fetchProfile();
  }, [session]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userId = session?.user?.id;
    const email = session?.user?.email;
    if (!userId || !email) {
      alert("ユーザーIDまたはメールアドレスが取得できませんでした");
      return;
    }
    try {
      const response = await axios.post("/api/updateProfile", {
        userId,
        email,
        ...profile,
      });
      if (response.status === 200) {
        alert("プロフィールが更新されました");
      } else {
        alert("更新に失敗しました");
      }
    } catch (error) {
      console.error("更新エラー:", error);
      alert("更新中にエラーが発生しました");
    }
  };

  return (
    <div>
      <h1>プロフィール編集</h1>
      {/* プロフィール表示画面へのリンク */}
      <Link href="/profile/view">プロフィール表示</Link>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ニックネーム：</label>
          <input name="nickname" value={profile.nickname} onChange={handleChange} />
        </div>
        <div>
          <label>子どもの学年：</label>
          <input name="grade" value={profile.grade} onChange={handleChange} />
        </div>
        <div>
          <label>志望校：</label>
          <input name="school" value={profile.school} onChange={handleChange} />
        </div>
        <button type="submit">更新</button>
      </form>
    </div>
  );
}
