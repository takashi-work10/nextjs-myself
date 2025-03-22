import { Document, Model, Schema, model, models, } from "mongoose";

type TPost = {
  user: Schema.Types.ObjectId; 
  content: string;
  createdAt: Date;
  updatedAt: Date;
  likes: number;
  likedBy: string[];
};

type PostDocument = Document & TPost;

const PostSchema: Schema<PostDocument> = new Schema({

  user: { type: Schema.Types.ObjectId, ref: "UserProfile", required: true },
  content: { type: String, required: true },
  likes: { type: Number, default: 0 },
  likedBy: { type: [String], default: [] },
  },
  { timestamps: true } 
  );

const Post: Model<PostDocument> =
  models.Post || model<PostDocument>("Post", PostSchema);

export default Post;
export type { TPost, PostDocument };
