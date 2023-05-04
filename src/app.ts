import express from 'express';
import 'express-async-errors';
import { NotFoundError } from './errors/not-found-error';
import { errorHandler } from './middlewares/error-handler';
import { signinRouter } from './routes/signin';
import { signupRouter } from './routes/signup';
import { signoutRouter } from './routes/signout';
import { currentUserRouter } from './routes/currentUser';
import { privateRouteRouter } from './routes/privateRoute';
import dotenv from 'dotenv';

dotenv.config();

import cookieSession from 'cookie-session';

const app = express();

app.use(express.json());
app.use(
  cookieSession({
    signed: false,
  })
);

app.use(privateRouteRouter);
app.use(currentUserRouter);
app.use(signinRouter);
app.use(signupRouter);
app.use(signoutRouter);

app.get('*', () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
