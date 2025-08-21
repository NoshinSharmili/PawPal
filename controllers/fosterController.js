const Foster = require('../models/Foster');

// Create a new foster profile
const createFosterProfile = async (req, res) => {
  try {
    const {
      userId,
      fullName,
      email,
      phone,
      address,
      city,
      zipCode,
      experience,
      preferredPets,
      maxPets,
      homeType,
      hasYard,
      hasOtherPets,
      otherPetsDetails,
      availability,
      emergencyContact,
      emergencyPhone,
      specialRequirements
    } = req.body;

    // Check if foster profile already exists for this user
    const existingFoster = await Foster.findOne({ userId });
    if (existingFoster) {
      return res.status(400).json({ error: 'Foster profile already exists for this user' });
    }

    const foster = new Foster({
      userId,
      fullName,
      email,
      phone,
      address,
      city,
      zipCode,
      experience,
      preferredPets,
      maxPets: parseInt(maxPets),
      homeType,
      hasYard,
      hasOtherPets,
      otherPetsDetails,
      availability,
      emergencyContact,
      emergencyPhone,
      specialRequirements
    });

    await foster.save();
    res.status(201).json({
      message: 'Foster profile created successfully',
      foster
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get foster profile by user ID
const getFosterByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const foster = await Foster.findOne({ userId }).populate('userId', 'name email');
    
    if (!foster) {
      return res.status(404).json({ error: 'Foster profile not found' });
    }
    
    res.json(foster);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all foster profiles
const getAllFosters = async (req, res) => {
  try {
    const fosters = await Foster.find().populate('userId', 'name email');
    res.json(fosters);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get available foster profiles only
const getAvailableFosters = async (req, res) => {
  try {
    const availableFosters = await Foster.find({ 
      availabilityStatus: 'available' 
    }).populate('userId', 'name email');
    
    res.json(availableFosters);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update availability status
const updateAvailabilityStatus = async (req, res) => {
  try {
    console.log('Update availability route hit');
    console.log('User ID:', req.params.userId);
    console.log('Request body:', req.body);
    
    const { userId } = req.params;
    const { availabilityStatus } = req.body;

    // Validate availability status
    if (!['available', 'unavailable'].includes(availabilityStatus)) {
      return res.status(400).json({ 
        error: 'Invalid availability status. Must be either "available" or "unavailable"' 
      });
    }

    const foster = await Foster.findOneAndUpdate(
      { userId },
      { availabilityStatus },
      { new: true }
    );

    if (!foster) {
      return res.status(404).json({ error: 'Foster profile not found' });
    }

    res.json({
      message: 'Availability status updated successfully',
      foster
    });
  } catch (error) {
    console.error('Update availability error:', error);
    res.status(400).json({ error: error.message });
  }
};
// Update foster profile
const updateFosterProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    const updateData = req.body;

    // Remove userId from update data to prevent changing it
    delete updateData.userId;

    const foster = await Foster.findOneAndUpdate(
      { userId },
      updateData,
      { new: true, runValidators: true }
    );

    if (!foster) {
      return res.status(404).json({ error: 'Foster profile not found' });
    }

    res.json({
      message: 'Foster profile updated successfully',
      foster
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get foster profile by ID
const getFosterById = async (req, res) => {
  try {
    const { id } = req.params;
    const foster = await Foster.findById(id).populate('userId', 'name email');
    
    if (!foster) {
      return res.status(404).json({ error: 'Foster profile not found' });
    }
    
    res.json(foster);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete foster profile
const deleteFosterProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    const foster = await Foster.findOneAndDelete({ userId });
    
    if (!foster) {
      return res.status(404).json({ error: 'Foster profile not found' });
    }
    
    res.json({ 
      message: 'Foster profile deleted successfully', 
      foster 
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Add review to foster
const addFosterReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { reviewerId, reviewerName, comment, rating } = req.body;

    const foster = await Foster.findById(id);
    if (!foster) {
      return res.status(404).json({ error: 'Foster profile not found' });
    }

    foster.reviews.push({
      reviewerId,
      reviewerName,
      comment,
      rating
    });

    // Update overall rating
    const totalRating = foster.reviews.reduce((sum, review) => sum + review.rating, 0);
    foster.rating = totalRating / foster.reviews.length;

    await foster.save();

    res.json({
      message: 'Review added successfully',
      foster
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createFosterProfile,
  getFosterByUserId,
  getAllFosters,
  getAvailableFosters,
  updateAvailabilityStatus,
  updateFosterProfile,
  getFosterById,
  deleteFosterProfile,
  addFosterReview
};