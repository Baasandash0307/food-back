import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            enum: ["ADMIN", "USER"]
        },
    },
    {
        timestamps: true
    }
)

export const User = mongoose.model("user", UserSchema);