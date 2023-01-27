import { Request, Response, NextFunction } from 'express'
import path from 'path';
import fs from 'fs';
import { Product } from '../models/Product';

const productsJsonPath = path.join(__dirname, '../products.json');
const products: Product[] = JSON.parse(fs.readFileSync(productsJsonPath, { encoding: 'utf-8' }));

export const getAllProducts = (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!products) {
            next({ status: 404, message: `Products not found`, stack: Error().stack });
        } else {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json")
            res.json(products);
        }
    } catch (error) {
        next(error);
    }

}

export const getProductsByCategory = (req: Request, res: Response, next: NextFunction) => {
    try {
        const categorizedProducts: Product[] = new Array();
        const name = req.params.name;

        products.map((product: Product) => {
            if (product.category.includes(name)) {
                categorizedProducts.push(product)
            }
        })

        if (!categorizedProducts) {
            next({ status: 404, message: `Products not found in the requested search category`, stack: Error().stack });
        } else {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json")
            res.json(categorizedProducts);
        }
    } catch (error) {
        next(error);
    }
}



export const getProduct = (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.params) {
            next({ status: 404, message: `No parameters passed`, stack: Error().stack });
        }

        const id = req.params.id;
        const product = products.find(p => p.id === id);

        if (!product) {
            next({ status: 404, message: `Product with id:${id} not found`, stack: Error().stack });
        } else {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json")
            res.json(product);
        }
    } catch (error) {
        next(error);
    }

}