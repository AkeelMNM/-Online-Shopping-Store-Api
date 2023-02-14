import express, { Request, Response, NextFunction } from 'express';
import createError from "http-errors";
import { json } from 'body-parser';
import path from "path";
import logger from "morgan";
import mongoose from 'mongoose';
import cors from "cors";
import * as dotenv from 'dotenv';
import ErrorHandler from './middlewares/ErrorHandler';
import { indexRouter } from './routes/index';
import { productsRouter } from './routes/productsRouter'
import { shoppingCartRouter } from './routes/shoppingCartRouter';
import { contentRouter } from './routes/contentRouter';
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

/**
 * view engine setup
 */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(json());
app.use(cors());

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/product', productsRouter);
app.use('/cart', shoppingCartRouter);
app.use('/content', contentRouter);

/**
 * catch 404 and forward to error handler
 */
app.use(function (req: Request, res: Response, next: NextFunction) {
  next(createError(404));
});

/**
 * error handler
 */
app.use(ErrorHandler);

/**
 * Assign in Port
 */
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server is listening on port ${port}....`);
})

