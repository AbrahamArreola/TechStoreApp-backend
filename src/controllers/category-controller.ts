import { Request, Response } from "express";
import { Category } from "../models/Relationships";

export class CategoryController {
    async getAll(req: Request, res: Response) {
        try {
            const categories = await Category.findAll({
                order: [["id", "DESC"]],
                include: ["products"],
            });

            res.json({ categories });
        } catch (error) {
            res.status(500).json({ error });
        }
    }
}
