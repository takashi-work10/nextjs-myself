import mongoose, { Document, Model, Schema } from "mongoose";

type TComment = {
  postId: mongoose.Types.ObjectId;
  parentId?: mongoose.Types.ObjectId;
  user: string;
  nickname: string;
  content: string;
  createdAt: Date;
};

export type CommentDocument = Document & TComment;

const CommentSchema: Schema<CommentDocument> = new Schema({
  postId: { type: Schema.Types.ObjectId, required: true, ref: "Post" },
  parentId: { type: Schema.Types.ObjectId, ref: "Comment", default: null },
  user: { type: String, required: true },
  nickname: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Comment: Model<CommentDocument> =
  mongoose.models.Comment || mongoose.model<CommentDocument>("Comment", CommentSchema);

export default Comment;
