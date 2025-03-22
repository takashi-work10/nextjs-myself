// models/UserProfile.ts
import { Schema, model, models } from "mongoose";

const UserProfileSchema = new Schema({
  email: { type: String, required: true, unique: true },
  nickname: { type: String, required: true },
  grade: { type: String },
  school: { type: String },
}, { timestamps: true });

export default models.UserProfile || model("UserProfile", UserProfileSchema);
