# 🏠 Stanza - Dorm & Apartment Listing Platform

<div align="center">

![Angular](https://img.shields.io/badge/Angular-v20+-DD0031?logo=angular&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwindcss&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?logo=supabase&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=black)
![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)

</div>

---

## 📌 Overview

**Stanza** is a dorm and apartment listing platform built to connect **students** with **property owners** through a secure and modern housing marketplace.

Students can search listings, compare amenities, and reserve temporary accommodations, while property owners can manage listings, availability, and reservations efficiently.

The platform follows a **modern Angular + Supabase architecture**, emphasizing scalability, performance, and developer productivity.

---

## 🛠 Tech Stack

### Frontend
- Angular v20+
- Standalone Components
- Angular Signals
- TailwindCSS
- Reactive Forms

### Backend / Infrastructure
- Supabase Authentication
- Supabase PostgreSQL Database
- Supabase Storage
- Row Level Security (RLS)
- REST API via Supabase Client

### Deployment
- Vercel

### Development Tools
- Prettier
- ESLint
- GitHub Actions

---

## 👥 User Roles

### 🎓 Student
- Search dorms and apartments
- Filter by location, amenities, and budget
- View ratings and reviews
- Reserve accommodations
- Manage profile information

### 🏠 Property Owner
- Create property listings
- Upload dorm images
- Manage reservations
- Update availability
- Monitor listing performance

### 🛡 Administrator
- Moderate platform activity
- Verify listings
- Manage users
- Generate reports

---

## ✨ Core Features

### 🔐 Authentication
- Secure registration and login
- Email verification
- Session persistence
- Role-based access

### 🏘 Property Management
- Create listings
- Update property details
- Delete listings
- Image uploads

### 🔍 Smart Search
- Search by location
- Category filtering
- Price filtering
- Amenity filtering

### 📅 Reservation System
- Reservation requests
- Approval workflow
- Reservation tracking

### ⭐ Reviews & Ratings
- Property feedback
- Community ratings

### 👤 Profile System
- Generated profile avatars
- User metadata
- Role management

---

# 🏗 System Architecture

```text
Angular Frontend
       │
Angular Signals
       │
Supabase Client
       │
────────────────────
 Supabase Platform
────────────────────
│ Authentication    │
│ PostgreSQL DB     │
│ Storage Bucket    │
│ Row Level Security│
────────────────────
```

---

# 📁 Frontend Architecture

```text
src/app/

├── core/
│   ├── auth/
│   ├── api/
│   └── config/
│
├── shared/
│   ├── components/
│   ├── pipes/
│   ├── directives/
│   └── models/
│
├── features/
│   ├── auth/
│   ├── property/
│   ├── dashboard/
│   └── profile/
│
├── layout/
│   ├── main-layout/
│   └── auth-layout/
│
├── app.routes.ts
└── app.config.ts
```

---

# 🗄 Database Schema (Supabase PostgreSQL)

## Users

```sql
id uuid primary key
email text
full_name text
role text
created_at timestamp
```

---

## Properties

```sql
property_id bigint
property_name text
category text
address text
rating integer
price numeric

electricity boolean
water boolean
internet boolean
airconditioned boolean

owner_id uuid

created_at timestamp
```

---

## Reservations

```sql
reservation_id bigint
student_id uuid
property_id bigint

status text

created_at timestamp
```

---

## Reviews

```sql
review_id bigint

user_id uuid
property_id bigint

rating integer
comment text

created_at timestamp
```

---

# 🔒 Security

### Authentication
- Supabase Auth
- JWT Sessions
- Protected Routes
- Auth Guards

### Database Security
- Row Level Security (RLS)
- Policy-based access control

### Frontend Security
- Environment variables
- Route Guards
- Validation via Reactive Forms

---

# 🚀 Deployment

### Frontend

Vercel

### Backend Services

Supabase Cloud

---

# 📈 Development Roadmap

## Phase 1 — MVP

- [x] Authentication
- [x] User Profiles
- [ ] Property CRUD
- [x] Search & Filters

---

## Phase 2 — Core Experience

- [ ] Reservation Workflow
- [ ] Reviews & Ratings
- [ ] Property Owner Dashboard

---

## Phase 3 — Advanced Features

- [ ] Analytics Dashboard
- [ ] Maps Integration
- [ ] Image Optimization
- [ ] Notification System

---

# 🧑‍💻 Development Principles

- Feature-based architecture
- Lazy loading
- Standalone components
- Angular Signals
- Reactive programming
- Scalable folder structure

---

## 📄 License

MIT License

---

<div align="center">

Built with ❤️ using Angular + Supabase

</div>
