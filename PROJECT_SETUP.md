# ILEAGENT - Complete Full-Stack Project

Nigeria's premier rental property marketplace connecting landlords, tenants, and verified real estate agents.

## 📁 Project Structure

```
ileagent/
├── apps/
│   ├── web/              # Next.js web application
│   ├── mobile/           # React Native mobile app
│   └── backend/          # Node.js/Express API server
├── package.json          # Monorepo root
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL 15+
- npm or yarn

### Installation

```bash
# Install dependencies for all apps
npm install

# or
yarn install
```

### Environment Setup

Each app has an `.env.example` file. Copy and configure:

```bash
# Web app
cp apps/web/.env.example apps/web/.env.local

# Backend
cp apps/backend/.env.example apps/backend/.env

# Mobile
cp apps/mobile/.env.example apps/mobile/.env
```

### Running the Applications

```bash
# Development mode (all apps)
npm run dev

# Or run individually:

# Web app
cd apps/web && npm run dev

# Backend API
cd apps/backend && npm run dev

# Mobile app
cd apps/mobile && npm run dev:ios  # or dev:android
```

## 📦 Tech Stack

### Web Application
- **Framework**: Next.js 14
- **Styling**: Tailwind CSS + shadcn/ui
- **State Management**: TanStack React Query + Zustand
- **Forms**: React Hook Form + Zod
- **Type Safety**: TypeScript

### Backend API
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: PostgreSQL + Prisma ORM
- **Authentication**: JWT + bcrypt
- **Payment**: Paystack, Flutterwave, Stripe integration

### Mobile Application
- **Framework**: React Native + Expo
- **Navigation**: Expo Router
- **State Management**: Zustand
- **Data Fetching**: TanStack React Query
- **Features**: Camera, Maps, Location, Image Picker

## 🗄️ Database Schema

The application uses 12 core entities:

1. **User** - Platform users (tenants, landlords, agents, admins)
2. **Agent** - Verified real estate agents
3. **Listing** - Rental properties
4. **Payment** - Escrow-protected transactions
5. **Lease** - Digital lease agreements
6. **Inquiry** - Tenant inquiries
7. **Commission** - Agent earnings tracking
8. **Dispute** - Payment disputes
9. **PaymentGroup** - Co-renting groups
10. **GroupMessage** - Group chat
11. **VerificationLog** - Audit trail
12. **AuditLog** - Activity logging

## 💰 Business Model

### Revenue Streams
- **Platform Fees**: 2% initial payments, 1% renewals
- **Agent Commissions**: Customizable (default 10%)
- **Withdrawal Fees**: Free first withdrawal, 0.5% after

### Example Transactions

**Direct Listing (No Agent)**
- Annual Rent: ₦1,200,000
- Platform Fee (2%): ₦24,000
- Tenant Pays: ₦1,224,000
- Landlord Receives: ₦1,200,000
- Platform Earns: ₦24,000

**Agent-Assisted Listing**
- Annual Rent: ₦1,200,000
- Agent Commission (10%): ₦120,000
- Platform Fee (2%): ₦26,400
- Tenant Pays: ₦1,346,400
- Landlord Receives: ₦1,200,000
- Agent Earns: ₦120,000
- Platform Earns: ₦26,400

## 🔐 Security Features

- **Escrow Protection**: All payments held until move-in confirmation
- **KYC Verification**: User identity verification
- **GPS Verification**: Property location confirmation
- **Digital Leases**: e-signature with legal enforceability
- **Dispute Resolution**: Admin-mediated dispute handling
- **Rate Limiting**: API protection against abuse
- **Data Encryption**: JWT tokens, hashed passwords

## 🎯 Core Features

### For Tenants
- Browse verified properties with GPS confirmation
- Secure escrow payments
- Digital lease signing
- Payment groups for co-renting
- Application tracking
- Lease management

### For Landlords
- List properties with verification
- Receive secure payments
- Digital lease generation
- Track inquiries and applications
- Earnings dashboard
- Verified agent network

### For Agents
- Register with license verification
- List properties on behalf of landlords
- Commission tracking
- Reputation management
- Property analytics

### For Admin
- User verification and KYC
- Listing approval and verification
- Dispute resolution
- Escrow management
- Analytics and reporting

## 🔄 User Journeys

### Tenant Journey
1. Register account
2. Complete KYC verification
3. Browse verified properties
4. Make inquiry or create payment group
5. Make secure payment
6. Sign digital lease
7. Manage lease and payments

### Landlord Journey
1. Register account
2. Complete KYC verification
3. Create property listing with documents
4. Receive field verification
5. Get listing approved
6. Receive inquiries
7. Manage tenant leases and payments

### Agent Journey
1. Register with license verification
2. Complete agency profile
3. List properties on behalf of landlords
4. Track inquiries and inquiries
5. Earn commissions
6. Build reputation

## 📱 API Endpoints

```
# Auth
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/logout

# Listings
GET    /api/listings
GET    /api/listings/:id
POST   /api/listings
PUT    /api/listings/:id
DELETE /api/listings/:id

# Payments
GET    /api/payments
GET    /api/payments/:id
POST   /api/payments

# Leases
GET    /api/leases
POST   /api/leases/:id/sign

# Agents
GET    /api/agents
GET    /api/agents/:id
POST   /api/agents

# Inquiries
GET    /api/inquiries
POST   /api/inquiries

# Payment Groups
GET    /api/payment-groups
POST   /api/payment-groups
POST   /api/payment-groups/join/:code
```

## 🧪 Testing

```bash
# Run tests for all apps
npm test

# Run tests for specific app
cd apps/web && npm test
```

## 📚 Documentation

- [Business Model](./docs/BUSINESS_MODEL.md)
- [Database Schema](./docs/DATABASE_SCHEMA.md)
- [API Documentation](./docs/API.md)
- [User Flows](./docs/USER_FLOWS.md)

## 🚢 Deployment

### Web Application (Vercel)
```bash
npm run build
# Deploy to Vercel
```

### Backend (Heroku, Railway, or AWS)
```bash
npm run build
npm start
```

### Mobile (EAS)
```bash
eas build
eas submit
```

## 📝 License

All rights reserved - ILEAGENT © 2026

## 👥 Contributing

Contributions welcome! Please follow the coding standards and submit PRs.

## 📞 Support

For support, email: support@ileagent.ng
