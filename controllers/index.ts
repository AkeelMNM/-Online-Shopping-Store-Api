import { Request, Response, NextFunction } from 'express'

export const initial = (req: Request, res: Response, next: NextFunction) => {
    res.render('index', { title: 'Fashion Studio Store' });
}