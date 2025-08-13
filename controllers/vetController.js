const Vet = require('../models/Vet');

// Create a new vet
const createVet = async (req, res) => {
  try {
    const {
      name,
      clinicName,
      specialization,
      phone,
      email,
      address,
      coordinates, // [longitude, latitude]
      availability,
      services,
      licenseNumber,
      experienceYears,
      profilePicture
    } = req.body;

    // Validate coordinates
    if (!coordinates || coordinates.length !== 2) {
      return res.status(400).json({ 
        error: 'Valid coordinates [longitude, latitude] are required' 
      });
    }

    const vet = new Vet({
      name,
      clinicName,
      specialization,
      phone,
      email,
      address,
      location: {
        type: 'Point',
        coordinates: coordinates
      },
      availability,
      services,
      licenseNumber,
      experienceYears,
      profilePicture
    });

    await vet.save();
    res.status(201).json({
      success: true,
      data: vet,
      message: 'Vet created successfully'
    });
  } catch (error) {
    res.status(400).json({ 
      success: false,
      error: error.message 
    });
  }
};

// Get all vets
const getAllVets = async (req, res) => {
  try {
    const vets = await Vet.find({ isActive: true });
    res.json({
      success: true,
      count: vets.length,
      data: vets
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      error: error.message 
    });
  }
};

// Get vet by ID
const getVetById = async (req, res) => {
  try {
    const { id } = req.params;
    const vet = await Vet.findById(id);
    
    if (!vet) {
      return res.status(404).json({ 
        success: false,
        error: 'Vet not found' 
      });
    }
    
    res.json({
      success: true,
      data: vet
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      error: error.message 
    });
  }
};

// Get nearby vets based on user location
const getNearbyVets = async (req, res) => {
  try {
    const { longitude, latitude, maxDistance = 10000 } = req.query; // maxDistance in meters

    if (!longitude || !latitude) {
      return res.status(400).json({
        success: false,
        error: 'Longitude and latitude are required'
      });
    }

    const lng = parseFloat(longitude);
    const lat = parseFloat(latitude);
    const maxDist = parseInt(maxDistance);

    // MongoDB geospatial query to find nearby vets
    const nearbyVets = await Vet.aggregate([
      {
        $geoNear: {
          near: {
            type: 'Point',
            coordinates: [lng, lat]
          },
          distanceField: 'distance',
          maxDistance: maxDist,
          spherical: true,
          query: { isActive: true }
        }
      },
      {
        $addFields: {
          distanceInKm: { $round: [{ $divide: ['$distance', 1000] }, 2] }
        }
      },
      {
        $sort: { distance: 1 }
      }
    ]);

    res.json({
      success: true,
      userLocation: { longitude: lng, latitude: lat },
      searchRadius: `${maxDist/1000}km`,
      count: nearbyVets.length,
      data: nearbyVets
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Search vets by various criteria
const searchVets = async (req, res) => {
  try {
    const { 
      specialization, 
      services, 
      city, 
      emergencyService,
      longitude,
      latitude,
      maxDistance = 10000
    } = req.query;

    let query = { isActive: true };
    let aggregationPipeline = [];

    // If location is provided, start with geospatial query
    if (longitude && latitude) {
      const lng = parseFloat(longitude);
      const lat = parseFloat(latitude);
      const maxDist = parseInt(maxDistance);

      aggregationPipeline.push({
        $geoNear: {
          near: {
            type: 'Point',
            coordinates: [lng, lat]
          },
          distanceField: 'distance',
          maxDistance: maxDist,
          spherical: true,
          query: { isActive: true }
        }
      });
    } else {
      aggregationPipeline.push({ $match: query });
    }

    // Add filters
    const matchStage = {};
    
    if (specialization) {
      matchStage.specialization = specialization;
    }
    
    if (services) {
      matchStage.services = { $in: services.split(',') };
    }
    
    if (city) {
      matchStage['address.city'] = new RegExp(city, 'i');
    }
    
    if (emergencyService) {
      matchStage['availability.emergencyService'] = emergencyService === 'true';
    }

    if (Object.keys(matchStage).length > 0) {
      aggregationPipeline.push({ $match: matchStage });
    }

    // Add distance calculation if location was provided
    if (longitude && latitude) {
      aggregationPipeline.push({
        $addFields: {
          distanceInKm: { $round: [{ $divide: ['$distance', 1000] }, 2] }
        }
      });
      aggregationPipeline.push({ $sort: { distance: 1 } });
    } else {
      aggregationPipeline.push({ $sort: { 'rating.average': -1 } });
    }

    const vets = await Vet.aggregate(aggregationPipeline);

    res.json({
      success: true,
      count: vets.length,
      filters: {
        specialization,
        services: services ? services.split(',') : undefined,
        city,
        emergencyService,
        location: longitude && latitude ? { longitude, latitude } : undefined
      },
      data: vets
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Update vet information
const updateVet = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // If coordinates are being updated, format them properly
    if (updateData.coordinates) {
      updateData.location = {
        type: 'Point',
        coordinates: updateData.coordinates
      };
      delete updateData.coordinates;
    }

    const vet = await Vet.findByIdAndUpdate(
      id, 
      updateData, 
      { new: true, runValidators: true }
    );

    if (!vet) {
      return res.status(404).json({
        success: false,
        error: 'Vet not found'
      });
    }

    res.json({
      success: true,
      data: vet,
      message: 'Vet updated successfully'
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// Delete/deactivate vet
const deleteVet = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Soft delete by setting isActive to false
    const vet = await Vet.findByIdAndUpdate(
      id,
      { isActive: false },
      { new: true }
    );

    if (!vet) {
      return res.status(404).json({
        success: false,
        error: 'Vet not found'
      });
    }

    res.json({
      success: true,
      message: 'Vet deactivated successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

module.exports = {
  createVet,
  getAllVets,
  getVetById,
  getNearbyVets,
  searchVets,
  updateVet,
  deleteVet
};