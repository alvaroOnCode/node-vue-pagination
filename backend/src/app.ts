import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import path from 'path';

// Routers
import indexRouter from './routes/index';
import articleRouter from './routes/article';

// Dotenv
dotenv.config({
    path: path.join(__dirname, './env/.env')
})

// Initializations
const app = express();

// Middlewares
app.use(cors());
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

// Routes
app.use(indexRouter);
app.use('/articles', articleRouter);

export default app;