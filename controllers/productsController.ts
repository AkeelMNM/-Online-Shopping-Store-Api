import { Request, Response, NextFunction } from 'express'
import path from 'path';
import fs from 'fs';
import { Product } from '../models/product';

const productsJsonPath = path.join(__dirname, '../products.json');
const products = JSON.parse(fs.readFileSync(productsJsonPath, { encoding: 'utf-8' }));

export const getAllProducts = (req: Request, res: Response, next: NextFunction) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json")
    res.json(products);
}

export const getProductsByCategory = (req: Request, res: Response, next: NextFunction) => {
    const categorizedProducts: Product[] = new Array();
    const name = req.params.name;

    products.map((product: Product) => {
        if (product.category.includes(name)) {
            categorizedProducts.push(product)
        }
    })

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json")
    res.json(categorizedProducts);
}

export const getProduct = (req: Request, res: Response, next: NextFunction) => {

}