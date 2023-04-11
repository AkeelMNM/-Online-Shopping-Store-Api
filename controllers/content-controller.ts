import { Request, Response, NextFunction } from 'express'
import Content from '../models/content';

export const storeContent = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        if (!req.body) {
            next({ status: 404, message: `No data was passed in the request body`, stack: Error().stack });
        }

        const data = req.body;
        const content = await Content.create(data);

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json")
        res.json(content);

    } catch (error) {
        next(error);
    }

}

export const getAllContent = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const content = await Content.find({});

        const carouselContent = content.filter(item => item.type === 'Carousel');
        const qualityContent = content.filter(item => item.type === 'Quality');

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json")
        res.json({ carouselContent, qualityContent });

    } catch (error) {
        next(error);
    }

}