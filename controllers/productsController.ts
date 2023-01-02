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
    // products.map((product: Product) => {
    //     console.log(product.variants);
    // })

    console.log(products[0].variants);

}

export const getProduct = (req: Request, res: Response, next: NextFunction) => {

}