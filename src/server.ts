import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/authRoutes';
import taskRoutes from './routes/taskRoutes';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

mongoose.connect(process.env.MONGO_URI as string).then(() => {
  app.listen(process.env.PORT, () => {
    console.log('Server running on port', process.env.PORT);
  });
}).catch((error) => {
  console.error('Connection error', error);
});
