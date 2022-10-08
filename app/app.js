/*
COMP229-F2022-ASSIGNMENT1-822281549
Sheila Donnelly
Student #822281549
October 7th, 2022
*/


//import express using es6+
import express from "express";
import cookieParser from "cookie-parser";
import logger from 'morgan';
import session from "express-session";

//ES Modules fix for _dirname
import path, {dirname} from 'path';
import {fileURLToPath} from 'url';
const _dirname = dirname(fileURLToPath(import.meta.url));

//Configuration Module
import { Secret } from "../config/config.js";

//IMPORT ROUTER
import indexRouter from './routes/index.js';

//instantiate app server
const app = express();

//set up ViewEngine EJS
app.set('views', path.join(_dirname, '/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(_dirname, '../public')));
app.use(session({
    secret: Secret,
    saveUninitialied: false,
    resave: false
}));

//Use Routes - to link to express application
app.use('/', indexRouter);

export default app;

