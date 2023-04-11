import express from 'express';
import { storeUserPaymentDetails, removeUserPaymentDetails } from '../controllers/invoice-controller';
import { authenticateToken } from '../authenticate';

const invoiceRouter = express.Router();

invoiceRouter.post('/', authenticateToken, storeUserPaymentDetails);

invoiceRouter.delete('/:id', authenticateToken, removeUserPaymentDetails);

export { invoiceRouter };