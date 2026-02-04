# Feb-2026-Ileagent
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText, Database, Code, Layers } from 'lucide-react';

export default function DownloadBlueprint() {
  const blueprintContent = `
# ILEAGENT PLATFORM - COMPLETE MVP BLUEPRINT & TECHNICAL DOCUMENTATION

## 📋 TABLE OF CONTENTS
1. [Platform Overview](#platform-overview)
2. [Business Model & Revenue](#business-model)
3. [Technology Stack](#technology-stack)
4. [Complete Database Schema](#database-schema)
5. [Application Architecture](#application-architecture)
6. [Core Features & Functionality](#core-features)
7. [User Types & Journeys](#user-flows)
8. [Security & Verification](#security-features)
9. [Payment & Escrow System](#payment-system)
10. [Agent System](#agent-system)
11. [Payment Groups (Co-Renting)](#payment-groups)
12. [Integration Tools](#integration-tools)
13. [All Pages Documentation](#pages-documentation)
14. [UI Components Library](#components-library)
15. [Setup & Deployment](#setup)

═══════════════════════════════════════════════════════════════════



## 🎯 PLATFORM OVERVIEW

**ILEAGENT** (Ile = "home" in Yoruba) is Nigeria's premier rental property marketplace that connects landlords, tenants, and verified real estate agents through a secure, transparent platform with built-in escrow protection, digital lease management, and property verification.

### MISSION
Eliminate rental fraud in Nigeria by providing verified properties, secure payments, and trusted agent connections.

### KEY VALUE PROPOSITIONS

**For Tenants:**
- Browse 100% verified properties with GPS confirmation
- Secure escrow payments (funds held until move-in confirmed)
- Connect with verified real estate agents
- Digital lease signing with legal enforceability
- Form payment groups to co-rent with friends/family
- 2% platform fee on initial payments, 1% on renewals

**For Landlords:**
- List properties with optional agent commission structure
- Receive payments securely through escrow
- Digital lease generation and signing
- Track inquiries and applications
- Refund capability (before tenant move-in)
- Access to verified agent network

**For Real Estate Agents:**
- Register and get verified with license documentation
- List properties on behalf of landlords
- Earn commissions (customizable %)
- Manage multiple properties
- Track earnings and commission payouts
- Build reputation through ratings

**For Platform (Admin):**
- Verify all listings before they go live
- Manage escrow accounts
- Resolve disputes with evidence review
- Monitor platform health and fraud
- Analytics and revenue tracking

═══════════════════════════════════════════════════════════════════


















## 💰 BUSINESS MODEL & REVENUE

### Revenue Streams

1. **Platform Fees (Primary Revenue)**
   - Initial rental payments: 2% fee
   - Renewal/recurring payments: 1% fee
   - Example: ₦1,000,000 rent = ₦20,000 platform fee (initial)
   - Example: ₦1,000,000 renewal = ₦10,000 platform fee (recurring)

2. **Agent Commissions (Indirect Revenue)**
   - Landlords set agent commission % (0-100%)
   - Common range: 10-15% of annual rent
   - Agents pay out of their commission, not platform fee
   - Example: ₦1,000,000 rent + 10% agent fee = ₦1,100,000 total annual cost to tenant

3. **Withdrawal Fees**
   - First withdrawal: Free
   - Subsequent withdrawals: 0.5% fee
   - Encourages fewer, larger payouts

### Fee Calculation Examples

**Scenario 1: Direct Landlord Listing (No Agent)**
- Annual Rent: ₦1,200,000
- Agent Fee: 0%
- Platform Fee (2%): ₦24,000
- Tenant Pays: ₦1,224,000
- Landlord Receives: ₦1,200,000
- Platform Earns: ₦24,000

**Scenario 2: Agent-Assisted Listing**
- Annual Rent: ₦1,200,000
- Agent Commission: 10%
- Agent Fee: ₦120,000
- Total Rent: ₦1,320,000
- Platform Fee (2% of ₦1,320,000): ₦26,400
- Tenant Pays: ₦1,346,400
- Landlord Receives: ₦1,200,000
- Agent Receives: ₦120,000
- Platform Earns: ₦26,400

**Scenario 3: Renewal Payment**
- Annual Rent: ₦1,200,000
- Platform Fee (1%): ₦12,000
- Tenant Pays: ₦1,212,000
- Landlord Receives: ₦1,200,000
- Platform Earns: ₦12,000

### Target Market
- **Primary**: Lagos, Abuja, Port Harcourt metro areas
- **Secondary**: All 36 Nigerian states + FCT
- **Demographics**: Young professionals (25-40), families, students
- **Property Types**: Apartments, houses, studios, self-contains, duplexes








## 🛠 TECHNOLOGY STACK

### Frontend Technologies
- **Framework**: React 18.2.0 with TypeScript
- **Routing**: React Router DOM 6.26.0
- **State Management**: TanStack React Query 5.84.1 (server state)
- **Styling**: Tailwind CSS 3.x + shadcn/ui component library
- **Animations**: Framer Motion 11.16.4
- **Forms**: React Hook Form 7.54.2 + Zod validation
- **Charts**: Recharts 2.15.4
- **Date Handling**: date-fns 3.6.0, moment 2.30.1
- **Maps**: React Leaflet 4.2.1 + OpenStreetMap
- **Icons**: Lucide React 0.475.0
- **Image Handling**: browser-image-compression 2.0.2, html2canvas 1.4.1
- **PDF Generation**: jspdf 2.5.2
- **Drag & Drop**: @hello-pangea/dnd 17.0.0
- **Notifications**: react-hot-toast 2.6.0, sonner 2.0.1
- **Rich Text**: react-quill 2.0.0
- **Utilities**: lodash 4.17.21, clsx 2.1.1












### Backend (Base44 Platform - BaaS)
- **Database**: NoSQL document store with entity system
- **Authentication**: Built-in OAuth + email/password
- **Authorization**: Row-level security (RLS) rules
- **File Storage**: Unlimited public/private file hosting
- **API**: Auto-generated REST APIs per entity
- **Real-time**: WebSocket subscriptions for entity changes
- **Integrations**: 
  - Core.InvokeLLM (AI/LLM with internet search, vision)
  - Core.UploadFile (public file storage)
  - Core.UploadPrivateFile (private file storage)
  - Core.SendEmail (transactional emails)
  - Core.GenerateImage (AI image generation)
  - Core.ExtractDataFromUploadedFile (document parsing)

### Infrastructure
- **Hosting**: Base44 managed cloud infrastructure
- **CDN**: Global content delivery for fast loading
- **SSL**: Automatic HTTPS certificates
- **Backup**: Automated daily backups
- **Monitoring**: Built-in error tracking and logging

═══════════════════════════════════════════════════════════════════







## 💾 COMPLETE DATABASE SCHEMA

### ENTITY RELATIONSHIPS DIAGRAM (Text Format)

User (1) ──→ (*) Listing (landlord_id)
User (1) ──→ (*) Agent (user_id)
User (1) ──→ (*) Payment (tenant_id, landlord_id)
User (1) ──→ (*) Inquiry (tenant_id, landlord_id)
User (1) ──→ (*) PaymentGroup (initiator_id, members)
Listing (1) ──→ (*) Inquiry
Listing (1) ──→ (*) Payment
Listing (1) ──→ (*) Lease
Listing (1) ──→ (*) PaymentGroup
Payment (1) ──→ (1) Lease
Payment (1) ──→ (*) Dispute
Agent (1) ──→ (*) Listing (agent_id)
Agent (1) ──→ (*) Commission
PaymentGroup (1) ──→ (*) GroupMessage

### 1. User Entity (Built-in + Extended)
**Purpose**: Store user accounts for all platform users (tenants, landlords, agents, admins)
**Built-in Fields**: id, email, full_name, role, created_date, updated_date
**Custom Fields**:
\`\`\`json
{
  "user_type": {
    "type": "string",
    "enum": ["landlord", "tenant"],
    "description": "User's primary role on platform"
  },
  "kyc_status": {
    "type": "string",
    "enum": ["none", "pending", "verified", "rejected"],
    "default": "none",
    "description": "KYC verification status"
  },
  "phone": {
    "type": "string",
    "description": "Contact phone number"
  },
  "id_document_url": {
    "type": "string",
    "description": "Uploaded ID for verification"
  },
  "address": {
    "type": "string",
    "description": "User's residential address"
  }
}
\`\`\`
**Security Rules**: 
- Read: Admins can read all, users can read their own
- Write: Users can create their own, admins can modify all
- Update: Users can update their own, admins can update all

### 2. Agent Entity
**Purpose**: Store verified real estate agent profiles
**All Fields**:
\`\`\`json
{
  "id": "string (auto)",
  "user_id": "string (reference to User.email)",
  "agency_name": "string (required)",
  "license_number": "string",
  "license_document_url": "string (uploaded license)",
  "id_document_url": "string (verification ID)",
  "license_verified": "boolean (default: false)",
  "areas_covered": ["string (state/LGA names)"],
  "specialties": [
    "residential | commercial | land | luxury | student_housing"
  ],
  "bio": "string (professional description)",
  "years_experience": "number",
  "properties_sold": "number (default: 0)",
  "rating": "number (default: 0, out of 5)",
  "rating_count": "number (default: 0)",
  "commission_rate": "number (default: 10, percentage)",
  "whatsapp": "string (WhatsApp number)",
  "office_address": "string",
  "is_active": "boolean (default: true)",
  "total_earnings": "number (default: 0)",
  "created_date": "datetime (auto)",
  "updated_date": "datetime (auto)",
  "created_by": "string (auto)"
}
\`\`\`
**Security Rules (RLS)**:
- Read: Public (anyone can view all agents)
- Write: Admins OR users creating their own agent profile
- Update: Admins OR agent owner (user_id matches)
- Delete: Admins OR agent owner

### 3. Listing Entity
**Purpose**: Store all rental property listings
**All Fields**:
\`\`\`json
{
  "id": "string (auto)",
  "landlord_id": "string (User.email reference)",
  "agent_id": "string (Agent.id reference, optional)",
  "listed_by": "landlord | agent (default: landlord)",
  "title": "string (required, e.g., '3 Bedroom Flat in Lekki')",
  "description": "string (detailed property description)",
  "rent_amount": "number (required, base annual rent in NGN)",
  "agent_fee_percentage": "number (0-100, default: 0)",
  "total_annual_rent": "number (calculated: rent + agent fee)",
  "currency": "NGN | USD (default: NGN)",
  "property_type": "apartment | house | studio | duplex | self_contain | room | office | shop",
  "bedrooms": "number",
  "bathrooms": "number",
  "address_text": "string (full address)",
  "city": "string",
  "state": "string (Nigerian state)",
  "lga": "string (Local Government Area)",
  "lat": "number (GPS latitude)",
  "lng": "number (GPS longitude)",
  "pin_verified": "boolean (GPS confirmed, default: false)",
  "verification_status": "unverified | pending | verified | flagged | rejected",
  "images": ["string (image URLs)"],
  "videos": ["string (video URLs)"],
  "amenities": ["string (e.g., 'WiFi', 'Generator', 'Security')"],
  "landmarks": [
    {
      "name": "string",
      "distance_km": "number",
      "type": "school | hospital | market | transport | shopping | worship | other"
    }
  ],
  "available_from": "date (when property is available)",
  "is_active": "boolean (default: true)",
  "views_count": "number (default: 0, auto-incremented)",
  "inquiries_count": "number (default: 0, auto-incremented)",
  "title_document_url": "string (proof of ownership)",
  "landlord_id_url": "string (landlord ID document)",
  "field_verified": "boolean (default: false, field agent confirmed)",
  "field_verification_date": "date",
  "flag_count": "number (default: 0, user reports)",
  "rejection_reason": "string (why listing was rejected)",
  "created_date": "datetime (auto)",
  "updated_date": "datetime (auto)",
  "created_by": "string (auto)"
}
\`\`\`
**Security Rules (RLS)**:
- Read: Public can read verified+active listings, admins read all, owners read their own
- Write: Authenticated users (becomes owner)
- Update: Admins OR listing owner OR landlord_id match
- Delete: Admins OR listing owner OR landlord_id match

### 4. PaymentGroup Entity
**Purpose**: Enable friends/family to pool money and co-rent properties
**All Fields**:
\`\`\`json
{
  "id": "string (auto)",
  "listing_id": "string (Listing reference)",
  "initiator_id": "string (User.email who created group)",
  "group_name": "string (e.g., 'Lagos Friends Apartment')",
  "target_amount": "number (total rent to be raised)",
  "total_committed": "number (default: 0, sum of all commitments)",
  "total_paid": "number (default: 0, sum of all payments)",
  "status": "open | fully_committed | partially_paid | fully_paid | completed | cancelled",
  "members": [
    {
      "email": "string",
      "name": "string",
      "committed_amount": "number (default: 0)",
      "paid_amount": "number (default: 0)",
      "status": "invited | joined | committed | paid",
      "joined_at": "datetime"
    }
  ],
  "invite_code": "string (unique code to join group)",
  "expires_at": "datetime (group expiration)",
  "payment_id": "string (Payment reference once fully funded)",
  "created_date": "datetime (auto)",
  "updated_date": "datetime (auto)",
  "created_by": "string (auto)"
}
\`\`\`
**Use Case**: 4 friends want to rent a ₦2M apartment
- Each commits ₦500K
- Group tracks commitments and payments
- Once ₦2M reached, creates Payment record
- All members listed as co-tenants on lease

### 5. GroupMessage Entity
**Purpose**: Chat/messaging within payment groups
**All Fields**:
\`\`\`json
{
  "id": "string (auto)",
  "group_id": "string (PaymentGroup reference)",
  "sender_id": "string (User.email)",
  "sender_name": "string",
  "message": "string (message content)",
  "type": "message | system | commitment | payment",
  "created_date": "datetime (auto)",
  "updated_date": "datetime (auto)",
  "created_by": "string (auto)"
}
\`\`\`
**Message Types**:
- message: Regular chat message
- system: Auto-generated (e.g., "John joined the group")
- commitment: Financial commitment notification
- payment: Payment completion notification

### 6. Payment Entity
**Purpose**: Track all rental payments and escrow transactions
**All Fields**:
\`\`\`json
{
  "id": "string (auto)",
  "listing_id": "string (Listing reference)",
  "tenant_id": "string (User.email)",
  "landlord_id": "string (User.email)",
  "amount": "number (base rent amount in NGN)",
  "currency": "string (default: NGN)",
  "payment_type": "initial | renewal | recurring",
  "status": "pending | held | released | refunded | failed | disputed | withdrawn",
  "payment_gateway": "paystack | flutterwave",
  "gateway_reference": "string (payment processor transaction ID)",
  "escrow_reference": "string (internal escrow tracking ID)",
  "payout_reference": "string (landlord payout ID)",
  "platform_fee": "number (calculated fee amount)",
  "platform_fee_percentage": "number (2 for initial, 1 for recurring)",
  "landlord_payout": "number (amount landlord receives)",
  "release_date": "date (when payment released to landlord)",
  "dispute_reason": "string",
  "dispute_date": "date",
  "resolution_notes": "string",
  "receipt_url": "string (PDF receipt)",
  "refund_available": "boolean (default: false, landlord can refund)",
  "withdrawal_count": "number (default: 0, tracking withdrawal frequency)",
  "withdrawal_fee": "number (default: 0, 0.5% after first withdrawal)",
  "refund_reason": "string",
  "withdrawal_reason": "string",
  "created_date": "datetime (auto)",
  "updated_date": "datetime (auto)",
  "created_by": "string (auto)"
}
\`\`\`
**Payment Flow**:
1. Tenant initiates payment → status: "pending"
2. Payment gateway confirms → status: "held" (in escrow)
3. Tenant confirms move-in → status: "released"
4. Landlord withdraws funds → platform_fee deducted, landlord_payout sent

**Fee Structure**:
- Initial payment: 2% platform fee
- Renewal payment: 1% platform fee
- Withdrawal fee: 0% first time, 0.5% after

### 7. Lease Entity
**Purpose**: Digital lease agreements with e-signature capability
**All Fields**:
\`\`\`json
{
  "id": "string (auto)",
  "listing_id": "string (Listing reference)",
  "tenant_id": "string (User.email)",
  "landlord_id": "string (User.email)",
  "agent_id": "string (Agent.id, if agent involved)",
  "payment_id": "string (Payment reference)",
  "lease_pdf_url": "string (generated PDF document)",
  "start_date": "date (lease start)",
  "end_date": "date (lease expiration)",
  "rent_amount": "number (annual rent)",
  "security_deposit": "number",
  "signed_by_tenant": "boolean (default: false)",
  "signed_by_landlord": "boolean (default: false)",
  "signed_by_agent": "boolean (default: false, agent signing for landlord)",
  "tenant_signed_at": "datetime",
  "landlord_signed_at": "datetime",
  "agent_signed_at": "datetime",
  "tenant_signature_ip": "string (for verification)",
  "landlord_signature_ip": "string",
  "agent_signature_ip": "string",
  "status": "draft | pending_signatures | active | expired | terminated",
  "terms": {
    "pet_allowed": "boolean",
    "subletting_allowed": "boolean",
    "notice_period_days": "number",
    "house_rules": "string"
  },
  "created_date": "datetime (auto)",
  "updated_date": "datetime (auto)",
  "created_by": "string (auto)"
}
\`\`\`
**Signing Workflow**:
1. Payment confirmed → Lease created with status "draft"
2. Both parties review → status "pending_signatures"
3. Tenant signs → signed_by_tenant = true
4. Landlord/Agent signs → signed_by_landlord/agent = true
5. Both signed → status "active"

### 8. Inquiry Entity
**Purpose**: Track tenant interest and communication with landlords
**All Fields**:
\`\`\`json
{
  "id": "string (auto)",
  "listing_id": "string (Listing reference)",
  "tenant_id": "string (User.email)",
  "landlord_id": "string (User.email)",
  "tenant_name": "string",
  "tenant_email": "string",
  "tenant_phone": "string",
  "message": "string (inquiry message)",
  "preferred_move_date": "date",
  "status": "pending | contacted | scheduled_viewing | application_sent | approved | rejected | withdrawn",
  "call_logs": [
    {
      "timestamp": "string",
      "duration_seconds": "number",
      "initiated_by": "string"
    }
  ],
  "viewing_scheduled": "datetime",
  "landlord_notes": "string (internal notes)",
  "created_date": "datetime (auto)",
  "updated_date": "datetime (auto)",
  "created_by": "string (auto)"
}
\`\`\`
**Inquiry Flow**:
1. Tenant submits inquiry → status "pending"
2. Landlord responds → status "contacted"
3. Viewing scheduled → status "scheduled_viewing"
4. Tenant applies → status "application_sent"
5. Landlord decision → status "approved" or "rejected"

### 9. Commission Entity
**Purpose**: Track agent commission earnings
**All Fields**:
\`\`\`json
{
  "id": "string (auto)",
  "payment_id": "string (Payment reference)",
  "listing_id": "string (Listing reference)",
  "agent_id": "string (Agent reference)",
  "landlord_id": "string (User.email)",
  "tenant_id": "string (User.email)",
  "commission_amount": "number (calculated from listing.agent_fee_percentage)",
  "commission_percentage": "number (% rate used)",
  "base_rent": "number (original rent amount)",
  "status": "pending | approved | paid | disputed",
  "payout_reference": "string (payment processor reference)",
  "paid_date": "date",
  "notes": "string",
  "created_date": "datetime (auto)",
  "updated_date": "datetime (auto)",
  "created_by": "string (auto)"
}
\`\`\`
**Commission Flow**:
- Created when agent-assisted listing gets paid
- Status "pending" until payment confirmed
- Status "approved" when ready for payout
- Status "paid" after agent receives funds

### 10. Dispute Entity
**Purpose**: Handle payment disputes and resolution
**All Fields**:
\`\`\`json
{
  "id": "string (auto)",
  "payment_id": "string (Payment reference)",
  "listing_id": "string (Listing reference)",
  "tenant_id": "string (User.email)",
  "landlord_id": "string (User.email)",
  "raised_by": "tenant | landlord",
  "category": "property_not_as_described | payment_issue | lease_violation | refund_request | security_deposit | other",
  "description": "string (detailed explanation)",
  "evidence_urls": ["string (uploaded evidence files)"],
  "status": "open | under_review | awaiting_response | resolved | escalated | closed",
  "resolution": "refund_full | refund_partial | release_to_landlord | split | no_action",
  "resolution_notes": "string (admin decision reasoning)",
  "assigned_admin": "string (admin handling case)",
  "resolved_at": "datetime",
  "amount_in_dispute": "number",
  "refund_amount": "number (if refund approved)",
  "created_date": "datetime (auto)",
  "updated_date": "datetime (auto)",
  "created_by": "string (auto)"
}
\`\`\`
**Dispute Flow**:
1. User raises dispute → status "open"
2. Admin reviews → status "under_review"
3. Admin requests more info → status "awaiting_response"
4. Admin decides → resolution set, status "resolved"
5. Escrow executed per resolution → status "closed"

### 11. VerificationLog Entity
**Purpose**: Audit trail for all verification activities
**All Fields**:
\`\`\`json
{
  "id": "string (auto)",
  "listing_id": "string (Listing reference, optional)",
  "user_id": "string (User.email, optional)",
  "type": "listing | user | document",
  "method": "gps | document | manual_review | field_agent | automated",
  "verifier_id": "string (admin/agent who verified)",
  "status": "pending | approved | rejected | needs_review",
  "evidence_url": "string (uploaded proof)",
  "notes": "string (verifier comments)",
  "gps_coords": {
    "lat": "number",
    "lng": "number",
    "accuracy": "number"
  },
  "metadata": "object (additional verification data)",
  "created_date": "datetime (auto)",
  "updated_date": "datetime (auto)",
  "created_by": "string (auto)"
}
\`\`\`
**Verification Types**:
- **listing**: Property verification (GPS, documents, field visit)
- **user**: KYC verification (ID, address proof)
- **document**: Specific document verification (title, license)

### 12. AuditLog Entity
**Purpose**: Complete activity log for compliance and debugging
**All Fields**:
\`\`\`json
{
  "id": "string (auto)",
  "event_type": "user_registered | user_verified | listing_created | listing_verified | listing_flagged | payment_initiated | payment_held | payment_released | payment_refunded | payment_disputed | lease_generated | lease_signed | escrow_released | call_initiated | call_ended | admin_action",
  "entity_type": "user | listing | payment | lease | verification",
  "entity_id": "string (ID of affected entity)",
  "actor_id": "string (who performed action)",
  "actor_role": "string (user/admin/agent)",
  "details": "object (structured event data)",
  "ip_address": "string (for security)",
  "created_date": "datetime (auto)",
  "updated_date": "datetime (auto)",
  "created_by": "string (auto)"
}
\`\`\`
**Use Cases**:
- Compliance reporting
- Security monitoring
- User activity tracking
- Dispute evidence
- Performance analytics

═══════════════════════════════════════════════════════════════════









## 🏗 APPLICATION ARCHITECTURE

### Application Structure (Folder Organization)

\`\`\`
/entities
  ├── User.json (extended built-in)
  ├── Agent.json
  ├── Listing.json
  ├── PaymentGroup.json
  ├── GroupMessage.json
  ├── Payment.json
  ├── Lease.json
  ├── Inquiry.json
  ├── Commission.json
  ├── Dispute.json
  ├── VerificationLog.json
  └── AuditLog.json

/pages (all routes)
  ├── Home.js (landing page)
  ├── Browse.js (search properties)
  ├── BrowseAgents.js (find agents)
  ├── AgentProfile.js (agent details)
  ├── AgentRegistration.js (become an agent)
  ├── ListingDetails.js (property details)
  ├── TenantDashboard.js
  ├── MyPayments.js
  ├── MyLeases.js
  ├── MyApplications.js
  ├── MakePayment.js
  ├── PaymentGroups.js (co-renting groups)
  ├── CreatePaymentGroup.js
  ├── PaymentGroupRoom.js (group chat + progress)
  ├── LandlordDashboard.js
  ├── MyListings.js
  ├── AddListing.js
  ├── LandlordInquiries.js
  ├── LandlordPayments.js
  ├── LandlordLeases.js
  ├── AgentDashboard.js
  ├── AgentListings.js
  ├── AgentInquiries.js
  ├── AgentLeases.js
  ├── AgentCommissions.js
  ├── AdminDashboard.js
  ├── AdminUsers.js
  ├── AdminVerification.js
  ├── AdminEscrow.js
  ├── AdminDisputes.js
  ├── AdminAnalytics.js
  └── DownloadBlueprint.js (this page)

/components
  ├── /listings
  │   ├── ListingCard.jsx
  │   ├── ImageGallery.jsx
  │   ├── InquiryForm.jsx
  │   ├── SearchFilters.jsx
  │   └── LandmarksDisplay.jsx
  ├── /ui (shadcn components)
  │   ├── button.jsx
  │   ├── card.jsx
  │   ├── input.jsx
  │   ├── badge.jsx
  │   ├── DataTable.jsx (custom)
  │   ├── StatCard.jsx (custom)
  │   ├── StatusBadge.jsx (custom)
  │   ├── EmptyState.jsx (custom)
  │   └── [50+ other shadcn components]
  └── UserNotRegisteredError.jsx

/Layout.js (shared navigation + footer)

/lib
  └── PageNotFound.jsx (404 page)
\`\`\`

═══════════════════════════════════════════════════════════════════











## 📄 ALL PAGES - DETAILED DOCUMENTATION

### PUBLIC PAGES (No Login Required)

**1. Home (pages/Home.js)**
- **Purpose**: Landing page and property discovery
- **Features**:
  * Hero section with property search bar
  * Platform statistics (verified properties, happy tenants)
  * Featured properties carousel (latest verified listings)
  * Trust indicators (escrow protection, GPS verification, legal leases)
  * Call-to-action sections for landlords and agents
  * Footer with links
- **Key Functions**:
  * Search by state, property type, price range
  * Filter verified properties
  * Display top 6 featured listings
  * Navigate to Browse page with filters applied
- **Styling**: Gradient hero, modern card layouts, responsive grid

**2. Browse (pages/Browse.js)**
- **Purpose**: Main property search and discovery page
- **Features**:
  * Advanced search filters (state, city, property type, price range, bedrooms)
  * Sort options (price low-high, price high-low, newest, most viewed)
  * View modes: Grid, List, Map (future)
  * Infinite scroll / pagination
  * Property cards with key info and images
- **Key Functions**:
  * Real-time filtering with useMemo
  * Listing click → navigate to ListingDetails
  * Track views when user clicks listing
- **Data Fetching**: Fetches all verified, active listings
- **Performance**: Optimized filtering, lazy image loading

**3. BrowseAgents (pages/BrowseAgents.js)**
- **Purpose**: Find and connect with verified real estate agents
- **Features**:
  * Agent search bar (name, agency)
  * Filter by state and specialty
  * Agent cards showing:
    - Agency name, bio, rating
    - Years of experience, properties sold
    - Service areas, specialties
    - Contact info (WhatsApp, office)
  * Click agent → view AgentProfile
- **Key Functions**:
  * Filter agents by location and specialty
  * Display verification badges
  * Show agent statistics and listings
- **Data Fetching**: All verified agents + their active listings count

**4. AgentProfile (pages/AgentProfile.js)**
- **Purpose**: Detailed agent profile with listings
- **URL**: /AgentProfile?id=AGENT_ID
- **Features**:
  * Agent photo, agency name, rating
  * Full bio and credentials
  * Contact information (WhatsApp, office, email)
  * Specialties and service areas
  * Agent's active property listings
  * Years of experience, properties sold
- **Key Functions**:
  * Fetch agent by ID from URL params
  * Display agent's active listings using ListingCard
  * WhatsApp contact button
- **Security**: Public access (anyone can view)

**5. AgentRegistration (pages/AgentRegistration.js)**
- **Purpose**: Allow users to register as real estate agents
- **Features**:
  * Multi-step form:
    1. Agency information (name, license number)
    2. Document upload (license, ID)
    3. Areas covered (multi-select states)
    4. Specialties (residential, commercial, etc.)
    5. Contact details (WhatsApp, office address, bio)
  * Image compression before upload
  * Real-time validation
  * Auto-redirect if already registered
- **Key Functions**:
  * Upload and compress license + ID documents
  * Create Agent entity record
  * Update User.user_type to "agent"
  * Navigate to AgentDashboard on success
- **Validation**: Requires license upload and agency name

**6. ListingDetails (pages/ListingDetails.js)**
- **Purpose**: Full property information and booking
- **URL**: /ListingDetails?id=LISTING_ID
- **Features**:
  * Image gallery with lightbox (ImageGallery component)
  * Property title, address, pricing breakdown
  * Quick stats (bedrooms, bathrooms, availability)
  * Full description
  * Amenities list with icons
  * Video gallery
  * Nearby landmarks with distances and types
  * Landlord/Agent information
  * WhatsApp contact button
  * Inquiry form (InquiryForm component)
  * Security badges (verified, escrow protected)
  * Action buttons:
    - Pay & Secure Property (→ MakePayment)
    - Create Payment Group (→ CreatePaymentGroup)
    - Edit Listing (landlords only)
- **Key Functions**:
  * Increment views_count on load
  * Fetch listing + landlord/agent data
  * Submit inquiry
  * Calculate total rent (rent + agent fee)
- **Security**: Public can view verified listings, owners can edit

### TENANT PAGES (Login Required)

**7. TenantDashboard (pages/TenantDashboard.js)**
- **Purpose**: Tenant home page with overview
- **Features**:
  * Welcome message with user name
  * Stats cards:
    - Active leases count
    - Total payments made
    - Pending applications
  * Recent leases table
  * Payment history table
  * Quick action buttons (Browse, My Payments, My Leases)
- **Key Functions**:
  * Fetch user's leases, payments, inquiries
  * Calculate total paid amount
  * Navigate to detail pages
- **Data**: Filters for current user's tenant_id

**8. MyPayments (pages/MyPayments.js)**
- **Purpose**: Track all payment history and escrow status
- **Features**:
  * Payment history table with columns:
    - Property title
    - Amount, payment type, status
    - Platform fee breakdown
    - Date, receipt download
  * Status filters (all, held, released, pending, etc.)
  * Search by property name
  * Receipt downloads
  * Escrow status badges
- **Key Functions**:
  * Fetch all payments for current user
  * Filter by status
  * Download receipt PDFs
  * View payment details
- **Data**: Payments where tenant_id = current user

**9. MyLeases (pages/MyLeases.js)**
- **Purpose**: View and manage lease agreements
- **Features**:
  * Lease cards with:
    - Property info and image
    - Lease duration (start → end dates)
    - Rent amount
    - Signing status (tenant, landlord)
    - Status badge
  * Digital signature functionality
  * Download lease PDF
  * Filter by status (active, expired, pending)
  * View lease terms (pets, subletting, notice period)
- **Key Functions**:
  * Sign lease (records signature + IP + timestamp)
  * Download PDF
  * View full terms
- **Data**: Leases where tenant_id = current user

**10. MyApplications (pages/MyApplications.js)**
- **Purpose**: Track inquiry/application status
- **Features**:
  * Application cards showing:
    - Property details
    - Application date
    - Current status
    - Landlord response
  * Status indicators
  * Withdraw application button
  * View property details link
- **Key Functions**:
  * Fetch inquiries for current user
  * Withdraw inquiry (delete)
  * Navigate to property details
- **Data**: Inquiries where tenant_id = current user

**11. MakePayment (pages/MakePayment.js)**
- **Purpose**: Secure payment checkout with escrow
- **URL**: /MakePayment?listing_id=LISTING_ID
- **Features**:
  * Property summary card
  * Payment breakdown:
    - Base rent amount
    - Agent fee (if applicable)
    - Platform fee (2% or 1%)
    - Total amount
  * Payment method selection:
    - Debit/Credit Card
    - Bank Transfer
    - USSD
    - Mobile Wallet
  * Gateway selection (Paystack, Flutterwave)
  * Escrow protection notice
  * Terms & conditions checkbox
- **Key Functions**:
  * Calculate fees based on payment type
  * Create Payment entity (status: held)
  * Integrate with payment gateway
  * Generate receipt
  * Navigate to payment confirmation
- **Security**: Creates payment in "held" escrow status

**12. PaymentGroups (pages/PaymentGroups.js)**
- **Purpose**: View and manage co-renting payment groups
- **Features**:
  * List of payment groups user is part of
  * Group cards showing:
    - Property info
    - Target amount and progress bar
    - Members count
    - Commitment status
    - Payment status
  * Create new group button
  * Join group via invite code
  * Group status badges
- **Key Functions**:
  * Fetch groups where user is initiator or member
  * Navigate to PaymentGroupRoom
  * Navigate to CreatePaymentGroup
- **Data**: PaymentGroups where initiator_id = user OR user in members array

**13. CreatePaymentGroup (pages/CreatePaymentGroup.js)**
- **Purpose**: Form payment group for co-renting
- **URL**: /CreatePaymentGroup?listing_id=LISTING_ID
- **Features**:
  * Property summary
  * Group name input
  * Target amount (pre-filled from listing)
  * Member invitation (add emails)
  * Generate unique invite code
  * Set expiration date
  * Initial commitment input
- **Key Functions**:
  * Create PaymentGroup entity
  * Generate random invite code
  * Add initiator as first member
  * Navigate to PaymentGroupRoom
- **Validation**: Requires group name, valid listing

**14. PaymentGroupRoom (pages/PaymentGroupRoom.js)**
- **Purpose**: Group chat + payment coordination hub
- **URL**: /PaymentGroupRoom?id=GROUP_ID
- **Features**:
  * Progress tracker (visual bar showing committed vs target)
  * Property information card
  * Member list with commitment amounts
  * Live group chat
  * Commit funds button
  * Invite new members
  * Copy invite link
  * Payment completion when target reached
- **Key Functions**:
  * Real-time message sync
  * Update member commitments
  * Send messages (GroupMessage entity)
  * Invite via email
  * Calculate group progress
  * Create Payment when fully funded
- **Data**: Fetches PaymentGroup + GroupMessages + Listing









### LANDLORD PAGES (Login Required + user_type=landlord)

**15. LandlordDashboard (pages/LandlordDashboard.js)**
- **Purpose**: Landlord overview and management hub
- **Features**:
  * Statistics cards:
    - Total listings (active/inactive)
    - Total views across all properties
    - Pending inquiries
    - Total earnings
    - Escrow balance
  * Recent listings table
  * Recent inquiries table
  * Quick actions:
    - Add New Listing
    - View All Payments
    - Manage Leases
- **Key Functions**:
  * Aggregate data from listings, inquiries, payments
  * Calculate total earnings and escrow balance
  * Navigate to management pages
- **Data**: Landlord's listings, inquiries, payments

**16. MyListings (pages/MyListings.js)**
- **Purpose**: Manage all landlord properties
- **Features**:
  * Listings table/cards with:
    - Property image and title
    - Rent amount, bedrooms, location
    - Verification status badge
    - Active/inactive toggle
    - Views and inquiries count
    - Edit/Delete buttons
  * Status filters (all, active, pending, verified)
  * Search by title
  * Create listing button
- **Key Functions**:
  * Toggle listing active status
  * Delete listing
  * Navigate to edit (AddListing with ID)
  * Track performance metrics
- **Data**: Listings where landlord_id = current user

**17. AddListing (pages/AddListing.js)**
- **Purpose**: Create/edit property listings
- **Features**:
  * Comprehensive multi-section form:
    
    **Property Details:**
    - Title, description, property type
    - Bedrooms, bathrooms
    - Base rent amount, currency
    - Agent commission % (0-100)
    - Auto-calculated total annual rent
    - Available from date
    
    **Location:**
    - GPS capture button (auto-fills everything)
    - Manual address input
    - City, State, LGA dropdowns
    - Latitude/Longitude display
    - Interactive map preview
    
    **Amenities:**
    - Multi-select checkboxes (WiFi, Generator, Security, Parking, etc.)
    - Custom amenity input
    
    **Media:**
    - Image uploads (multiple, compressed automatically)
    - Video uploads (YouTube/direct upload)
    - Image preview with delete
    - Drag-and-drop support
    
    **Nearby Landmarks:**
    - Auto-generate via AI button (uses GPS + LLM)
    - Manual add landmark
    - Distance calculator
    - Type categorization
    
    **Verification Documents:**
    - Title document upload
    - Landlord ID upload
    - Document preview
- **Key Functions**:
  * GPS capture using browser geolocation API
  * Reverse geocoding (lat/lng → address) via OpenStreetMap Nominatim
  * Auto-fill address, city, state, LGA from GPS
  * AI landmark generation using Core.InvokeLLM with internet context
  * Image compression (browser-image-compression)
  * Upload files to Core.UploadFile
  * Calculate total_annual_rent = rent_amount + (rent_amount * agent_fee / 100)
  * Create or update Listing entity
  * Navigate to MyListings on success
- **Agent Support**: If user is verified agent, can list on behalf of landlord
- **Edit Mode**: Pre-fills form when editing existing listing
- **Validation**: Required fields enforced, GPS recommended

**18. LandlordInquiries (pages/LandlordInquiries.js)**
- **Purpose**: Manage tenant inquiries
- **Features**:
  * Inquiries table with:
    - Property name
    - Tenant name, email, phone
    - Message preview
    - Preferred move date
    - Status dropdown
    - Actions (contact, approve, reject)
  * Status filters
  * Search by tenant name or property
  * Bulk actions
- **Key Functions**:
  * Update inquiry status
  * View full inquiry details
  * Contact tenant via WhatsApp
  * Schedule viewings
- **Data**: Inquiries for landlord's listings

**19. LandlordPayments (pages/LandlordPayments.js)**
- **Purpose**: Track received payments and payouts
- **Features**:
  * Payments table:
    - Property, tenant, amount
    - Status (held, released, withdrawn)
    - Platform fee, landlord payout
    - Refund button (if available)
    - Withdrawal tracking
  * Filter by status and property
  * Total earnings counter
  * Escrow balance display
  * Payment timeline
- **Key Functions**:
  * Refund payment (before tenant move-in)
  * Withdraw funds (creates payout)
  * Download receipts
  * View payment history
- **Data**: Payments where landlord_id = current user
- **Refund Logic**: refund_available = true AND status = held

**20. LandlordLeases (pages/LandlordLeases.js)**
- **Purpose**: Manage lease agreements
- **Features**:
  * Lease cards/table
  * Digital signing interface
  * Generate lease button
  * View lease terms
  * Download signed PDFs
  * Termination options
- **Key Functions**:
  * Sign lease as landlord
  * Generate lease from template
  * Download PDF
  * Update lease status
- **Data**: Leases where landlord_id = current user


### AGENT PAGES (Login Required + user_type=agent)

**21. AgentDashboard (pages/AgentDashboard.js)**
- **Purpose**: Agent performance and management hub
- **Features**:
  * Statistics cards:
    - Active listings count
    - Total views on agent properties
    - Pending inquiries
    - Commission earned
    - Active leases managed
  * License verification alert (if not verified)
  * Recent listings table
  * Quick actions (Add Listing, View Commissions, Manage Inquiries)
- **Key Functions**:
  * Aggregate agent-specific data
  * Calculate total commissions
  * Navigate to agent pages
- **Data**: Agent record + agent's listings + commissions + leases

**22. AgentListings (pages/AgentListings.js)**
- **Purpose**: Manage properties agent is marketing
- **Features**:
  * Similar to MyListings but for agent
  * Show commission % on each listing
  * Landlord information
  * Performance metrics
  * Edit/deactivate capabilities
- **Key Functions**:
  * Manage agent-assisted listings
  * Track performance per property
- **Data**: Listings where agent_id = current agent

**23. AgentInquiries (pages/AgentInquiries.js)**
- **Purpose**: Handle inquiries on agent-listed properties
- **Features**:
  * Inquiries for agent's listings
  * Respond on behalf of landlord
  * Schedule viewings
  * Application tracking
- **Data**: Inquiries for agent's managed properties

**24. AgentLeases (pages/AgentLeases.js)**
- **Purpose**: Manage leases for agent-assisted rentals
- **Features**:
  * Leases where agent facilitated
  * Agent can sign on behalf of landlord (if authorized)
  * Commission tracking per lease
- **Data**: Leases where agent_id = current agent

**25. AgentCommissions (pages/AgentCommissions.js)**
- **Purpose**: Track earnings and commission payouts
- **Features**:
  * Commission records table:
    - Property, landlord, tenant
    - Base rent, commission %, amount earned
    - Status (pending, approved, paid)
    - Payout date and reference
  * Total earnings display
  * Filter by status
  * Export to CSV
- **Key Functions**:
  * View all commissions
  * Track payout status
  * Download earning statements
- **Data**: Commission records where agent_id = current agent



























### ADMIN PAGES (Login Required + role=admin)

**26. AdminDashboard (pages/AdminDashboard.js)**
- **Purpose**: Platform health overview
- **Features**:
  * Key metrics:
    - Total users (breakdown by type)
    - Total listings (verified vs pending)
    - Total payments and escrow held
    - Platform revenue (fees collected)
    - Active disputes
  * Alert cards:
    - Pending verifications (count)
    - Flagged listings (count)
    - Open disputes (count)
  * Recent activity feed
  * Pending verification queue (top 5)
  * Active disputes list
  * Quick action buttons
- **Key Functions**:
  * Aggregate platform-wide statistics
  * Navigate to admin tools
  * Monitor critical alerts
- **Data**: All entities aggregated

**27. AdminUsers (pages/AdminUsers.js)**
- **Purpose**: User management and oversight
- **Features**:
  * Users table (DataTable component):
    - Email, full name, type, role
    - Listings count, payments count
    - Total paid, KYC status
    - Agent verification (if applicable)
    - Registration date
    - Actions (edit, promote to admin, delete)
  * Search by name/email
  * Filter by user type (all, tenants, landlords, agents, admins)
  * User statistics cards
  * Export to CSV
  * Invite new user button
- **Key Functions**:
  * Search and filter users
  * Promote user to admin
  * View user activity
  * Export user data
  * Enrich user data with listings/payments count
- **Data**: All users + enriched with related entities

**28. AdminVerification (pages/AdminVerification.js)**
- **Purpose**: Review and verify property listings
- **Features**:
  * Verification queue (pending listings)
  * Listing cards with:
    - All property details
    - GPS location on map
    - Uploaded documents (title, landlord ID)
    - Photo gallery review
    - Verification checklist
  * Approve/Reject buttons
  * Flag listing button
  * Rejection reason input
  * GPS verification (compare pin to actual location)
  * Document authenticity check
- **Key Functions**:
  * Approve listing (verification_status = verified)
  * Reject listing (verification_status = rejected, add reason)
  * Flag for review (verification_status = flagged)
  * Create VerificationLog record
  * Send email notification to landlord
- **Data**: Listings where verification_status = pending OR flagged
- **Filters**: Status, state, property type

**29. AdminEscrow (pages/AdminEscrow.js)**
- **Purpose**: Monitor and manage escrow accounts
- **Features**:
  * Escrow summary:
    - Total funds held in escrow
    - Pending releases
    - Released this month
    - Refunded this month
  * Payments table:
    - Tenant, landlord, amount
    - Days in escrow
    - Status, action buttons
  * Release payment button
  * Refund payment button
  * Transaction logs
  * Dispute escalation
- **Key Functions**:
  * Release payment to landlord (status: held → released)
  * Process refund to tenant (status: held → refunded)
  * Monitor escrow duration
  * Handle dispute resolutions
- **Data**: All payments with status filtering
- **Critical**: Only admins can release/refund escrow

**30. AdminDisputes (pages/AdminDisputes.js)**
- **Purpose**: Mediate and resolve payment disputes
- **Features**:
  * Disputes table:
    - Payment reference
    - Raised by (tenant/landlord)
    - Category, description
    - Amount in dispute
    - Evidence files
    - Status, assigned admin
  * Dispute detail modal:
    - Full case information
    - Evidence gallery
    - Resolution options (refund full, partial, release, split)
    - Resolution notes input
  * Status updates
  * Assign to admin
  * Evidence review
- **Key Functions**:
  * Review dispute evidence
  * Make resolution decision
  * Execute refund/release based on resolution
  * Update Payment and Dispute status
  * Log in AuditLog
  * Send notifications to both parties
- **Data**: All disputes
- **Resolution Options**:
  * refund_full: 100% to tenant
  * refund_partial: X% to tenant, rest to landlord
  * release_to_landlord: 100% to landlord
  * split: 50/50
  * no_action: Close with no refund

**31. AdminAnalytics (pages/AdminAnalytics.js)**
- **Purpose**: Platform performance insights
- **Features**:
  * Revenue charts (daily, weekly, monthly)
  * User growth graphs
  * Property distribution by state/type
  * Payment volume trends
  * Conversion funnel (views → inquiries → payments)
  * Top performing properties
  * Top earning agents
  * Geographic heat map
- **Charts**: Line, bar, pie charts using Recharts
- **Data**: All entities aggregated with date ranges
- **Export**: CSV/PDF reports

**32. DownloadBlueprint (pages/DownloadBlueprint.js)**
- **Purpose**: This page - generates platform documentation
- **Features**:
  * Download complete blueprint as Markdown
  * Documentation overview cards
  * Technical specs summary

═══════════════════════════════════════════════════════════════════


## 🧩 UI COMPONENTS LIBRARY

### Custom Components (components/)

**1. ListingCard (components/listings/ListingCard.jsx)**
- **Purpose**: Reusable property card for grids
- **Props**: listing object, onClick handler
- **Features**:
  * Property image with fallback
  * Title, location (city, state)
  * Price with agent fee breakdown
  * Property type badge
  * Bedrooms/bathrooms icons
  * Verification badge
  * Views count
  * Hover animation
- **Usage**: Home, Browse, AgentProfile, Dashboards

**2. ImageGallery (components/listings/ImageGallery.jsx)**
- **Purpose**: Lightbox image viewer
- **Props**: images array, initialIndex
- **Features**:
  * Full-screen modal
  * Image navigation (prev/next)
  * Thumbnail strip
  * Zoom capability
  * Close button
  * Keyboard navigation (arrow keys, ESC)
- **Usage**: ListingDetails

**3. InquiryForm (components/listings/InquiryForm.jsx)**
- **Purpose**: Contact form for property inquiries
- **Props**: listing object, landlord info
- **Features**:
  * Name, email, phone inputs
  * Message textarea
  * Preferred move date picker
  * Submit button with loading state
  * Success/error messages
- **Key Functions**:
  * Create Inquiry entity
  * Increment listing.inquiries_count
  * Send email notification to landlord
  * Show success confirmation
- **Usage**: ListingDetails

**4. SearchFilters (components/listings/SearchFilters.jsx)**
- **Purpose**: Advanced property filtering UI
- **Props**: onFilterChange callback, currentFilters
- **Features**:
  * State dropdown (all 37 Nigerian states)
  * Property type multi-select
  * Price range slider
  * Bedrooms selector
  * Clear filters button
- **Usage**: Browse, Home

**5. LandmarksDisplay (components/listings/LandmarksDisplay.jsx)**
- **Purpose**: Show nearby points of interest
- **Props**: landmarks array
- **Features**:
  * Categorized landmark groups
  * Distance display in km
  * Icon by type (school, hospital, etc.)
  * Sorted by distance
  * Google Maps link
- **Usage**: ListingDetails

**6. DataTable (components/ui/DataTable.jsx)**
- **Purpose**: Reusable table with sorting/pagination
- **Props**: data array, columns config, loading, emptyMessage, onRowClick
- **Features**:
  * Loading skeleton rows
  * Empty state message
  * Sortable columns
  * Clickable rows
  * Responsive design
  * Custom cell renderers
- **Usage**: AdminUsers, MyPayments, MyLeases, all admin tables

**7. StatCard (components/ui/StatCard.jsx)**
- **Purpose**: Metric display card
- **Props**: title, value, icon, change, trend
- **Features**:
  * Large number display
  * Icon with colored background
  * Trend indicator (up/down %)
  * Animated number counting
- **Usage**: All dashboards

**8. StatusBadge (components/ui/StatusBadge.jsx)**
- **Purpose**: Colored status indicators
- **Props**: status string, type (payment/listing/inquiry)
- **Features**:
  * Color-coded by status
  * Predefined mappings
  * Icons per status
- **Usage**: Throughout app

**9. EmptyState (components/ui/EmptyState.jsx)**
- **Purpose**: Friendly empty data message
- **Props**: icon, title, description, action button
- **Features**:
  * Centered layout
  * Custom icon
  * Call-to-action button
- **Usage**: When no data to display

**10. UserNotRegisteredError (components/UserNotRegisteredError.jsx)**
- **Purpose**: Handle unregistered users accessing restricted pages
- **Features**:
  * Error message
  * Register/Login CTA
  * Redirect logic
- **Usage**: Protected pages









### shadcn/ui Components (components/ui/)
Complete library of 50+ pre-built components:
- button, card, input, badge, textarea
- select, dropdown-menu, dialog, sheet
- table, tabs, accordion, alert
- avatar, checkbox, radio-group, switch
- calendar, popover, tooltip, hover-card
- progress, slider, separator
- scroll-area, aspect-ratio
- command, context-menu, menubar
- navigation-menu, pagination
- carousel, collapsible, resizable
- toast, sonner, form
- toggle, toggle-group
- sidebar, breadcrumb, skeleton

═══════════════════════════════════════════════════════════════════













## ⚙️ CORE FEATURES & FUNCTIONALITY

### FEATURE 1: Property Listing with Agent Commission

**Description**: Landlords can list properties with optional agent commission

**Implementation** (AddListing.jsx):
\`\`\`javascript
// Commission Calculator - Real-time Updates
const handleRentChange = (e) => {
  const rent = parseFloat(e.target.value) || 0;
  const agentFee = (rent * (formData.agent_fee_percentage || 0)) / 100;
  setFormData(prev => ({
    ...prev,
    rent_amount: rent,
    total_annual_rent: rent + agentFee
  }));
};

const handleAgentFeeChange = (e) => {
  const feePercent = parseFloat(e.target.value) || 0;
  const rent = formData.rent_amount || 0;
  const agentFee = (rent * feePercent) / 100;
  setFormData(prev => ({
    ...prev,
    agent_fee_percentage: feePercent,
    total_annual_rent: rent + agentFee
  }));
};

// Display Breakdown
<div className="rent-breakdown">
  <p>Base Rent: ₦{formData.rent_amount?.toLocaleString()}</p>
  <p>Agent Fee ({formData.agent_fee_percentage}%): ₦{agentFee.toLocaleString()}</p>
  <p className="total">Total Annual Rent: ₦{formData.total_annual_rent?.toLocaleString()}</p>
</div>
\`\`\`

**Business Logic**:
- Landlord sets base rent (e.g., ₦1,000,000)
- Landlord sets agent commission % (e.g., 10%)
- System calculates agent fee = ₦100,000
- Total shown to tenant = ₦1,100,000
- Commission tracked in Commission entity when paid

═══════════════════════════════════════════════════════════════════















### FEATURE 2: GPS Auto-Fill and AI Landmark Generation
**Description**: One-click GPS capture that auto-fills all location fields + AI discovers nearby landmarks

**Implementation** (AddListing.jsx):

\`\`\`javascript
// STEP 1: GPS Capture
const captureGPS = () => {
  setGpsLoading(true);
  
  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      const accuracy = position.coords.accuracy;
      
      // STEP 2: Reverse Geocoding (GPS → Human Address)
      const response = await fetch(
        \`https://nominatim.openstreetmap.org/reverse?lat=\${lat}&lon=\${lng}&format=json\`
      );
      const geoData = await response.json();
      
      // STEP 3: Auto-fill Form Fields
      setFormData(prev => ({
        ...prev,
        lat: lat,
        lng: lng,
        address_text: geoData.display_name,
        city: geoData.address?.city || geoData.address?.town || geoData.address?.suburb,
        state: geoData.address?.state,
        lga: geoData.address?.state_district || geoData.address?.county,
        pin_verified: accuracy < 50 // Verified if accuracy < 50m
      }));
      
      setGpsLoading(false);
      toast.success('Location captured successfully!');
    },
    (error) => {
      toast.error('GPS capture failed. Please enter address manually.');
      setGpsLoading(false);
    },
    { enableHighAccuracy: true, timeout: 10000 }
  );
};

// STEP 4: AI Landmark Discovery
const generateLandmarks = async () => {
  if (!formData.lat || !formData.lng) {
    toast.error('Please capture GPS location first');
    return;
  }
  
  setLandmarkLoading(true);
  
  const result = await base44.integrations.Core.InvokeLLM({
    prompt: \`Given the GPS coordinates latitude \${formData.lat} and longitude \${formData.lng} in Nigeria, identify nearby landmarks, facilities, and points of interest within 5km radius. Include schools, hospitals, markets, transport hubs, shopping centers, worship centers, and other notable places. Provide the name, approximate distance in kilometers, and type for each landmark.\`,
    add_context_from_internet: true, // Use Google search + Maps data
    response_json_schema: {
      type: "object",
      properties: {
        landmarks: {
          type: "array",
          items: {
            type: "object",
            properties: {
              name: { type: "string" },
              distance_km: { type: "number" },
              type: { 
                type: "string",
                enum: ["school", "hospital", "market", "transport", "shopping", "worship", "other"]
              }
            },
            required: ["name", "distance_km", "type"]
          }
        }
      },
      required: ["landmarks"]
    }
  });
  
  setFormData(prev => ({ 
    ...prev, 
    landmarks: result.landmarks 
  }));
  
  setLandmarkLoading(false);
  toast.success(\`\${result.landmarks.length} landmarks discovered!\`);
};
\`\`\`

**User Experience**:
1. Click "Capture GPS Location" button
2. Browser requests location permission
3. System captures lat/lng (within 10 seconds)
4. Automatically fills: address_text, city, state, LGA
5. Click "Auto-Generate Landmarks" button
6. AI searches nearby places using Google data
7. Returns 10-20 landmarks with names, distances, types
8. Landmarks appear in table (editable)

**Benefits**:
- Eliminates manual address entry errors
- Ensures accurate GPS coordinates for verification
- Enriches listings with neighborhood context
- Saves landlord 10-15 minutes per listing

═══════════════════════════════════════════════════════════════════













### FEATURE 3: Escrow Payment System
**Description**: Secure payment holding system protecting both landlords and tenants

**Implementation** (MakePayment.js):

\`\`\`javascript
// PAYMENT CALCULATION
const calculatePayment = (listing, paymentType) => {
  const baseRent = listing.total_annual_rent; // Includes agent fee
  const feePercentage = paymentType === 'initial' ? 0.02 : 0.01;
  const platformFee = Math.round(baseRent * feePercentage);
  const totalAmount = baseRent + platformFee;
  const landlordPayout = baseRent - platformFee;
  
  return {
    baseRent,
    platformFee,
    feePercentage: feePercentage * 100,
    totalAmount,
    landlordPayout
  };
};

// PAYMENT CREATION - HELD IN ESCROW
const processPayment = async (listing, paymentMethod, gateway) => {
  const calc = calculatePayment(listing, 'initial');
  
  // Create payment record (status: held)
  const payment = await base44.entities.Payment.create({
    listing_id: listing.id,
    tenant_id: user.email,
    landlord_id: listing.landlord_id,
    amount: calc.baseRent,
    payment_type: 'initial',
    status: 'held', // HELD IN ESCROW
    payment_gateway: gateway,
    gateway_reference: gatewayTransactionId,
    escrow_reference: generateEscrowRef(),
    platform_fee: calc.platformFee,
    platform_fee_percentage: calc.feePercentage,
    landlord_payout: calc.landlordPayout,
    refund_available: true, // Can be refunded before move-in
    currency: listing.currency
  });
  
  // Log audit trail
  await base44.entities.AuditLog.create({
    event_type: 'payment_held',
    entity_type: 'payment',
    entity_id: payment.id,
    actor_id: user.email,
    details: { amount: calc.totalAmount, gateway }
  });
  
  // Send confirmation email
  await base44.integrations.Core.SendEmail({
    to: user.email,
    subject: 'Payment Confirmed - Held in Escrow',
    body: \`Your payment of ₦\${calc.totalAmount.toLocaleString()} is now held securely in escrow...\`
  });
  
  return payment;
};

// RELEASE TO LANDLORD (after move-in confirmation)
const releasePayment = async (paymentId) => {
  await base44.entities.Payment.update(paymentId, {
    status: 'released',
    release_date: new Date().toISOString()
  });
  
  // Create payout transaction
  // Update landlord's balance
  // Send payout notification
};

// REFUND TO TENANT (before move-in)
const refundPayment = async (paymentId, reason) => {
  const payment = await base44.entities.Payment.filter({ id: paymentId })[0];
  
  if (!payment.refund_available) {
    throw new Error('Refund not available for this payment');
  }
  
  await base44.entities.Payment.update(paymentId, {
    status: 'refunded',
    refund_reason: reason,
    refund_available: false
  });
  
  // Process refund through payment gateway
  // Notify tenant
  // Log audit trail
};
\`\`\`

**Escrow Flow**:
1. Tenant pays ₦1,020,000 (₦1M rent + ₦20K fee)
2. Payment status = "held" (in escrow)
3. Funds held for 48-hour inspection period
4. Tenant confirms property is as described
5. Admin/automated system releases payment
6. Status = "released"
7. Landlord receives ₦1,000,000 payout
8. Platform keeps ₦20,000 fee

**Protection Guarantees**:
- Tenant: Can get full refund if property is not as described (within 48 hours)
- Landlord: Gets paid automatically once tenant confirms (no chasing payments)
- Platform: Holds funds until conditions met

═══════════════════════════════════════════════════════════════════











### FEATURE 4: Digital Lease Management
**Description**: Legally enforceable digital leases with e-signature tracking

**Implementation** (MyLeases.jsx, LandlordLeases.jsx):

\`\`\`javascript
// LEASE GENERATION (automated after payment confirmed)
const generateLease = async (payment, listing, tenant, landlord) => {
  const lease = await base44.entities.Lease.create({
    listing_id: listing.id,
    tenant_id: tenant.email,
    landlord_id: landlord.email,
    agent_id: listing.agent_id || null,
    payment_id: payment.id,
    start_date: calculateStartDate(),
    end_date: calculateEndDate(), // +1 year
    rent_amount: listing.total_annual_rent,
    security_deposit: listing.rent_amount * 0.1, // 10% of base rent
    status: 'pending_signatures',
    terms: {
      pet_allowed: false,
      subletting_allowed: false,
      notice_period_days: 30,
      house_rules: 'Standard house rules apply...'
    }
  });
  
  // Generate PDF lease document
  const pdfUrl = await generateLeasePDF(lease, listing, tenant, landlord);
  
  await base44.entities.Lease.update(lease.id, {
    lease_pdf_url: pdfUrl
  });
  
  return lease;
};

// TENANT SIGNATURE
const signAsTenant = async (leaseId) => {
  // Get user's IP for verification
  const ipResponse = await fetch('https://api.ipify.org?format=json');
  const { ip } = await ipResponse.json();
  
  await base44.entities.Lease.update(leaseId, {
    signed_by_tenant: true,
    tenant_signed_at: new Date().toISOString(),
    tenant_signature_ip: ip
  });
  
  // Check if both parties signed
  const lease = await base44.entities.Lease.filter({ id: leaseId })[0];
  if (lease.signed_by_landlord && lease.signed_by_tenant) {
    await base44.entities.Lease.update(leaseId, {
      status: 'active'
    });
  }
  
  toast.success('Lease signed successfully!');
};

// LANDLORD SIGNATURE
const signAsLandlord = async (leaseId) => {
  const ipResponse = await fetch('https://api.ipify.org?format=json');
  const { ip } = await ipResponse.json();
  
  await base44.entities.Lease.update(leaseId, {
    signed_by_landlord: true,
    landlord_signed_at: new Date().toISOString(),
    landlord_signature_ip: ip,
    status: 'active' // Activate once landlord signs
  });
  
  // Release payment from escrow
  await releaseEscrowPayment(lease.payment_id);
};

// PDF GENERATION
const generateLeasePDF = async (lease, listing, tenant, landlord) => {
  // Use jspdf library
  const doc = new jsPDF();
  
  // Add lease content
  doc.text('RENTAL LEASE AGREEMENT', 20, 20);
  doc.text(\`Property: \${listing.title}\`, 20, 40);
  doc.text(\`Tenant: \${tenant.full_name}\`, 20, 50);
  doc.text(\`Landlord: \${landlord.full_name}\`, 20, 60);
  // ... more lease terms
  
  const pdfBlob = doc.output('blob');
  const { file_url } = await base44.integrations.Core.UploadFile({ 
    file: pdfBlob 
  });
  
  return file_url;
};
\`\`\`

**Legal Enforceability**:
- Captures IP address of signer (for verification)
- Records exact timestamp of signature
- Stores PDF copy on both sides
- Cannot be altered after signing
- Admissible as legal evidence

═══════════════════════════════════════════════════════════════════


















### FEATURE 5: Property Verification System

**Description**: Multi-layer verification to prevent fraud

**Verification Levels**:

1. **GPS Verification**
   - Landlord captures GPS at property location
   - System records lat/lng + accuracy
   - Admin compares GPS pin on map to listed address
   - Flag if >500m discrepancy

2. **Document Verification**
   - Title document (proof of ownership)
   - Landlord ID (NIN, Driver's License, Passport)
   - Admin reviews for authenticity
   - Flag suspicious documents

3. **Field Verification** (Optional, Premium)
   - Physical visit by field agent
   - Photo/video evidence from location
   - GPS capture at site
   - Agent report uploaded

4. **Manual Admin Review**
   - All listings reviewed by admin before going live
   - Check photos match description
   - Verify pricing is reasonable
   - Review for red flags

**Implementation** (AdminVerification.jsx):
\`\`\`javascript
const approveListing = async (listingId) => {
  // Update listing status
  await base44.entities.Listing.update(listingId, {
    verification_status: 'verified',
    pin_verified: true
  });
  
  // Create verification log
  await base44.entities.VerificationLog.create({
    listing_id: listingId,
    type: 'listing',
    method: 'manual_review',
    verifier_id: admin.email,
    status: 'approved',
    notes: 'All checks passed. GPS and documents verified.'
  });
  
  // Log audit trail
  await base44.entities.AuditLog.create({
    event_type: 'listing_verified',
    entity_type: 'listing',
    entity_id: listingId,
    actor_id: admin.email,
    actor_role: 'admin'
  });
  
  // Notify landlord
  await base44.integrations.Core.SendEmail({
    to: listing.landlord_id,
    subject: 'Property Verified - Now Live!',
    body: 'Your property has been verified and is now visible to tenants.'
  });
};

const rejectListing = async (listingId, reason) => {
  await base44.entities.Listing.update(listingId, {
    verification_status: 'rejected',
    rejection_reason: reason
  });
  
  await base44.entities.VerificationLog.create({
    listing_id: listingId,
    type: 'listing',
    method: 'manual_review',
    verifier_id: admin.email,
    status: 'rejected',
    notes: reason
  });
  
  // Notify landlord with reason
};
\`\`\`

**Status Flow**:
unverified → pending → verified ✓
                  ↓
                flagged → needs_review → verified/rejected
                  ↓
                rejected ✗
═══════════════════════════════════════════════════════════════════

### FEATURE 6: Payment Groups (Co-Renting)

**Description**: Friends/family pool money to rent together

**Implementation** (CreatePaymentGroup.js, PaymentGroupRoom.js):

\`\`\`javascript
// CREATE PAYMENT GROUP
const createGroup = async (listingId, groupName, targetAmount) => {
  const inviteCode = generateRandomCode(8); // e.g., "AB12CD34"
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + 30); // 30 days to fund
  
  const group = await base44.entities.PaymentGroup.create({
    listing_id: listingId,
    initiator_id: user.email,
    group_name: groupName,
    target_amount: targetAmount,
    total_committed: 0,
    total_paid: 0,
    status: 'open',
    invite_code: inviteCode,
    expires_at: expiresAt.toISOString(),
    members: [
      {
        email: user.email,
        name: user.full_name,
        committed_amount: 0,
        paid_amount: 0,
        status: 'joined',
        joined_at: new Date().toISOString()
      }
    ]
  });
  
  // Create welcome system message
  await base44.entities.GroupMessage.create({
    group_id: group.id,
    sender_id: 'system',
    sender_name: 'Ileagent',
    message: \`\${user.full_name} created this payment group for ₦\${targetAmount.toLocaleString()}\`,
    type: 'system'
  });
  
  return group;
};

// JOIN GROUP VIA INVITE CODE
const joinGroup = async (inviteCode) => {
  const groups = await base44.entities.PaymentGroup.filter({ invite_code: inviteCode });
  const group = groups[0];
  
  if (!group) throw new Error('Invalid invite code');
  if (group.status !== 'open') throw new Error('Group is no longer accepting members');
  
  // Add user to members array
  const updatedMembers = [
    ...group.members,
    {
      email: user.email,
      name: user.full_name,
      committed_amount: 0,
      paid_amount: 0,
      status: 'joined',
      joined_at: new Date().toISOString()
    }
  ];
  
  await base44.entities.PaymentGroup.update(group.id, {
    members: updatedMembers
  });
  
  // System message
  await base44.entities.GroupMessage.create({
    group_id: group.id,
    sender_id: 'system',
    sender_name: 'Ileagent',
    message: \`\${user.full_name} joined the group!\`,
    type: 'system'
  });
};

// COMMIT FUNDS
const commitFunds = async (groupId, amount) => {
  const group = await base44.entities.PaymentGroup.filter({ id: groupId })[0];
  
  // Update member's commitment
  const updatedMembers = group.members.map(m => 
    m.email === user.email 
      ? { ...m, committed_amount: amount, status: 'committed' }
      : m
  );
  
  // Calculate new total
  const totalCommitted = updatedMembers.reduce((sum, m) => sum + m.committed_amount, 0);
  const newStatus = totalCommitted >= group.target_amount ? 'fully_committed' : 'open';
  
  await base44.entities.PaymentGroup.update(groupId, {
    members: updatedMembers,
    total_committed: totalCommitted,
    status: newStatus
  });
  
  // System message
  await base44.entities.GroupMessage.create({
    group_id: groupId,
    sender_id: 'system',
    sender_name: 'Ileagent',
    message: \`\${user.full_name} committed ₦\${amount.toLocaleString()}! Total: ₦\${totalCommitted.toLocaleString()}/₦\${group.target_amount.toLocaleString()}\`,
    type: 'commitment'
  });
  
  // If fully committed, trigger payment
  if (newStatus === 'fully_committed') {
    await processGroupPayment(groupId);
  }
};

// GROUP CHAT
const sendMessage = async (groupId, message) => {
  await base44.entities.GroupMessage.create({
    group_id: groupId,
    sender_id: user.email,
    sender_name: user.full_name,
    message: message,
    type: 'message'
  });
};
\`\`\`

**Use Case Example**:
- 4 friends want to rent ₦2M apartment in Lekki
- John creates group "Lekki Friends 2026"
- Invites Mary, Tunde, Chiamaka via email/code
- Each commits ₦500K
- Once ₦2M committed, system creates Payment
- All 4 listed as co-tenants on lease
- Group chat keeps communication transparent

═══════════════════════════════════════════════════════════════════











### FEATURE 7: Agent System

**Description**: Verified real estate agents can list properties and earn commissions

**Agent Registration Flow**:
1. User clicks "Become an Agent"
2. Fills AgentRegistration form
3. Uploads license + ID documents
4. Submits for verification
5. Admin reviews and approves
6. Agent can now list properties

**Agent Listing Properties**:
\`\`\`javascript
// When agent creates listing
const createAgentListing = async (landlordEmail, listingData) => {
  const agent = await base44.entities.Agent.filter({ 
    user_id: user.email 
  })[0];
  
  const listing = await base44.entities.Listing.create({
    ...listingData,
    landlord_id: landlordEmail,
    agent_id: agent.id,
    listed_by: 'agent',
    agent_fee_percentage: listingData.agent_fee_percentage,
    created_by: user.email // Agent's email
  });
  
  return listing;
};

// Commission Calculation (when tenant pays)
const createCommission = async (payment, listing) => {
  if (!listing.agent_id) return; // No agent involved
  
  const commissionAmount = (listing.rent_amount * listing.agent_fee_percentage) / 100;
  
  await base44.entities.Commission.create({
    payment_id: payment.id,
    listing_id: listing.id,
    agent_id: listing.agent_id,
    landlord_id: listing.landlord_id,
    tenant_id: payment.tenant_id,
    commission_amount: commissionAmount,
    commission_percentage: listing.agent_fee_percentage,
    base_rent: listing.rent_amount,
    status: 'pending'
  });
};

// Commission Payout (after payment released)
const payoutCommission = async (commissionId) => {
  const commission = await base44.entities.Commission.filter({ 
    id: commissionId 
  })[0];
  
  // Process payout through payment gateway
  const payoutRef = await processAgentPayout(
    commission.agent_id, 
    commission.commission_amount
  );
  
  await base44.entities.Commission.update(commissionId, {
    status: 'paid',
    payout_reference: payoutRef,
    paid_date: new Date().toISOString()
  });
  
  // Update agent total earnings
  const agent = await base44.entities.Agent.filter({ 
    id: commission.agent_id 
  })[0];
  
  await base44.entities.Agent.update(commission.agent_id, {
    total_earnings: agent.total_earnings + commission.commission_amount,
    properties_sold: agent.properties_sold + 1
  });
};
\`\`\`

**Agent Benefits**:
- Earn commissions on every successful rental
- Build reputation with ratings
- Manage multiple properties
- Track earnings in real-time
- Get verified badge for trust

═══════════════════════════════════════════════════════════════════



### FEATURE 8: Inquiry and Communication System

**Description**: Structured communication between tenants and landlords

**Implementation**:
\`\`\`javascript
// Submit Inquiry (InquiryForm component)
const submitInquiry = async (listing, formData) => {
  const inquiry = await base44.entities.Inquiry.create({
    listing_id: listing.id,
    tenant_id: user.email,
    landlord_id: listing.landlord_id,
    tenant_name: formData.name,
    tenant_email: user.email,
    tenant_phone: formData.phone,
    message: formData.message,
    preferred_move_date: formData.move_date,
    status: 'pending'
  });
  
  // Increment listing's inquiry count
  await base44.entities.Listing.update(listing.id, {
    inquiries_count: listing.inquiries_count + 1
  });
  
  // Notify landlord via email
  await base44.integrations.Core.SendEmail({
    to: listing.landlord_id,
    subject: \`New Inquiry for \${listing.title}\`,
    body: \`
      You have a new inquiry from \${formData.name}.
      
      Message: \${formData.message}
      Preferred Move Date: \${formData.move_date}
      Contact: \${formData.phone}
      
      View and respond: [Link to LandlordInquiries]
    \`
  });
  
  return inquiry;
};

// Update Inquiry Status (Landlord side)
const updateInquiryStatus = async (inquiryId, newStatus) => {
  await base44.entities.Inquiry.update(inquiryId, {
    status: newStatus
  });
  
  // If approved, can generate lease
  if (newStatus === 'approved') {
    // Trigger lease generation workflow
  }
};
\`\`\`

**Communication Channels**:
- In-app inquiry system (structured)
- Email notifications (automated)
- WhatsApp integration (direct link)
- Payment group chat (GroupMessage)

## 🔧 INTEGRATION TOOLS (Base44 Platform)

All integrations accessed via: \`import { base44 } from '@/api/base44Client'\`

### 1. Core.InvokeLLM
**Purpose**: AI/LLM for intelligent features
**Input Parameters**:
\`\`\`javascript
{
  prompt: string (required, detailed instruction),
  add_context_from_internet: boolean (default: false, enables web search),
  response_json_schema: object (optional, structured output),
  file_urls: string | string[] (optional, attach images/docs for context)
}
\`\`\`

**Returns**: Object if json_schema provided, otherwise string

**Use Cases in Ileagent**:

1. **Landmark Generation**:
\`\`\`javascript
const landmarks = await base44.integrations.Core.InvokeLLM({
  prompt: \`Given GPS coordinates \${lat}, \${lng} in \${city}, \${state}, Nigeria, identify all notable landmarks, facilities, and points of interest within 5km radius. Include schools, hospitals, markets, transport hubs, shopping centers, mosques, churches, and any other important places. Provide accurate distances.\`,
  add_context_from_internet: true, // Uses Google Maps data
  response_json_schema: {
    type: "object",
    properties: {
      landmarks: {
        type: "array",
        items: {
          type: "object",
          properties: {
            name: { type: "string" },
            distance_km: { type: "number" },
            type: { type: "string" }
          }
        }
      }
    }
  }
});
// Returns: { landmarks: [{name: "Lekki Phase 1 Gate", distance_km: 0.8, type: "transport"}, ...] }
\`\`\`

2. **Property Description Enhancement**:
\`\`\`javascript
const enhanced = await base44.integrations.Core.InvokeLLM({
  prompt: \`Enhance this property description to be more appealing: "\${rawDescription}". Keep it professional and factual.\`,
  add_context_from_internet: false
});
// Returns: Enhanced description string
\`\`\`

3. **Document Verification (Future)**:
\`\`\`javascript
const verification = await base44.integrations.Core.InvokeLLM({
  prompt: 'Analyze this ID document for authenticity. Check for security features, clarity, and potential forgery signs.',
  file_urls: [idDocumentUrl],
  response_json_schema: {
    type: "object",
    properties: {
      is_authentic: { type: "boolean" },
      confidence_score: { type: "number" },
      flags: { type: "array", items: { type: "string" } }
    }
  }
});
\`\`\`

═══════════════════════════════════════════════════════════════════

















### 2. Core.UploadFile
**Purpose**: Upload files to public storage
**Input Parameters**:
\`\`\`javascript
{
  file: File (blob/file object from input or generated)
}
\`\`\`
**Returns**: \`{ file_url: string }\`

**Use Cases in Ileagent**:
\`\`\`javascript
// Property Images
const uploadPropertyImage = async (imageFile) => {
  // Compress first
  const compressed = await imageCompression(imageFile, {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920
  });
  
  const { file_url } = await base44.integrations.Core.UploadFile({ 
    file: compressed 
  });
  
  return file_url;
};

// Verification Documents
const uploadDocument = async (docFile) => {
  const { file_url } = await base44.integrations.Core.UploadFile({ 
    file: docFile 
  });
  return file_url;
};

// Generated Lease PDFs
const uploadLeasePDF = async (pdfBlob) => {
  const { file_url } = await base44.integrations.Core.UploadFile({ 
    file: pdfBlob 
  });
  return file_url;
};
\`\`\`

═══════════════════════════════════════════════════════════════════
















### 3. Core.SendEmail
**Purpose**: Transactional email notifications
**Input Parameters**:
\`\`\`javascript
{
  to: string (recipient email),
  subject: string,
  body: string (plain text or HTML),
  from_name: string (optional, defaults to "Ileagent")
}
\`\`\`

**Use Cases in Ileagent**:
\`\`\`javascript
// Payment Confirmation
await base44.integrations.Core.SendEmail({
  to: tenant.email,
  subject: 'Payment Confirmed - Escrow Protection Active',
  body: \`
    Dear \${tenant.full_name},
    
    Your payment of ₦\${amount.toLocaleString()} for \${listing.title} has been confirmed.
    
    Status: Held in Escrow
    Platform Fee: ₦\${platformFee.toLocaleString()}
    
    Your funds are secure and will be held until you confirm the property matches the description.
    
    Next Steps:
    1. Inspect the property within 48 hours
    2. If satisfied, confirm move-in
    3. We'll release payment to landlord
    4. Sign your digital lease
    
    Need help? Reply to this email.
    
    Best regards,
    Ileagent Team
  \`
});

// Inquiry Notification
await base44.integrations.Core.SendEmail({
  to: landlord.email,
  subject: \`New Inquiry: \${listing.title}\`,
  body: \`
    You have a new inquiry from \${tenant.full_name}.
    
    Message: "\${inquiry.message}"
    Phone: \${inquiry.tenant_phone}
    Preferred Move Date: \${inquiry.preferred_move_date}
    
    Respond quickly to secure this tenant!
    View inquiry: https://ileagent.app/LandlordInquiries
  \`
});

// Verification Result
await base44.integrations.Core.SendEmail({
  to: landlord.email,
  subject: listing.verification_status === 'verified' 
    ? '✓ Property Verified!' 
    : '✗ Property Verification Failed',
  body: listing.verification_status === 'verified'
    ? 'Your property is now live and visible to thousands of tenants!'
    : \`Your property could not be verified. Reason: \${listing.rejection_reason}\`
});
\`\`\`

═══════════════════════════════════════════════════════════════════






















### 4. Core.GenerateImage (AI Image Generation)
**Purpose**: Create property visuals when landlord lacks photos
**Input Parameters**:
\`\`\`javascript
{
  prompt: string (detailed description),
  existing_image_urls: string[] (optional, for style reference)
}
\`\`\`
**Returns**: \`{ url: string }\`

**Use Case** (Future Enhancement):
\`\`\`javascript
const generatePropertyImage = async (listing) => {
  const { url } = await base44.integrations.Core.GenerateImage({
    prompt: \`Professional real estate photo of a \${listing.property_type} in Nigeria. \${listing.bedrooms} bedrooms, modern interior, natural lighting, clean and inviting. Style: Real estate photography, bright, welcoming.\`
  });
  
  return url;
};
\`\`\`

═══════════════════════════════════════════════════════════════════






### 5. Core.ExtractDataFromUploadedFile
**Purpose**: Parse data from uploaded documents (CSV, Excel, PDF, images)
**Input Parameters**:
\`\`\`javascript
{
  file_url: string (uploaded file URL),
  json_schema: object (structure to extract)
}
\`\`\`

**Use Case** (Bulk Listing Import):
\`\`\`javascript
// Upload CSV of properties
const { file_url } = await base44.integrations.Core.UploadFile({ file: csvFile });

// Extract structured data
const result = await base44.integrations.Core.ExtractDataFromUploadedFile({
  file_url: file_url,
  json_schema: {
    type: "object",
    properties: {
      properties: {
        type: "array",
        items: {
          type: "object",
          properties: {
            title: { type: "string" },
            rent_amount: { type: "number" },
            bedrooms: { type: "number" },
            address: { type: "string" }
          }
        }
      }
    }
  }
});

// Bulk create listings
await base44.entities.Listing.bulkCreate(result.output.properties);
\`\`\`






















## 👥 COMPLETE USER FLOWS & JOURNEYS

### Tenant Journey
1. **Browse Properties**
   - Visit Browse page
   - Filter by location, type, price, bedrooms
   - View verified listings

2. **View Property**
   - Click listing card
   - View images/videos, landmarks
   - Check nearby landmarks with distances
   - Submit inquiry or WhatsApp landlord

3. **Make Payment**
   - Click "Pay & Secure Property"
   - Select payment method
   - Complete escrow payment (2% fee)
   - Funds held securely

4. **Sign Lease**
   - Receive lease document
   - Review terms
   - Digital signature
   - Download PDF

5. **Move In**
   - Confirm move-in
   - Funds released to landlord
   - Track subsequent payments (1% fee)

### Landlord Journey
1. **List Property**
   - Click "Add Listing"
   - Enter details + agent commission %
   - Capture GPS (auto-fills address, state, LGA)
   - Auto-generate landmarks or add manually
   - Upload images/videos
   - Upload verification docs
   - Submit for verification

2. **Manage Inquiries**
   - View tenant inquiries
   - Schedule viewings
   - Approve applications

3. **Lease & Payment**
   - Generate lease
   - Digital signing
   - Track payments
   - Monitor escrow
   - Receive payouts
   - Issue refunds if needed

### Admin Journey
1. **Verify Listings**
   - Review pending properties
   - Check GPS location
   - Verify documents
   - Approve/reject

2. **Manage Escrow**
   - Monitor held payments
   - Process releases
   - Handle refunds

3. **Resolve Disputes**
   - Review evidence
   - Mediate resolution
   - Execute refund/release decisions

---

## 🔒 Security Features

### 1. Escrow Protection
- All payments held in secure escrow
- 48-hour inspection window
- Refund capability before move-in
- Transaction logging

### 2. Property Verification
- GPS location matching
- Document verification (title, ID)
- Field agent verification
- Multi-stage approval

### 3. User Authentication
- Built-in auth system
- Role-based access (admin/user)
- Session management
- Secure logout

### 4. Data Security
- 256-bit SSL encryption
- Secure file storage
- Audit logging
- NDPR compliance (Nigeria Data Protection)

### 5. Payment Security
- PCI-compliant gateways (Paystack, Flutterwave)
- Encrypted card details
- Secure transaction IDs
- Receipt generation

---

## 📊 State Management

### React Query Usage
\`\`\`javascript
// Data fetching with caching
const { data: listings } = useQuery({
  queryKey: ['allListings'],
  queryFn: () => base44.entities.Listing.filter({ is_active: true })
});

// Mutations with cache invalidation
const createPaymentMutation = useMutation({
  mutationFn: (paymentData) => base44.entities.Payment.create(paymentData),
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['payments'] });
  }
});
\`\`\`

---

## 🎨 Styling System

### Tailwind Configuration
- **Primary Color**: Emerald (green) - #10b981
- **Accent Colors**: Teal, Blue, Amber
- **Typography**: System fonts, responsive sizing
- **Spacing**: 4px base unit
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)

### Component Variants
- Buttons: primary, outline, ghost, destructive
- Cards: elevated (shadow-sm), bordered
- Badges: default, outline, with colors by status
- Inputs: standard, with icons, validated

---

## 📱 Responsive Design

All pages are fully responsive:
- **Mobile**: Single column, bottom navigation
- **Tablet**: 2-column grids, side navigation
- **Desktop**: 3-column layouts, full navigation

---

## 🚀 Setup Instructions

### 1. Clone & Install
\`\`\`bash
# Project is on Base44 platform - no clone needed
# All dependencies pre-installed
\`\`\`

### 2. Environment Setup
- Base44 handles all backend infrastructure
- No environment variables needed
- Authentication built-in
- Database auto-configured

### 3. Key Configurations
- All Nigerian states included (37 states)
- Payment gateways: Paystack, Flutterwave
- Escrow fees: 2% initial, 1% recurring
- File upload limits handled by platform

---

## 📈 Performance Optimizations

1. **React Query Caching**
   - Automatic cache management
   - Background refetching
   - Optimistic updates

2. **Image Optimization**
   - Lazy loading
   - Responsive images
   - Gallery preloading

3. **Code Splitting**
   - Route-based splitting
   - Component lazy loading
   - Tree shaking

4. **Animation Performance**
   - Framer Motion optimized
   - GPU-accelerated transforms
   - Reduced motion support

---

## 🧪 Testing Strategy

### Manual Testing Checklist
- [ ] User registration/login
- [ ] Property creation with commission
- [ ] GPS capture and auto-fill
- [ ] Landmark generation
- [ ] Image/video uploads
- [ ] Payment flow (all methods)
- [ ] Lease signing
- [ ] Admin verification
- [ ] Dispute creation
- [ ] Mobile responsiveness

---

## 🔄 Future Enhancements

1. **Backend Functions** (when enabled)
   - WhatsApp integration for inquiries
   - Email notifications automation
   - Payment gateway webhooks
   - Automated lease generation

2. **Advanced Features**
   - Property comparison tool
   - Neighborhood insights
   - Virtual tours (3D)
   - Tenant credit scoring
   - Automatic rent reminders

3. **Mobile App**
   - React Native version
   - Push notifications
   - Offline mode

---

## 📞 Support & Maintenance

### Key Pages for Maintenance
- **Listing Management**: AddListing.jsx
- **Payment Processing**: MakePayment.jsx
- **User Dashboard**: TenantDashboard.jsx, LandlordDashboard.jsx
- **Admin Tools**: AdminVerification.jsx, AdminEscrow.jsx

### Common Modifications
- Update states list: SearchFilters.jsx, AddListing.jsx
- Adjust fees: Payment entity, MakePayment.jsx
- Add amenities: AddListing.jsx AMENITIES array
- New property types: Listing entity, PROPERTY_TYPES array

---

## 📚 API Reference

### Base44 Entity Operations
\`\`\`javascript
// Create
await base44.entities.EntityName.create(data);

// Read (filter)
await base44.entities.EntityName.filter({ field: value });

// Update
await base44.entities.EntityName.update(id, data);

// Delete
await base44.entities.EntityName.delete(id);

// Bulk operations
await base44.entities.EntityName.bulkCreate([data1, data2]);
\`\`\`

### Authentication
\`\`\`javascript
// Get current user
const user = await base44.auth.me();

// Update user
await base44.auth.updateMe(data);

// Logout
base44.auth.logout(redirectUrl);

// Redirect to login
base44.auth.redirectToLogin(nextUrl);
\`\`\`

---

## 📄 License & Credits

**Platform**: Base44
**UI Components**: shadcn/ui
**Icons**: Lucide React
**Maps**: OpenStreetMap, Nominatim
**Payment Gateways**: Paystack, Flutterwave

---

**Document Version**: 1.0
**Last Updated**: ${new Date().toISOString().split('T')[0]}
**Platform**: IleAgents - Nigeria Rental Property Platform

---

For questions or support, contact: support@ileagents.ng
`;

  const downloadBlueprint = () => {
    const blob = new Blob([blueprintContent], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'IleAgents-Technical-Blueprint.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FileText className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            IleAgents Technical Blueprint
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Complete documentation of the platform's architecture, features, database schema, and implementation details
          </p>
        </div>

        <div className="grid gap-6 mb-8">
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
              <div className="flex items-center gap-3">
                <Database className="w-6 h-6 text-blue-600" />
                <CardTitle className="text-blue-900">Database Schema</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-2 text-slate-700">
                <li>✓ 8 Entity schemas with complete field definitions</li>
                <li>✓ User, Listing, Payment, Lease, Inquiry, Dispute, Verification, Audit entities</li>
                <li>✓ Relationships and data flows documented</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50">
              <div className="flex items-center gap-3">
                <Code className="w-6 h-6 text-emerald-600" />
                <CardTitle className="text-emerald-900">Application Structure</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-2 text-slate-700">
                <li>✓ 20+ React pages (Tenant, Landlord, Admin, Public)</li>
                <li>✓ Reusable UI components library</li>
                <li>✓ Integration tools and usage patterns</li>
                <li>✓ State management with React Query</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
              <div className="flex items-center gap-3">
                <Layers className="w-6 h-6 text-purple-600" />
                <CardTitle className="text-purple-900">Core Features</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-2 text-slate-700">
                <li>✓ Escrow payment system (2% initial, 1% recurring)</li>
                <li>✓ GPS auto-fill with landmark generation</li>
                <li>✓ Agent commission calculator</li>
                <li>✓ Digital lease signing</li>
                <li>✓ Property verification workflow</li>
                <li>✓ Dispute resolution system</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="border-0 shadow-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Download Complete Blueprint</h3>
            <p className="text-emerald-50 mb-6">
              Get the full technical documentation including code examples, API references, user flows, and setup instructions
            </p>
            <Button 
              onClick={downloadBlueprint}
              className="bg-white text-emerald-700 hover:bg-emerald-50 h-14 px-8 text-lg font-semibold"
              size="lg"
            >
              <Download className="w-6 h-6 mr-3" />
              Download Blueprint (Markdown)
            </Button>
            <p className="text-sm text-emerald-100 mt-4">
              60+ pages of comprehensive documentation
            </p>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-slate-500 text-sm">
            Blueprint includes: Architecture diagrams, Code samples, Integration guides, Security features, Setup instructions, and more
          </p>
        </div>
      </div>
    </div>
  );
}

