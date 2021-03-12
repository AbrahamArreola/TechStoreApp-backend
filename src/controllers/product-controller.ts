import { Request, Response } from "express";
import { Product } from "../models/Product";
import { uploadImage } from '../helpers/image-uploads';

interface IProduct {
    name: string;
    price: number;
    category?: string;
    description: string;
    img: string;
}

export class ProductController {
    async create(req: Request, res: Response) {
        try {
            const body = req.body;

            let product: IProduct = {
                name: body.productName,
                price: body.productPrice,
                description: body.productDescription,
                img: body.productImage,
            };

            console.log(product.img);
            
            /* const newProduct = await Product.create(product);

            res.json({ newProduct }); */
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
            const product = await Product.findByPk(productId);

            res.json({ product });
        } catch (error) {
            res.status(500).json({ error });
        }
    }
}
