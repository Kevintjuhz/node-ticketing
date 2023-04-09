import express from "express";
import 'express-async-errors';
import {json} from 'body-parser';
import cookieSession from "cookie-session";
import {errorHandler, NotFoundError, currentUser} from "@kqtickets/common";
import {newOrderRouter} from "./routes/new";
import {showOrderRouter} from "./routes/show";
import {deleteOrderRouter} from "./routes/delete";
import {indexOrderRouter} from "./routes/index";

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
    cookieSession({
        signed: false,
        secure: false
    })
)

app.use(currentUser);

app.use(newOrderRouter)
app.use(deleteOrderRouter)
app.use(showOrderRouter);
app.use(indexOrderRouter);

app.all('*', async () => {
    throw new NotFoundError();
});

// dd
app.use(errorHandler)

export { app }