import { Schema, model, models } from "mongoose";

const ContactSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// 既に定義済みなら再利用、なければ新たに定義する
const Contact = models.Contact || model("Contact", ContactSchema);

export default Contact;
