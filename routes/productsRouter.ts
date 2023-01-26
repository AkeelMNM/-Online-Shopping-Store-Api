import express from 'express';
import { getAllProducts, getProductsByCategory } from '../controllers/productsController';

const productsRouter = express.Router();

productsRouter.get('/', getAllProducts);

productsRouter.get('/category/:name', getProductsByCategory);

export { productsRouter };