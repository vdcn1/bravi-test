"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    gender: String,
    avatar: String,
    contacts: {
        email: String,
        phone: String,
        whatsapp: String
    },
});
exports.User = (0, mongoose_1.model)('User', userSchema);
