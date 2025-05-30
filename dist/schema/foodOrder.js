"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const foodOrder = new mongoose_1.default.Schema({
    totalPrice: {
        type: Number,
        required: true
    },
});
exports.Food = mongoose_1.default.model("order", foodOrder);
