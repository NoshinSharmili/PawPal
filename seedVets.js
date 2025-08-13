// seedVets.js - Run this file to populate your database with sample vet data
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Vet = require('./models/Vet');

// Load environment variables
dotenv.config();

// Sample vet data
const sampleVets = [
  {
    name: "Dr. Rahman Ahmed",
    clinicName: "Dhaka Pet Care Center",
    specialization: "General Practice",
    phone: "+8801712345678",
    address: {
      street: "House 45, Road 12, Dhanmondi",
      city: "Dhaka",
      state: "Dhaka Division",
      zipCode: "1205",
      country: "Bangladesh"
    },
    location: {
      type: "Point",
      coordinates: [90.3753, 23.7465] // Dhanmondi, Dhaka
    },
    availability: {
      hours: {
        monday: { open: "09:00", close: "18:00", isOpen: true },
        tuesday: { open: "09:00", close: "18:00", isOpen: true },
        wednesday: { open: "09:00", close: "18:00", isOpen: true },
        thursday: { open: "09:00", close: "18:00", isOpen: true },
        friday: { open: "09:00", close: "18:00", isOpen: true },
        saturday: { open: "09:00", close: "16:00", isOpen: true },
        sunday: { open: "10:00", close: "14:00", isOpen: true }
      },
      emergencyService: true
    },
    services: ["Vaccination", "Health Checkup", "Surgery", "Emergency Care"],
    experienceYears: 8,
    rating: {
      average: 4.5,
      totalReviews: 120
    }
  },
  {
    name: "Dr. Fatima Khatun",
    clinicName: "Gazipur Animal Hospital",
    specialization: "Surgery",
    phone: "+8801823456789",
    address: {
      street: "Main Road, Tongi",
      city: "Gazipur",
      state: "Dhaka Division",
      zipCode: "1710",
      country: "Bangladesh"
    },
    location: {
      type: "Point",
      coordinates: [90.4074, 23.8974] // Gazipur
    },
    availability: {
      hours: {
        monday: { open: "08:00", close: "20:00", isOpen: true },
        tuesday: { open: "08:00", close: "20:00", isOpen: true },
        wednesday: { open: "08:00", close: "20:00", isOpen: true },
        thursday: { open: "08:00", close: "20:00", isOpen: true },
        friday: { open: "08:00", close: "20:00", isOpen: true },
        saturday: { open: "08:00", close: "18:00", isOpen: true },
        sunday: { open: "00:00", close: "00:00", isOpen: false }
      },
      emergencyService: false
    },
    services: ["Surgery", "X-Ray", "Laboratory Tests", "Spay/Neuter"],
    experienceYears: 12,
    rating: {
      average: 4.7,
      totalReviews: 89
    }
  },
  {
    name: "Dr. Mohammad Hassan",
    clinicName: "Uttara Pet Clinic",
    specialization: "Emergency Care",
    phone: "+8801934567890",
    address: {
      street: "Sector 6, Uttara",
      city: "Dhaka",
      state: "Dhaka Division",
      zipCode: "1230",
      country: "Bangladesh"
    },
    location: {
      type: "Point",
      coordinates: [90.3794, 23.8759] // Uttara, Dhaka
    },
    availability: {
      hours: {
        monday: { open: "00:00", close: "23:59", isOpen: true },
        tuesday: { open: "00:00", close: "23:59", isOpen: true },
        wednesday: { open: "00:00", close: "23:59", isOpen: true },
        thursday: { open: "00:00", close: "23:59", isOpen: true },
        friday: { open: "00:00", close: "23:59", isOpen: true },
        saturday: { open: "00:00", close: "23:59", isOpen: true },
        sunday: { open: "00:00", close: "23:59", isOpen: true }
      },
      emergencyService: true
    },
    services: ["Emergency Care", "Vaccination", "Health Checkup", "Surgery", "Laboratory Tests"],
    experienceYears: 6,
    rating: {
      average: 4.8,
      totalReviews: 200
    }
  },
  {
    name: "Dr. Nasreen Begum",
    clinicName: "Gulshan Veterinary Center",
    specialization: "Dermatology",
    phone: "+8801645678901",
    address: {
      street: "Road 11, Gulshan 1",
      city: "Dhaka",
      state: "Dhaka Division",
      zipCode: "1212",
      country: "Bangladesh"
    },
    location: {
      type: "Point",
      coordinates: [90.4125, 23.7806] // Gulshan, Dhaka
    },
    availability: {
      hours: {
        monday: { open: "10:00", close: "19:00", isOpen: true },
        tuesday: { open: "10:00", close: "19:00", isOpen: true },
        wednesday: { open: "10:00", close: "19:00", isOpen: true },
        thursday: { open: "10:00", close: "19:00", isOpen: true },
        friday: { open: "10:00", close: "19:00", isOpen: true },
        saturday: { open: "10:00", close: "17:00", isOpen: true },
        sunday: { open: "00:00", close: "00:00", isOpen: false }
      },
      emergencyService: false
    },
    services: ["Surgery", "Grooming", "Health Checkup", "Vaccination"],
    experienceYears: 15,
    rating: {
      average: 4.3,
      totalReviews: 67
    }
  },
  {
    name: "Dr. Karim Uddin",
    clinicName: "Mirpur Animal Care",
    specialization: "General Practice",
    phone: "+8801756789012",
    address: {
      street: "Block C, Section 10, Mirpur",
      city: "Dhaka",
      state: "Dhaka Division",
      zipCode: "1216",
      country: "Bangladesh"
    },
    location: {
      type: "Point",
      coordinates: [90.3568, 23.8223] // Mirpur, Dhaka
    },
    availability: {
      hours: {
        monday: { open: "09:00", close: "19:00", isOpen: true },
        tuesday: { open: "09:00", close: "19:00", isOpen: true },
        wednesday: { open: "09:00", close: "19:00", isOpen: true },
        thursday: { open: "09:00", close: "19:00", isOpen: true },
        friday: { open: "09:00", close: "19:00", isOpen: true },
        saturday: { open: "09:00", close: "17:00", isOpen: true },
        sunday: { open: "10:00", close: "15:00", isOpen: true }
      },
      emergencyService: false
    },
    services: ["Vaccination", "Health Checkup", "Grooming", "Microchipping"],
    experienceYears: 5,
    rating: {
      average: 4.2,
      totalReviews: 45
    }
  }
];

// Connect to database and seed data
const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing vet data (optional - remove this line if you want to keep existing data)
    await Vet.deleteMany({});
    console.log('🗑️  Cleared existing vet data');

    // Insert sample data
    const insertedVets = await Vet.insertMany(sampleVets);
    console.log(`✅ Successfully inserted ${insertedVets.length} vets into database`);

    // Create geospatial index if it doesn't exist
    await Vet.collection.createIndex({ location: '2dsphere' });
    console.log('✅ Geospatial index created');

    console.log('\n🎉 Database seeding completed successfully!');
    console.log('\nInserted vets:');
    insertedVets.forEach((vet, index) => {
      console.log(`${index + 1}. ${vet.name} - ${vet.clinicName} (${vet.address.city})`);
    });

  } catch (error) {
    console.error('❌ Error seeding database:', error);
  } finally {
    // Close database connection
    await mongoose.connection.close();
    console.log('🔌 Database connection closed');
    process.exit(0);
  }
};

// Run the seeding function
seedDatabase();