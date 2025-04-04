"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const food_1 = require("../controller/food");
const foodRouter = express_1.default.Router();
foodRouter
    .post('/', food_1.createFood).get('/', food_1.getFoods)
    .get('/', food_1.GetFood)
    .get('/:id', food_1.GetFoodById)
    .patch('/:id', food_1.UpdateFoodById)
    .delete('/:id', food_1.DeleteFoodById);
exports.default = foodRouter;
