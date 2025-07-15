import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';   // <-- add

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

/* middleware */
app.use(cors());
app.use(express.json());

/* routes */
app.use('/api', userRoutes);   // <-- add

/* db & server start */
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/pawpal')
  .then(() => {
    console.log('✅ Mongo connected');
    app.listen(PORT, () => console.log(`🚀 http://localhost:${PORT}`));
  })
  .catch(err => console.error(err));
