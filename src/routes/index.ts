import express, { Request, Response } from "express";
import productRoutes from "./products";
import categoryRoutes from "./categories";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
    res.send("Hello world");
});

router.use(productRoutes);
router.use(categoryRoutes);

export default router;
