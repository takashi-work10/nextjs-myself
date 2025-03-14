"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// models/Notification.ts
var mongoose_1 = require("mongoose");
var NotificationSchema = new mongoose_1.default.Schema({
    receiver: { type: String, required: true }, // 通知を受け取るユーザーのID
    message: { type: String, required: true }, // 通知メッセージ
    postId: { type: String, required: true }, // 対象の投稿ID
    read: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
});
exports.default = mongoose_1.default.models.Notification || mongoose_1.default.model("Notification", NotificationSchema);
