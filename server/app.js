import dotenv from 'dotenv';
import { connection } from './mysql/index.js';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import session from 'express-session';

import menuRouter from './routes/menu.js';

dotenv.config();
const app = express();

connection.connect();

connection.query("set session character_set_connection=utf8;");
connection.query("set session character_set_results=utf8;");
connection.query("set session character_set_client=utf8;");

app.use(morgan('dev'))
app.use(cors({
    origin: ['http://localhost:3060'],
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
}));

app.get('/', (req, res) => {
    res.send('hello express');
});
app.use('/menu', menuRouter);

app.listen(3065, () => {
    console.log('서버 실행 중!');
});
