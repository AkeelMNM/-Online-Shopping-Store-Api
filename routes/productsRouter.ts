import express from 'express';
import bodyParser from "body-parser";
import { getAllProducts, getProductsByCategory, getProduct } from '../controllers/productsController';

const productsRouter = express.Router();

productsRouter.get('/', getAllProducts);

productsRouter.get('/category/:name', getProductsByCategory);

export { productsRouter };