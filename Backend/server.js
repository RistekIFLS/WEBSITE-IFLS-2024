import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import bodyParser from 'body-parser';
import cors from 'cors';
import articleRoutes from './routes/postRoutes.js';
import userRoutes from './routes/userRoutes.js';


const app = express();
app.use(cors());
app.use(bodyParser.json());


// Routes
app.use('/api/articles', articleRoutes);
app.use('/api/users', userRoutes);
console.log(process.env.MONGO_URI);

// Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
