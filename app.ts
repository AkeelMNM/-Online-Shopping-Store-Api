import express, { Request, Response, NextFunction } from 'express';
import createError from "http-errors";
import { json } from 'body-parser';
import path from "path";
import logger from "morgan";
import mongoose from 'mongoose';
import cors from "cors";
import * as dotenv from 'dotenv';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import errorHandler from './middlewares/error-handler';
import { indexRouter } from './routes/index';
import { productsRouter } from './routes/products-router'
import { shoppingCartRouter } from './routes/shoppingcart-router';
import { contentRouter } from './routes/content-router';
import { invoiceRouter } from './routes/invoice-router';
dotenv.config();

/**
 * Connecting to MongoDB Server
 */
const url = `${process.env.DB_CONN_URL}/${process.env.DB_NAME}` || '';
mongoose.set('strictQuery', false);
const connect = mongoose.connect(url);
connect.then(
  (db) => {
    console.log("MongoDB connected with the server");
  },
  (err) => {
    console.log(err);
  }
);

const app = express();
app.use(cors());
app.use(helmet());
app.use(cookieParser());
app.use(json());


/**
 * view engine setup
 */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));


app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/product', productsRouter);
app.use('/cart', shoppingCartRouter);
app.use('/content', contentRouter);
app.use('/payment', invoiceRouter);

/**
 * catch 404 and forward to error handler
 */
app.use(function (req: Request, res: Response, next: NextFunction) {
  next(createError(404));
});

/**
 * error handler
 */
app.use(errorHandler);


export default app;

