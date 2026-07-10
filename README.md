# 🐾 PawPal

**PawPal** is a cross-platform mobile application that centralizes pet adoption, health tracking, and daily care into a single, unified platform — built for pet owners, adopters, shelters, veterinarians, and rescuers/fosters.

Developed as part of **SWE 4404: Software Project Lab II** at the Islamic University of Technology (IUT), Department of Computer Science and Engineering.

---

## About

In many developing regions, pet care infrastructure is limited and fragmented. Adoption typically happens informally through social media, health records go untracked, and finding reliable vet services or temporary pet care is difficult. PawPal was built to solve this by bringing adoption, healthcare management, daily care routines, daycare coordination, and a pet-loving community into one app.

The project was informed by user research with 20 interviewees — including pet owners, adopters, vets, and shelter providers — to identify real pain points and prioritize features accordingly.

## Key Features

- **User & Pet Profiles** — Manage personal accounts and detailed pet profiles (breed, age, health status, vaccination history, feeding schedules, activity logs).
- **Adoption Management** — Shelters can list pets with photos and behavioral info; adopters can browse, apply, and track adoption status; post-adoption reviews supported.
- **Medical Records & Health Checkups** — Per-pet health logs for vaccinations and treatments, with automated reminders; vets can update records via a dedicated dashboard.
- **Feeding & Daily Care Checklist** — Scheduling and tracking for meals, grooming, and walks, with custom care notes.
- **Pet Daycare Service** — Request or offer temporary pet care with availability calendars, ratings, and a booking system.
- **Nearby Vet Centers & Pet Shops** — Location-based search for vets and pet stores, with contact info, hours, and service/product filters.
- **Community Q&A & Chat** — A forum for pet care discussions plus private messaging for direct coordination.

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React Native (cross-platform, Android & iOS) |
| Backend | Node.js, Express.js (RESTful API) |
| Database | MongoDB |
| Storage | Amazon S3 (pet & listing images) |
| Location Services | GPS-based geolocation search |
| Design | Figma |
| Version Control | GitHub |

## Stakeholders

- **Pet Owners** — manage pets, health, and care
- **Adopters** — find and adopt pets
- **Shelter Providers** — manage listings and adoption requests
- **Veterinarians** — access and update medical records
- **Rescuers/Fosters** — list pets for adoption and offer temporary care

## Team

**Group 9 — IUT CSE, Summer 2023-2024**
- Noor-E-Fatiha
- Noshin Sharmili
- Afridah Zarin Khan

Supervised by Aashnan Rahman, Junior Lecturer, CSE.

## Getting Started

```bash
# Clone the repository
git clone https://github.com/NoshinSharmili/PawPal.git
cd PawPal

# Install dependencies
npm install

# Set up environment variables (MongoDB URI, AWS S3 keys, etc.)
cp .env.example .env

# Run the backend server
npm start
```

## License

This project was developed for academic purposes as part of the SWE 4404 course at IUT.
