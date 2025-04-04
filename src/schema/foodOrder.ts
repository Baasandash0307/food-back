import mongoose from "mongoose";

const foodOrder = new mongoose.Schema({
    totalPrice: {
        type: Number,
        required: true
    },
})

export const Food = mongoose.model("order", foodOrder);