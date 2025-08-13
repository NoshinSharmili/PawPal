const express = require('express');
const {
  createVet,
  getAllVets,
  getVetById,
  getNearbyVets,
  searchVets,
  updateVet,
  deleteVet
} = require('../controllers/vetController');

const router = express.Router();

// Create a new vet
router.post('/', createVet);

// Get all vets
router.get('/', getAllVets);

// Get nearby vets based on user location
// Query params: longitude, latitude, maxDistance (optional, default 10km)
// Example: /api/vets/nearby?longitude=90.4125&latitude=23.8103&maxDistance=5000
router.get('/nearby', getNearbyVets);

// Search vets with various filters
// Query params: specialization, services, city, emergencyService, longitude, latitude, maxDistance
// Example: /api/vets/search?specialization=Emergency Care&city=Dhaka&emergencyService=true
router.get('/search', searchVets);

// Get vet by ID
router.get('/:id', getVetById);

// Update vet information
router.put('/:id', updateVet);

// Delete/deactivate vet
router.delete('/:id', deleteVet);

module.exports = router;