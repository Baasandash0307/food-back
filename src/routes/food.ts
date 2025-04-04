import express from 'express'
import { createFood, DeleteFoodById, GetFood, GetFoodById, getFoods, UpdateFoodById } from '../controller/food';

const foodRouter = express.Router();

foodRouter
    .post('/', createFood,).get('/', getFoods)
    .get('/', GetFood)
    .get('/:id', GetFoodById)
    .patch('/:id', UpdateFoodById)
    .delete('/:id', DeleteFoodById)

export default foodRouter