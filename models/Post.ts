import mongoose, { Document, Model, Schema } from "mongoose";

type TPost = {
  user: string;
  nickname: string; // 追加：ユーザーのニックネーム
  content: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
  likes: number;
  likedBy: string[];
};

type PostDocument = Document & TPost;

const PostSchema: Schema<PostDocument> = new Schema({

  user: { type: String, required: true },
  nickname: { type: String, required: true },
  content: { type: String, required: true },
  likes: { type: Number, default: 0 },
  likedBy: { type: [String], default: [] },
  },
  { timestamps: true } // このオプションで createdAt と updatedAt を自動で管理
  );

const Post: Model<PostDocument> =
  mongoose.models.Post || mongoose.model<PostDocument>("Post", PostSchema);

export default Post;
export type { TPost, PostDocument };
