// app/profile/ProfileForm.tsx
"use client";
import { useState } from "react";

export default function ProfileForm({
  initialProfile,
  userEmail,
  userId,
}: {
  initialProfile: { nickname: string; grade: string; school: string };
  userEmail: string;
  userId: string;
}) {
  const [profile, setProfile] = useState({
    nickname: initialProfile.nickname,
    grade: initialProfile.grade,
    school: initialProfile.school,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/updateProfile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, email: userEmail, ...profile }),
    });
    if (res.ok) {
      alert("プロフィールが更新されました");
    } else {
      alert("更新に失敗しました");
    }
  };

  return (
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
  );
}
