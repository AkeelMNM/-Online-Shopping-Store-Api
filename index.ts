import express, { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import createError from "http-errors";
import mongoose from 'mongoose'
import { json } from 'body-parser';
import path from "path";
import logger from "morgan";
import cors from "cors";
import { indexRouter } from './routes/index';
import { productsRouter } from './routes/productsRouter'

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

app.listen(5000, () => {
  console.log('server is listening on port 5000');
})

app.use(json());
app.use(cors());

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/product', productsRouter);

/**
 * catch 404 and forward to error handler
 */
app.use(function (req, res, next) {
  next(createError(404));
});

/**
 * error handler
 */
app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
  console.error(err);
});

