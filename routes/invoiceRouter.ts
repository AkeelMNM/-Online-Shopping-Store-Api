import express from 'express';
import { storeUserPaymentDetails, removeUserPaymentDetails } from '../controllers/invoiceController';

const invoiceRouter = express.Router();

invoiceRouter.post('/', storeUserPaymentDetails);

invoiceRouter.delete('/', removeUserPaymentDetails);

export { invoiceRouter };