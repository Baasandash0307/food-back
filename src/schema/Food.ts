import mongoose from "mongoose";

const foodSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        image: String,
        ingredients: {
            type: String,
            required: true
        },
        category: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "category"
        },
    },
    {
        timestamps: true
    }
)

export const Food = mongoose.model("foods", foodSchema);
