import express from 'express';
import { initial } from '../controllers/index';

const indexRouter = express.Router();

indexRouter.get('/', initial)


export { indexRouter };