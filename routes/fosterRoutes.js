// routes/fosterRoutes.js - Complete file with all methods
const express = require('express');
const {
  createFosterProfile,
  getFosterByUserId,
  getAllFosters,
  getAvailableFosters,
  updateAvailabilityStatus,
  updateFosterProfile,
  getFosterById,
  deleteFosterProfile,
  addFosterReview
} = require('../controllers/fosterController');

const router = express.Router();

// Specific routes first
router.get('/available', getAvailableFosters);
router.post('/', createFosterProfile);
router.get('/', getAllFosters);

// User-specific routes
router.get('/user/:userId', getFosterByUserId);
router.put('/user/:userId', updateFosterProfile);

// Multiple methods for availability update (for compatibility)
router.patch('/user/:userId/availability', updateAvailabilityStatus);
router.put('/user/:userId/availability', updateAvailabilityStatus);
router.post('/user/:userId/update-availability', updateAvailabilityStatus);

router.delete('/user/:userId', deleteFosterProfile);

// ID-specific routes last
router.post('/:id/reviews', addFosterReview);
router.get('/:id', getFosterById);

module.exports = router;