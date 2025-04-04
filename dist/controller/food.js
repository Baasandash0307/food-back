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
exports.getFoods = exports.DeleteFoodById = exports.UpdateFoodById = exports.GetFoodById = exports.GetFood = exports.createFood = void 0;
const Food_1 = require("../schema/Food");
const createFood = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const food = yield Food_1.Food.create(req.body);
    res.status(200).json(food);
});
exports.createFood = createFood;
const GetFood = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const food = yield Food_1.Food.find({});
    res.status(200).json(food);
});
exports.GetFood = GetFood;
const GetFoodById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const food = yield Food_1.Food.findById(id);
    res.status(200).json(food);
});
exports.GetFoodById = GetFoodById;
const UpdateFoodById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const food = yield Food_1.Food.findByIdAndUpdate(id, req.body, { new: true });
    if (!food) {
        res.status(404).json({ message: "food not found" });
        return;
    }
    res.status(200).json(food);
});
exports.UpdateFoodById = UpdateFoodById;
const DeleteFoodById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const food = yield Food_1.Food.findByIdAndDelete(id);
    if (!food) {
        res.status(404).json({ message: "success" });
        return;
    }
    res.status(200).json({ message: "Food deleted successfully" });
});
exports.DeleteFoodById = DeleteFoodById;
const getFoods = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const foods = yield Food_1.Food.find().populate("category");
    res.json({ success: true, foods });
});
exports.getFoods = getFoods;
