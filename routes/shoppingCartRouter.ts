import express from 'express';
import { storeShoppingCartItem, getShoppingCartItemByUser, removeShoppingCartItem, removeShoppingCartItemsOfUser, updateShoppingCartItem } from '../controllers/shoppingCartController';
import { authenticateToken } from '../authenticate';

const shoppingCartRouter = express.Router();

shoppingCartRouter.post('/', authenticateToken, storeShoppingCartItem);

shoppingCartRouter.get('/:id', authenticateToken, getShoppingCartItemByUser);

shoppingCartRouter.put('/:id', authenticateToken, updateShoppingCartItem);

shoppingCartRouter.delete('/:id', authenticateToken, removeShoppingCartItem);

shoppingCartRouter.delete('/user/:id', authenticateToken, removeShoppingCartItemsOfUser);

export { shoppingCartRouter };