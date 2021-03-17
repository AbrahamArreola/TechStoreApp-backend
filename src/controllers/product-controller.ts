import { Request, Response } from "express";
import { uploadImage } from "../helpers/image-uploads";
import { Category, Product } from "../models/Relationships";

interface IProduct {
    name: string;
    price: number;
    categoryId?: number;
    description: string;
    img: string;
}

export class ProductController {
    async create(req: Request, res: Response) {
        try {
            const body = req.body;
            const files = req.files;

            const imageResponse = await uploadImage(files);

            const category: string = body.category;

            const product: IProduct = {
                name: body.name,
                price: body.price,
                description: body.description,
                img: imageResponse.secure_url,
            };

            let productCategory = await Category.findOne({
                where: { name: category },
            });

            if (!productCategory) {
                productCategory = await Category.create({ name: category });
            }

            console.log(productCategory?.id);

            const newProduct = await Product.create({
                ...product,
                categoryId: productCategory?.id,
            });

            res.json({ newProduct });
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const products = await Product.findAll({
                order: [["id", "DESC"]],
            });

            res.json({ products });
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    async get(req: Request, res: Response) {
        try {
            const productId = req.params.id;
            const product = await Product.findByPk(productId, {
                include: ["category"],
            });

            res.json({ product });
        } catch (error) {
            res.status(500).json({ error });
        }
    }
}
