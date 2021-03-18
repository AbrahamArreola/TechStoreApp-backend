import express from "express";
import { ProductController } from "../controllers/product-controller";

const productController = new ProductController();
const app = express.Router();

app.post("/products/create", productController.create);
app.get("/products", productController.getAll);
app.get("/product/:id", productController.get);

export default app;
