import express from 'express';
import { getAllProducts, getProductsByCategory, getProduct, getProductsFilters } from '../controllers/productsController';

const productsRouter = express.Router();

productsRouter.get('/', getAllProducts);

productsRouter.get('/category', getProductsByCategory);

productsRouter.get('/:id', getProduct);

productsRouter.get('/category/filter', getProductsFilters);

export { productsRouter };