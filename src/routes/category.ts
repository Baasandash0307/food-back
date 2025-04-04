import express from 'express'
import { createCategory, DeleteCategoryById, getCategoriesWithFoods, getCategory, getCategoryById, UpdateCategoryById } from '../controller/category';

const categoryRouter = express.Router();

categoryRouter
    .post('/', createCategory,)
    .get('/with-foods', getCategoriesWithFoods)
    .get('/', getCategory)
    .get('/:id', getCategoryById)
    .patch('/:id', UpdateCategoryById)
    .delete('/:id', DeleteCategoryById)

export default categoryRouter