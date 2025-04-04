"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const category_1 = require("../controller/category");
const categoryRouter = express_1.default.Router();
categoryRouter
    .post('/', category_1.createCategory)
    .get('/with-foods', category_1.getCategoriesWithFoods)
    .get('/', category_1.getCategory)
    .get('/:id', category_1.getCategoryById)
    .patch('/:id', category_1.UpdateCategoryById)
    .delete('/:id', category_1.DeleteCategoryById);
exports.default = categoryRouter;
