import { Request, Response, NextFunction } from 'express'
import Invoice from '../models/invoice';

export const storeUserPaymentDetails = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        if (!req.body) {
            next({ status: 404, message: `No data was passed in the request body`, stack: Error().stack });
        }

        const data = req.body;
        console.log(data);
        
        await Invoice.create(data);

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json")
        res.json({ status: 200, message: 'User order shipping data is successfully stored.' });

    } catch (error) {
        next(error);
    }

}

export const removeUserPaymentDetails = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        if (!req.params) {
            next({ status: 404, message: `No parameters were passed in the request`, stack: Error().stack });
        }

        const id = req.params.id;
        await Invoice.deleteOne({ _id: id });

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json")
        res.json({ status: 200, message: 'User Payment Details Successfully Removed' });

    } catch (error) {
        next(error);
    }

}