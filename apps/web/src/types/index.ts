// User types
export type UserType = 'landlord' | 'tenant' | 'agent' | 'admin';
export type KYCStatus = 'none' | 'pending' | 'verified' | 'rejected';

export interface User {
  id: string;
  email: string;
  full_name: string;
  user_type: UserType;
  phone?: string;
  address?: string;
  kyc_status: KYCStatus;
  id_document_url?: string;
  created_date: string;
  updated_date: string;
}

// Agent
export type AgentSpecialty = 'residential' | 'commercial' | 'land' | 'luxury' | 'student_housing';

export interface Agent {
  id: string;
  user_id: string;
  agency_name: string;
  license_number?: string;
  license_document_url?: string;
  license_verified: boolean;
  areas_covered: string[];
  specialties: AgentSpecialty[];
  bio?: string;
  years_experience: number;
  properties_sold: number;
  rating: number;
  rating_count: number;
  commission_rate: number;
  whatsapp?: string;
  office_address?: string;
  total_earnings: number;
  is_active: boolean;
  created_date: string;
  updated_date: string;
}

// Property Listing
export type PropertyType = 'apartment' | 'house' | 'studio' | 'duplex' | 'self_contain' | 'room' | 'office' | 'shop';
export type VerificationStatus = 'unverified' | 'pending' | 'verified' | 'flagged' | 'rejected';

export interface Landmark {
  name: string;
  distance_km: number;
  type: 'school' | 'hospital' | 'market' | 'transport' | 'shopping' | 'worship' | 'other';
}

export interface Listing {
  id: string;
  landlord_id: string;
  agent_id?: string;
  title: string;
  description: string;
  rent_amount: number;
  agent_fee_percentage: number;
  total_annual_rent: number;
  currency: 'NGN' | 'USD';
  property_type: PropertyType;
  bedrooms: number;
  bathrooms: number;
  address_text: string;
  city: string;
  state: string;
  lga: string;
  lat: number;
  lng: number;
  pin_verified: boolean;
  verification_status: VerificationStatus;
  images: string[];
  videos?: string[];
  amenities: string[];
  landmarks: Landmark[];
  available_from: string;
  is_active: boolean;
  views_count: number;
  inquiries_count: number;
  title_document_url?: string;
  landlord_id_url?: string;
  field_verified: boolean;
  flag_count: number;
  rejection_reason?: string;
  created_date: string;
  updated_date: string;
}

// Payment
export type PaymentType = 'initial' | 'renewal' | 'recurring';
export type PaymentStatus = 'pending' | 'held' | 'released' | 'refunded' | 'failed' | 'disputed' | 'withdrawn';
export type PaymentGateway = 'paystack' | 'flutterwave';

export interface Payment {
  id: string;
  listing_id: string;
  tenant_id: string;
  landlord_id: string;
  amount: number;
  currency: 'NGN' | 'USD';
  payment_type: PaymentType;
  status: PaymentStatus;
  payment_gateway: PaymentGateway;
  gateway_reference?: string;
  escrow_reference?: string;
  payout_reference?: string;
  platform_fee: number;
  platform_fee_percentage: number;
  landlord_payout: number;
  release_date?: string;
  receipt_url?: string;
  refund_available: boolean;
  created_date: string;
  updated_date: string;
}

// Lease
export type LeaseStatus = 'draft' | 'pending_signatures' | 'active' | 'expired' | 'terminated';

export interface LeaseTerms {
  pet_allowed: boolean;
  subletting_allowed: boolean;
  notice_period_days: number;
  house_rules?: string;
}

export interface Lease {
  id: string;
  listing_id: string;
  tenant_id: string;
  landlord_id: string;
  agent_id?: string;
  payment_id: string;
  lease_pdf_url: string;
  start_date: string;
  end_date: string;
  rent_amount: number;
  signed_by_tenant: boolean;
  signed_by_landlord: boolean;
  status: LeaseStatus;
  terms: LeaseTerms;
  created_date: string;
  updated_date: string;
}

// Inquiry
export type InquiryStatus = 'pending' | 'contacted' | 'scheduled_viewing' | 'application_sent' | 'approved' | 'rejected' | 'withdrawn';

export interface Inquiry {
  id: string;
  listing_id: string;
  tenant_id: string;
  landlord_id: string;
  tenant_name: string;
  tenant_email: string;
  tenant_phone: string;
  message: string;
  preferred_move_date?: string;
  status: InquiryStatus;
  created_date: string;
  updated_date: string;
}

// Payment Group
export type GroupMemberStatus = 'invited' | 'joined' | 'committed' | 'paid';
export type GroupStatus = 'open' | 'fully_committed' | 'partially_paid' | 'fully_paid' | 'completed' | 'cancelled';

export interface GroupMember {
  email: string;
  name: string;
  committed_amount: number;
  paid_amount: number;
  status: GroupMemberStatus;
  joined_at: string;
}

export interface PaymentGroup {
  id: string;
  listing_id: string;
  initiator_id: string;
  group_name: string;
  target_amount: number;
  total_committed: number;
  total_paid: number;
  status: GroupStatus;
  members: GroupMember[];
  invite_code: string;
  expires_at: string;
  payment_id?: string;
  created_date: string;
  updated_date: string;
}
