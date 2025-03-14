"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
// my-notification-app/socket-server.ts
var dotenv = require("dotenv");
dotenv.config({ path: ".env.local" }); // プロジェクトルートの .env.local から環境変数を読み込む
var http_1 = require("http");
var socket_io_1 = require("socket.io");
var db_1 = require("../lib/db"); // DB接続関数（lib/db.ts）
var Notification_1 = require("../models/Notification"); // 通知専用モデル（models/Notification.ts）
var httpServer = (0, http_1.createServer)();
var io = new socket_io_1.Server(httpServer, {
    cors: { origin: "*" } // すべてのオリジンからの接続を許可
});
// ユーザーIDと socketID の対応を管理するマップ
var userSocketMap = new Map();
io.on("connection", function (socket) {
    console.log("新しいユーザーが接続:", socket.id);
    // クライアントから「register」イベントでユーザーIDを受け取る
    socket.on("register", function (userId) {
        var _a;
        if (userSocketMap.has(userId)) {
            (_a = userSocketMap.get(userId)) === null || _a === void 0 ? void 0 : _a.push(socket.id);
        }
        else {
            userSocketMap.set(userId, [socket.id]);
        }
        console.log("\u30E6\u30FC\u30B6\u30FC ".concat(userId, " \u304C socket ").concat(socket.id, " \u3068\u3057\u3066\u767B\u9332\u3055\u308C\u307E\u3057\u305F"));
    });
    // 通知送信要求を受け取る（postId を含む）
    socket.on("sendNotification", function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var savedNotification, error_1, receiverSocketIds;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("通知送信要求:", data);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    // DBに接続して通知データを保存
                    return [4 /*yield*/, (0, db_1.connectToDatabase)()];
                case 2:
                    // DBに接続して通知データを保存
                    _a.sent();
                    return [4 /*yield*/, Notification_1.default.create({
                            receiver: data.receiverId,
                            message: data.message,
                            postId: data.postId,
                        })];
                case 3:
                    savedNotification = _a.sent();
                    console.log("通知DBに保存:", savedNotification);
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.error("通知保存エラー:", error_1);
                    return [3 /*break*/, 5];
                case 5:
                    receiverSocketIds = userSocketMap.get(data.receiverId);
                    if (receiverSocketIds && receiverSocketIds.length > 0) {
                        receiverSocketIds.forEach(function (socketId) {
                            io.to(socketId).emit("receiveNotification", { message: data.message, postId: data.postId });
                        });
                    }
                    else {
                        console.log("\u30E6\u30FC\u30B6\u30FC ".concat(data.receiverId, " \u306E\u63A5\u7D9A\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093"));
                    }
                    return [2 /*return*/];
            }
        });
    }); });
    socket.on("disconnect", function () {
        var e_1, _a;
        console.log("ユーザーが切断:", socket.id);
        try {
            // 切断した socket.id を各ユーザーの登録情報から削除
            for (var _b = __values(userSocketMap.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), userId = _d[0], socketIds = _d[1];
                var updatedSocketIds = socketIds.filter(function (id) { return id !== socket.id; });
                if (updatedSocketIds.length > 0) {
                    userSocketMap.set(userId, updatedSocketIds);
                }
                else {
                    userSocketMap.delete(userId);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    });
});
httpServer.listen(3001, function () {
    console.log("通知サーバーはポート3001で動いています");
});
