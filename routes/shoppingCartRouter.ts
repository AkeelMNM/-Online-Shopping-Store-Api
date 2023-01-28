import express from 'express';
import { storeShoppingCartItem, getShoppingCartItemByUser, removeShoppingCartItem, removeShoppingCartItemsOfUser } from '../controllers/shoppingCartController';

const shoppingCartRouter = express.Router();

shoppingCartRouter.post('/', storeShoppingCartItem);

shoppingCartRouter.get('/:id', getShoppingCartItemByUser);

shoppingCartRouter.delete('/:id', removeShoppingCartItem);

shoppingCartRouter.delete('/user/:id', removeShoppingCartItemsOfUser);

export { shoppingCartRouter };