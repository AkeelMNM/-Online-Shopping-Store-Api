import { Request, Response, NextFunction } from 'express'
import ShoppingCart from '../models/shoppingCart';

export const storeShoppingCartItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.body) {
            next({ status: 404, message: `No body data passed`, stack: Error().stack });
        }

        const data = req.body;
        const shoppingCart = await ShoppingCart.create(data);

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json")
        res.json(shoppingCart);

    } catch (error) {
        next(error);
    }

}

export const getShoppingCartItemByUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.params) {
            next({ status: 404, message: `No parameters passed`, stack: Error().stack });
        }

        const id = req.params.id;
        const shoppingCart = await ShoppingCart.find({ userId: id });

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json")
        res.json(shoppingCart);

    } catch (error) {
        next(error);
    }

}

export const removeShoppingCartItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.params) {
            next({ status: 404, message: `No parameters passed`, stack: Error().stack });
        }

        const id = req.params.id;
        await ShoppingCart.deleteOne({ _id: id });

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json")
        res.json({ status: 200, message: 'Shopping Cart Item Successfully Removed' });

    } catch (error) {
        next(error);
    }

}

export const removeShoppingCartItemsOfUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.params) {
            next({ status: 404, message: `No parameters passed`, stack: Error().stack });
        }

        const id = req.params.id;
        await ShoppingCart.deleteMany({ userId: id });

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json")
        res.json({ status: 200, message: `Shopping Cart Items of userId:${id} Successfully Removed` });

    } catch (error) {
        next(error);
    }
}