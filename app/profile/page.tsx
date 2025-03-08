"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export default function ProfilePage() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  // session が取得できた場合のみプロフィールを取得する
  const { data: fetchedProfile, isLoading, isError } = useQuery({
    queryKey: ["profile", session?.user?.id],
    queryFn: async () => {
      const response = await axios.get(`/api/getProfile?userId=${session!.user.id}`);
      return response.data;
    },
    enabled: !!session?.user?.id,
  });

  // ローカルのフォーム状態
  const [profile, setProfile] = useState({
    nickname: "",
    grade: "",
    school: "",
  });

  // fetchedProfile が更新されたらフォーム状態に反映
  useEffect(() => {
    if (fetchedProfile) {
      setProfile({
        nickname: fetchedProfile.nickname || "",
        grade: fetchedProfile.grade || "",
        school: fetchedProfile.school || "",
      });
    }
  }, [fetchedProfile]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // プロフィール更新用の Mutation
  const updateProfileMutation = useMutation({
    mutationFn: async (updatedProfile: { nickname: string; grade: string; school: string }) => {
      const userId = session?.user?.id;
      const email = session?.user?.email;
      if (!userId || !email) {
        throw new Error("ユーザーIDまたはメールアドレスが取得できませんでした");
      }
      return await axios.post("/api/updateProfile", { userId, email, ...updatedProfile });
    },
    onSuccess: () => {
      alert("プロフィールが更新されました");
      // キャッシュを無効化して最新データを取得
      queryClient.invalidateQueries({ queryKey: ["profile", session?.user?.id] });
    },
    onError: () => {
      alert("更新に失敗しました");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfileMutation.mutate(profile);
  };

  if (isLoading) return <div>プロフィール読み込み中...</div>;
  if (isError) return <div>プロフィールの読み込みに失敗しました。</div>;

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
        <button type="submit" disabled={updateProfileMutation.status === "pending"}>
          更新
        </button>
      </form>
    </div>
  );
}
