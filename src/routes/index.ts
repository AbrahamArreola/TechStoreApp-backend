import express, { Request, Response } from "express";
import productRoutes from "./products";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
    res.send("Hello world");
});

router.use(productRoutes);

export default router;
