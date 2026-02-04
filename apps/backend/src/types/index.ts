export interface CreateListingRequest {
  landlordId: string;
  title: string;
  description: string;
  rentAmount: number;
  propertyType: string;
  bedrooms: number;
  bathrooms: number;
  addressText: string;
  city: string;
  state: string;
  lga: string;
  lat: number;
  lng: number;
  images: string[];
  amenities: string[];
  availableFrom: string;
  agentId?: string;
  agentFeePercentage?: number;
}

export interface CreatePaymentRequest {
  listingId: string;
  tenantId: string;
  landlordId: string;
  amount: number;
  paymentType: 'initial' | 'renewal' | 'recurring';
  paymentGateway: 'paystack' | 'flutterwave';
  platformFeePercentage: number;
}
