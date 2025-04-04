"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategoriesWithFoods = exports.DeleteCategoryById = exports.UpdateCategoryById = exports.getCategoryById = exports.getCategory = exports.createCategory = void 0;
const category_1 = require("../schema/category");
const createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const created = yield category_1.Category.create(req.body);
        res.json({ success: true, category: created });
    }
    catch (error) {
        res.status(401).json({ success: false, msg: error });
    }
});
exports.createCategory = createCategory;
const getCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const created = yield category_1.Category.find(req.body);
        res.json({ success: true, category: created });
    }
    catch (error) {
        res.status(401).json({ success: false, msg: error });
    }
});
exports.getCategory = getCategory;
const getCategoryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const created = yield category_1.Category.findById(req.body);
        res.json({ success: true, category: created });
    }
    catch (error) {
        res.status(401).json({ success: false, msg: error });
    }
});
exports.getCategoryById = getCategoryById;
const UpdateCategoryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const created = yield category_1.Category.findByIdAndUpdate(req.body);
        res.json({ success: true, category: created });
    }
    catch (error) {
        res.status(401).json({ success: false, msg: error });
    }
});
exports.UpdateCategoryById = UpdateCategoryById;
const DeleteCategoryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const created = yield category_1.Category.findByIdAndDelete(req.body);
        res.json({ success: true, category: created });
    }
    catch (error) {
        res.status(401).json({ success: false, msg: error });
    }
});
exports.DeleteCategoryById = DeleteCategoryById;
const getCategoriesWithFoods = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield category_1.Category.aggregate([
            {
                '$lookup': {
                    from: 'foods',
                    localField: '_id',
                    foreignField: 'category',
                    as: 'foods'
                }
            }
        ]);
        res.json({ success: true, categories });
    }
    catch (error) {
        res.status(404).json({ success: true, error: error });
    }
});
exports.getCategoriesWithFoods = getCategoriesWithFoods;
