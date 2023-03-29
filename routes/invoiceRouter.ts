import express from 'express';
import { storeUserPaymentDetails, removeUserPaymentDetails } from '../controllers/invoiceController';
import { authenticateToken } from '../authenticate';

const invoiceRouter = express.Router();

invoiceRouter.post('/', authenticateToken, storeUserPaymentDetails);

invoiceRouter.delete('/', authenticateToken, removeUserPaymentDetails);

export { invoiceRouter };