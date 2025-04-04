import { Category } from "../schema/category";
import { Request, Response } from "express";

export const createCategory = async (req: Request, res: Response) => {
    try {
        const created = await Category.create(req.body)
        res.json({ success: true, category: created })
    } catch (error) {
        res.status(401).json({ success: false, msg: error })
    }
}

export const getCategory = async (req: Request, res: Response) => {
    try {
        const created = await Category.find(req.body)
        res.json({ success: true, category: created })
    } catch (error) {
        res.status(401).json({ success: false, msg: error })
    }
}

export const getCategoryById = async (req: Request, res: Response) => {
    try {
        const created = await Category.findById(req.body)
        res.json({ success: true, category: created })
    } catch (error) {
        res.status(401).json({ success: false, msg: error })
    }
}

export const UpdateCategoryById = async (req: Request, res: Response) => {
    try {
        const created = await Category.findByIdAndUpdate(req.body)
        res.json({ success: true, category: created })
    } catch (error) {
        res.status(401).json({ success: false, msg: error })
    }
}

export const DeleteCategoryById = async (req: Request, res: Response) => {
    try {
        const created = await Category.findByIdAndDelete(req.body)
        res.json({ success: true, category: created })
    } catch (error) {
        res.status(401).json({ success: false, msg: error })
    }
}

export const getCategoriesWithFoods = async (req: Request, res: Response) => {
    try {
        const categories = await Category.aggregate(
            [
                {
                    '$lookup': {
                        from: 'foods',
                        localField: '_id',
                        foreignField: 'category',
                        as: 'foods'
                    }
                }
            ]
        )

        res.json({ success: true, categories })
    } catch (error) {
        res.status(404).json({ success: true, error: error })
    }
}