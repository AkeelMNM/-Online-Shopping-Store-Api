import express from 'express';
import { getAllProducts, getProductsByCategory, getProduct } from '../controllers/productsController';

const productsRouter = express.Router();

productsRouter.get('/', getAllProducts);

productsRouter.get('/category/:name', getProductsByCategory);

productsRouter.get('/:id', getProduct);

export { productsRouter };