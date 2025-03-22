"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

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

  const updateProfileMutation = useMutation({
    mutationFn: async (updatedProfile: {
      userId: string;
      email: string;
      nickname: string;
      grade: string;
      school: string;
    }) => {
      return await axios.post("/api/update-profile", updatedProfile);
    },
    onSuccess: () => {
      alert("プロフィールが更新されました");
    },
    onError: () => {
      alert("更新に失敗しました");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfileMutation.mutate({ userId, email: userEmail, ...profile });
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
      <button type="submit" disabled={updateProfileMutation.status === "pending"}>
        更新
      </button>
    </form>
  );
}
