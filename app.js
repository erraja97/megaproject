import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";

const app = express();

//configuring middleware

//middleware to use json
app.use(express.json());
//middleware to use form data
app.use(express.urlencoded({ extended: true }));
//using cors
app.use(cors());
//using cookieparser
app.use(cookieParser);
//morgan logger
app.use(morgan("tiny"));

export default app;
