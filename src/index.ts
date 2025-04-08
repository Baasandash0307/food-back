import express from "express";
import foodRouter from "./routes/food";
import { connection } from "./utils/connection";
import categoryRouter from "./routes/category";
import cors from "cors";

const app = express();
const port = 8000;
app.use(express.json());
app.use(cors());

app.use("/api/v1/foods", foodRouter);
app.use("/api/v1/categories", categoryRouter);

app.listen(port, async () => {
  await connection();
  return console.log(`Server is runnning on http://localhost:${port}`);
});
