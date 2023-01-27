import express, { Request, Response, NextFunction } from 'express';
import createError from "http-errors";
import { json } from 'body-parser';
import path from "path";
import logger from "morgan";
import cors from "cors";
import { indexRouter } from './routes/index';
import { productsRouter } from './routes/productsRouter'
import * as dotenv from 'dotenv';
import ErrorHandler from './middlewares/ErrorHandler';
dotenv.config();

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

