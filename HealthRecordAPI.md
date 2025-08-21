# HealthRecord API Documentation

Base URL: `/api/health-records`

## Overview

The HealthRecord API allows you to:
- Retrieve a pet's health record by its ID.
- Update individual fields of a health record (last vet visit, vet visit interval, vaccines, deworming info, weight).

A HealthRecord is automatically created for each new Pet.

---

## Endpoints

### 1. Get HealthRecord by ID

**GET** `/api/health-records/:id`

- **Description:** Retrieve a health record by its unique ID.
- **URL Params:**  
  - `id` (string, required): HealthRecord MongoDB ObjectId

**Response Example:**
```json
{
  "_id": "664a1b2c3d4e5f6789012345",
  "petId": "664a1b2c3d4e5f6789011111",
  "lastVetVisit": "2024-05-01T00:00:00.000Z",
  "vetVisitIntervalWeeks": 12,
  "vaccines": [
    { "name": "Rabies", "lastGivenDate": "2024-01-01T00:00:00.000Z", "due": "2025-01-01T00:00:00.000Z" }
  ],
  "dewormingLastDate": "2024-04-01T00:00:00.000Z",
  "dewormingIntervalWeeks": 6,
  "weight": 12.5
}
```

---

### 2. Update Last Vet Visit

**PATCH** `/api/health-records/:id/lastVetVisit`

**Request Body:**
```json
{ "lastVetVisit": "2024-06-01" }
```

---

### 3. Update Vet Visit Interval (weeks)

**PATCH** `/api/health-records/:id/vetVisitIntervalWeeks`

**Request Body:**
```json
{ "vetVisitIntervalWeeks": 8 }
```

---

### 4. Update Vaccines Array

**PATCH** `/api/health-records/:id/vaccines`

**Request Body:**
```json
{
  "vaccines": [
    { "name": "Rabies", "lastGivenDate": "2024-01-01", "due": "2025-01-01" },
    { "name": "Distemper", "lastGivenDate": "2024-02-01", "due": "2025-02-01" }
  ]
}
```

---

### 5. Update Deworming Last Date

**PATCH** `/api/health-records/:id/dewormingLastDate`

**Request Body:**
```json
{ "dewormingLastDate": "2024-05-15" }
```

---

### 6. Update Deworming Interval (weeks)

**PATCH** `/api/health-records/:id/dewormingIntervalWeeks`

**Request Body:**
```json
{ "dewormingIntervalWeeks": 10 }
```

---

### 7. Update Weight

**PATCH** `/api/health-records/:id/weight`

**Request Body:**
```json
{ "weight": 13.2 }
```

---

## Notes

- All PATCH endpoints return the updated HealthRecord object.
- Dates should be in ISO format (`YYYY-MM-DD`).
- The `vaccines` array replaces the entire vaccines list for the record.
- If a HealthRecord with the given ID does not exist, a 404 error is returned.
