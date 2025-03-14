import mongoose, { Document, Model, Schema } from "mongoose";

type TComment = {
  postId: mongoose.Types.ObjectId;
  parentId?: mongoose.Types.ObjectId;
  user: string;
  nickname: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  likes?: number;
  likedBy?: string[];
};

export type CommentDocument = Document & TComment;

const CommentSchema: Schema<CommentDocument> = new Schema({
  postId: { type: Schema.Types.ObjectId, required: true, ref: "Post" },
  parentId: { type: Schema.Types.ObjectId, ref: "Comment", default: null },
  user: { type: String, required: true },
  nickname: { type: String, required: true },
  content: { type: String, required: true },
  likes: { type: Number, default: 0 },
  likedBy: { type: [String], default: [] },
},
  { timestamps: true } // createdAt と updatedAt を自動で管理
);

const Comment: Model<CommentDocument> =
  mongoose.models.Comment || mongoose.model<CommentDocument>("Comment", CommentSchema);

export default Comment;
