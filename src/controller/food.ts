import { Food } from "../schema/Food";
import { Request, Response } from 'express'

export const createFood = async (req: Request, res: Response) => {
    const food = await Food.create(req.body)
    res.status(200).json(food);
}

export const GetFood = async (req: Request, res: Response) => {
    const food = await Food.find({});
    res.status(200).json(food)
}

export const GetFoodById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const food = await Food.findById(id)
    res.status(200).json(food);
}

export const UpdateFoodById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const food = await Food.findByIdAndUpdate(id, req.body, { new: true })

    if (!food) {
        res.status(404).json({ message: "food not found" });
        return;
    }
    res.status(200).json(food);
}

export const DeleteFoodById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const food = await Food.findByIdAndDelete(id)

    if (!food) {
        res.status(404).json({ message: "success" });
        return;
    }
    res.status(200).json({ message: "Food deleted successfully" })
}

export const getFoods = async (req: Request, res: Response) => {
    const foods = await Food.find().populate("category");

    res.json({success: true, foods})
}