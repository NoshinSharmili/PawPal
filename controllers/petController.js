const Pet = require('../models/Pet');
<<<<<<< HEAD
const AWS = require('aws-sdk');

const dotenv = require('dotenv');
dotenv.config();
// S3 CONFIGURATION - REPLACE DUMMY CREDENTIALS WITH REAL ONES IN PRODUCTION
// The getPresignedUrl endpoint returns a presigned URL for uploading a pet image directly to S3.
// Client should POST { fileName, fileType } to /api/pets/presigned-url to get { uploadURL, key }.
// Then, upload the image file to uploadURL. Save the returned 'key' in the Pet's 'image' field.

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID || 'DUMMY_ACCESS_KEY',
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || 'DUMMY_SECRET_KEY',
  region: process.env.AWS_REGION || 'us-east-1',
  signatureVersion: 'v4',
});

const S3_BUCKET = process.env.AWS_S3_BUCKET || 'mybucketfor-images'; // Replace with your bucket name

console.log('S3 CONFIG:', {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
  bucket: process.env.AWS_S3_BUCKET
});
=======
>>>>>>> e1201dbb78164aa3549184cd08020bd0332f1f98

const createPet = async (req, res) => {
  try {
    const {
      name,
      type,
      breed,
      dob,
      healthStatus,
      vaccinationStatus,
      feedingStatus,
      adoptionStatus,
      needVaccination,
      transferredFood,
<<<<<<< HEAD
      userId,
      image // Add image field
=======
      userId
>>>>>>> e1201dbb78164aa3549184cd08020bd0332f1f98
      // shelterProviderId,
      // rescuerId,
      // vetId
    } = req.body;

    const pet = new Pet({
      name,
      type,
      breed,
      dob,
      healthStatus,
      vaccinationStatus,
      feedingStatus,
      adoptionStatus,
      needVaccination,
      transferredFood,
<<<<<<< HEAD
      userId,
      image // Save image field
=======
      userId
>>>>>>> e1201dbb78164aa3549184cd08020bd0332f1f98
      // shelterProviderId,
      // rescuerId,
      // vetId
    });

    await pet.save();
    res.status(201).json(pet);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
<<<<<<< HEAD
=======

>>>>>>> e1201dbb78164aa3549184cd08020bd0332f1f98
const getPetsByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const pets = await Pet.find({ userId });
    res.json(pets);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllPets = async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getPetById = async (req, res) => {
  try {
    const { id } = req.params;
    const pet = await Pet.findById(id);
    if (!pet) {
      return res.status(404).json({ error: 'Pet not found' });
    }
    res.json(pet);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

<<<<<<< HEAD
const getPresignedUrl = async (req, res) => {
  try {
    const { fileName, fileType } = req.body;
    if (!fileName || !fileType) {
      return res.status(400).json({ error: 'fileName and fileType are required' });
    }
    const s3Params = {
      Bucket: S3_BUCKET,
      Key: `pets/${Date.now()}_${fileName}`,
      Expires: 60 * 5, // 5 minutes
      ContentType: fileType,
      ACL: 'public-read',


    };
    const uploadURL = await s3.getSignedUrlPromise('putObject', s3Params);
    console.log('Generated presigned URL:', uploadURL);
    res.json({ uploadURL, key: s3Params.Key });
  } catch (error) {
    console.error('Error generating presigned URL:', error);
    res.status(500).json({ error: error.message });
  }
};
=======
// NEW: Delete pet function
>>>>>>> e1201dbb78164aa3549184cd08020bd0332f1f98
const deletePet = async (req, res) => {
  try {
    const { id } = req.params;
    const pet = await Pet.findByIdAndDelete(id);
    
    if (!pet) {
      return res.status(404).json({ error: 'Pet not found' });
    }
    
    res.json({ message: 'Pet deleted successfully', pet });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

<<<<<<< HEAD
const updatePetAdoptionStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { adoptionStatus } = req.body;
    if (!['personal', 'up for adoption'].includes(adoptionStatus)) {
      return res.status(400).json({ error: 'Invalid adoption status value' });
    }
    const pet = await Pet.findByIdAndUpdate(
      id,
      { adoptionStatus },
      { new: true }
    );
    if (!pet) {
      return res.status(404).json({ error: 'Pet not found' });
    }
    res.json(pet);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createPet, getPetsByUser, getAllPets, getPetById, getPresignedUrl, deletePet, updatePetAdoptionStatus };
=======
module.exports = { createPet, getPetsByUser, getAllPets, getPetById, deletePet };
>>>>>>> e1201dbb78164aa3549184cd08020bd0332f1f98
