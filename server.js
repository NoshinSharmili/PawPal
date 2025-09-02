// server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const petRoutes = require('./routes/petRoutes');
const adoptionApplicationRoutes = require('./routes/adoptionApplicationRoutes');
const vetRoutes = require('./routes/vetRoutes');
const healthRecordRoutes = require('./routes/healthRecordRoutes');
const fosterRoutes = require('./routes/fosterRoutes');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');
const cors = require('cors');
const session = require('express-session'); 

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json()); // Parse JSON
app.use(session({
  secret: process.env.SESSION_SECRET || 'pawpal_secret',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, httpOnly: true, maxAge: 24 * 60 * 60 * 1000 }
}));

app.use('/api/users', userRoutes);
app.use('/api/pets', petRoutes);
app.use('/api/adoption-applications', adoptionApplicationRoutes);
app.use('/api/vets', vetRoutes);
app.use('/api/health-records', healthRecordRoutes);
app.use('/api/fosters', fosterRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
