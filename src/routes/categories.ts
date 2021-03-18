import express from "express";
import { CategoryController } from "../controllers/category-controller";

const categoryController = new CategoryController();
const app = express.Router();

app.get("/categories", categoryController.getAll);

export default app;
