import express from 'express';
import { getAllContent, storeContent } from '../controllers/content-controller';

const contentRouter = express.Router();

contentRouter.post('/', storeContent);

contentRouter.get('/', getAllContent);

export { contentRouter };