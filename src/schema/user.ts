import mongoose from "mongoose";

const user = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        }
    }
)

export const Food = mongoose.model("user", user);