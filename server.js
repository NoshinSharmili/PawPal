// server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const petRoutes = require('./routes/petRoutes');
const adoptionApplicationRoutes = require('./routes/adoptionApplicationRoutes');
const vetRoutes = require('./routes/vetRoutes');
<<<<<<< HEAD
const fosterRoutes = require('./routes/fosterRoutes'); // NEW: Foster routes
=======
>>>>>>> e1201dbb78164aa3549184cd08020bd0332f1f98
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
<<<<<<< HEAD
app.use('/api/fosters', fosterRoutes); // NEW: Foster routes

=======
>>>>>>> e1201dbb78164aa3549184cd08020bd0332f1f98
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));