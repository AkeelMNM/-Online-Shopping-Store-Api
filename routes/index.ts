import express from 'express';
import bodyParser from "body-parser";
import { initial } from '../controllers/index';

const indexRouter = express.Router();

indexRouter.get('/', initial)


export { indexRouter };