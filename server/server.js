import express from 'express';
import env from 'dotenv';
import 'express-async-errors';
import morgan from 'morgan';

import connectDB from './db/connect.js';
import authRouter from './Routes/authRoutes.js';
import jobsRouter from './Routes/jobsRoutes.js';

//미들웨어
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
import authenticateUser from './middleware/auth.js'

env.config();
const app = express();

const port = process.env.PORT || 5000;
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ msg: '웰컴' });
});
app.get('/api/v1', (req, res) => {
  res.json({ msg: 'api' });
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs',authenticateUser, jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(port, () => {
      console.log(`${port}포트 연결중`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
