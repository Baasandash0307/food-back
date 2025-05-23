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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const food_1 = __importDefault(require("./routes/food"));
const connection_1 = require("./utils/connection");
const category_1 = __importDefault(require("./routes/category"));
const app = (0, express_1.default)();
const port = 8000;
app.use(express_1.default.json());
app.use('/api/v1/foods', food_1.default);
app.use('/api/v1/categories', category_1.default);
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, connection_1.connection)();
    return console.log(`Server is runnning on http://localhost:${port}`);
}));
