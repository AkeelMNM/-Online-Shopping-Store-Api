import express from 'express';
import mongoose from 'mongoose'
import { json } from 'body-parser';
import path from "path";
import logger from "morgan";
import cors from "cors";
import { indexRouter } from './routes'

const app = express();

// mongoose.connect('mongodb://localhost:27017/test-todo', {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true
// }, () => {
//   console.log('connected to database')
// })

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

app.use(indexRouter);

