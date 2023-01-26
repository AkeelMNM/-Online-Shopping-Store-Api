import express, { Request, Response, NextFunction } from 'express';
import createError from "http-errors";
import { json } from 'body-parser';
import path from "path";
import logger from "morgan";
import cors from "cors";
import { indexRouter } from './routes/index';
import { productsRouter } from './routes/productsRouter'
import * as dotenv from 'dotenv';
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

//Assign in Port
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server is listening on port ${port}....`);
})

