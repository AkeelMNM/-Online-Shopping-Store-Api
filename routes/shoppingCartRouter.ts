import express from 'express';
import { storeShoppingCartItem, getShoppingCartItemByUser, removeShoppingCartItem, removeShoppingCartItemsOfUser, updateShoppingCartItem, updateShoppingCartPaymentStatus } from '../controllers/shoppingCartController';
import { authenticateToken } from '../middlewares/authenticate';

const shoppingCartRouter = express.Router();

shoppingCartRouter.post('/', authenticateToken, storeShoppingCartItem);

shoppingCartRouter.get('/:id', authenticateToken, getShoppingCartItemByUser);

shoppingCartRouter.put('/:id', authenticateToken, updateShoppingCartItem);

shoppingCartRouter.put('/payment/status', authenticateToken, updateShoppingCartPaymentStatus);

shoppingCartRouter.delete('/:id', authenticateToken, removeShoppingCartItem);

shoppingCartRouter.delete('/user/:id', authenticateToken, removeShoppingCartItemsOfUser);

export { shoppingCartRouter };