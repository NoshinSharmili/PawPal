// server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const petRoutes = require('./routes/petRoutes');
const adoptionApplicationRoutes = require('./routes/adoptionApplicationRoutes');
const vetRoutes = require('./routes/vetRoutes');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json()); // Parse JSON

app.use('/api/users', userRoutes);
app.use('/api/pets', petRoutes);
app.use('/api/adoption-applications', adoptionApplicationRoutes);
app.use('/api/vets', vetRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
