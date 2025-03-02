// models/UserProfile.ts
import mongoose from "mongoose";

const UserProfileSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  nickname: { type: String, required: true },
  grade: { type: String },
  school: { type: String }
});

export default mongoose.models.UserProfile || mongoose.model("UserProfile", UserProfileSchema);
