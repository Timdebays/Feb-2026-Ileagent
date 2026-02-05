'use client';

import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Button,
  Badge,
} from '@/components/ui';
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  SendIcon,
  ShieldCheckIcon,
  UsersIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon,
  CheckCircleIcon,
  WifiIcon,
  LightbulbIcon,
  LockIcon,
  ParkingCircleIcon,
  SwimmingPoolIcon,
} from 'lucide-react';

export default function ListingDetails() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    moveDate: '',
  });

  // Mock listing data
  const listing = {
    id: '1',
    title: '3 Bedroom Apartment, Lekki Phase 1',
    rent: 1000000,
    agentFee: 10,
    totalRent: 1100000,
    bedrooms: 3,
    bathrooms: 2,
    address: '14 Admiralty Road, Lekki Phase 1, Lagos',
    city: 'Lagos',
    state: 'Lagos',
    lat: 6.4269,
    lng: 3.5701,
    verified: true,
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
    ],
    description:
      'Stunning 3-bedroom apartment in the heart of Lekki Phase 1. Fully furnished with modern amenities and excellent security. Perfect for families or professionals.',
    fullDescription: `This is a premium 3-bedroom, 2-bathroom apartment located in the prestigious Lekki Phase 1 area of Lagos. The property features:

• Spacious living areas with lots of natural light
• Modern kitchen with high-end appliances
• Air conditioning in all rooms
• 24-hour security and power backup
• Excellent WiFi connectivity
• Standing room for multiple cars

The neighborhood is known for its safety, proximity to shopping centers, restaurants, and entertainment venues. Close to Lekki Conservationcentre and Ikoyi Golf Club.`,
    amenities: [
      { icon: <WifiIcon className="w-4 h-4" />, name: 'WiFi' },
      { icon: <LightbulbIcon className="w-4 h-4" />, name: 'Generator' },
      { icon: <LockIcon className="w-4 h-4" />, name: '24/7 Security' },
      { icon: <ParkingCircleIcon className="w-4 h-4" />, name: 'Parking' },
      { icon: <SwimmingPoolIcon className="w-4 h-4" />, name: 'Swimming Pool' },
    ],
    landmarks: [
      {
        name: 'Lekki Conservationcentre',
        distance: 0.8,
        type: 'attraction',
      },
      { name: 'Ikoyi Golf Club', distance: 1.2, type: 'recreation' },
      { name: 'Lekki Phase 1 Market', distance: 0.5, type: 'market' },
      { name: 'Lagos University Teaching Hospital', distance: 2.3, type: 'hospital' },
      { name: 'Lekki Nursery & Primary School', distance: 0.3, type: 'school' },
      { name: 'Victoria Island', distance: 3.5, type: 'area' },
    ],
    landlord: {
      name: 'John Okonkwo',
      type: 'landlord',
      verified: true,
      phone: '+234 801 234 5678',
      email: 'john@example.com',
      recentListings: 3,
      responseTime: '< 1 hour',
    },
    agent: {
      id: 'agent_1',
      name: 'Chisom Nwosu',
      agency: 'Prime Properties Lagos',
      commission: 10,
      verified: true,
      rating: 4.8,
      ratingCount: 124,
      phone: '+234 803 456 7890',
      whatsapp: '+234 803 456 7890',
      email: 'chisom@primeproperties.ng',
      areasServed: ['Lekki', 'Victoria Island', 'Ikoyi'],
    },
    views: 145,
    inquiries: 18,
    createdDate: '2026-01-15',
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Inquiry submitted:', inquiryForm);
    setInquiryForm({
      name: '',
      email: '',
      phone: '',
      message: '',
      moveDate: '',
    });
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % listing.images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex(
      (prev) => (prev - 1 + listing.images.length) % listing.images.length
    );
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Navigation */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button variant="ghost" size="sm" className="gap-1">
            <ChevronLeftIcon className="w-4 h-4" />
            Back
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Image Gallery */}
        <div className="mb-8">
          <div className="relative h-96 bg-slate-200 rounded-lg overflow-hidden mb-4">
            <img
              src={listing.images[selectedImageIndex]}
              alt={`${listing.title} - Image ${selectedImageIndex + 1}`}
              className="w-full h-full object-cover"
            />
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
            <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
              {selectedImageIndex + 1} / {listing.images.length}
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {listing.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                  selectedImageIndex === index
                    ? 'border-emerald-500'
                    : 'border-transparent'
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Title & Price */}
            <div className="mb-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-4xl font-bold text-slate-900 mb-2">
                    {listing.title}
                  </h1>
                  <div className="flex items-center gap-2 text-slate-600">
                    <MapPinIcon className="w-5 h-5" />
                    <span>{listing.address}</span>
                  </div>
                </div>
                {listing.verified && (
                  <Badge variant="verified" className="mt-1">
                    <ShieldCheckIcon className="w-4 h-4 mr-1" />
                    Verified
                  </Badge>
                )}
              </div>

              {/* Price Breakdown */}
              <Card className="bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200">
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-baseline">
                      <span className="text-slate-700">Base Annual Rent:</span>
                      <span className="text-2xl font-bold text-emerald-600">
                        ₦{listing.rent.toLocaleString()}
                      </span>
                    </div>
                    {listing.agentFee > 0 && (
                      <div className="flex justify-between items-baseline border-t border-emerald-200 pt-3">
                        <span className="text-slate-700">
                          Agent Fee ({listing.agentFee}%):
                        </span>
                        <span className="font-semibold text-slate-900">
                          ₦{(listing.rent * (listing.agentFee / 100)).toLocaleString()}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between items-baseline border-t border-emerald-200 pt-3">
                      <span className="text-slate-700 font-semibold">
                        Total Annual Rent:
                      </span>
                      <span className="text-3xl font-bold text-emerald-600">
                        ₦{listing.totalRent.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm text-slate-600 border-t border-emerald-200 pt-3">
                      <span>Monthly (approx.):</span>
                      <span className="font-semibold text-slate-900">
                        ₦{(listing.totalRent / 12).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Property Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <Card>
                <CardContent className="pt-6 text-center">
                  <p className="text-3xl font-bold text-slate-900">
                    {listing.bedrooms}
                  </p>
                  <p className="text-sm text-slate-600">Bedrooms</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <p className="text-3xl font-bold text-slate-900">
                    {listing.bathrooms}
                  </p>
                  <p className="text-sm text-slate-600">Bathrooms</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <p className="text-3xl font-bold text-slate-900">
                    {listing.views}
                  </p>
                  <p className="text-sm text-slate-600">Views</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <p className="text-3xl font-bold text-slate-900">
                    {listing.inquiries}
                  </p>
                  <p className="text-sm text-slate-600">Inquiries</p>
                </CardContent>
              </Card>
            </div>

            {/* Description */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>About this property</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed mb-4">
                  {listing.description}
                </p>
                <p className="text-slate-600 whitespace-pre-line">
                  {listing.fullDescription}
                </p>
              </CardContent>
            </Card>

            {/* Amenities */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Amenities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {listing.amenities.map((amenity) => (
                    <div
                      key={amenity.name}
                      className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg"
                    >
                      <div className="text-emerald-600">{amenity.icon}</div>
                      <span className="font-medium text-slate-900">
                        {amenity.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Landmarks */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Nearby Landmarks</CardTitle>
                <CardDescription>Within 5km radius</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {listing.landmarks.map((landmark) => (
                    <div
                      key={landmark.name}
                      className="flex items-center justify-between p-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <div>
                        <p className="font-medium text-slate-900">
                          {landmark.name}
                        </p>
                        <p className="text-sm text-slate-500 capitalize">
                          {landmark.type}
                        </p>
                      </div>
                      <span className="text-emerald-600 font-semibold">
                        {landmark.distance} km
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Inquiry Form */}
            <Card>
              <CardHeader>
                <CardTitle>Interested?</CardTitle>
                <CardDescription>Send inquiry to landlord</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={inquiryForm.name}
                      onChange={(e) =>
                        setInquiryForm({ ...inquiryForm, name: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={inquiryForm.email}
                      onChange={(e) =>
                        setInquiryForm({ ...inquiryForm, email: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      required
                      value={inquiryForm.phone}
                      onChange={(e) =>
                        setInquiryForm({ ...inquiryForm, phone: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Preferred Move Date
                    </label>
                    <input
                      type="date"
                      value={inquiryForm.moveDate}
                      onChange={(e) =>
                        setInquiryForm({
                          ...inquiryForm,
                          moveDate: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Message
                    </label>
                    <textarea
                      value={inquiryForm.message}
                      onChange={(e) =>
                        setInquiryForm({
                          ...inquiryForm,
                          message: e.target.value,
                        })
                      }
                      rows={4}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="Tell the landlord about yourself..."
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    <SendIcon className="w-4 h-4 mr-2" />
                    Send Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full h-12" variant="default">
                Pay & Secure Property
              </Button>
              <Button className="w-full h-12" variant="outline">
                Create Payment Group
              </Button>
            </div>

            {/* Agent Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Agent</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full mx-auto mb-3"></div>
                  <h3 className="font-bold text-slate-900">{listing.agent.name}</h3>
                  <p className="text-sm text-slate-600">
                    {listing.agent.agency}
                  </p>
                </div>

                <div className="space-y-2 mb-4 pb-4 border-b border-slate-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Rating:</span>
                    <div className="flex items-center gap-1">
                      <StarIcon className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-semibold text-slate-900">
                        {listing.agent.rating}
                      </span>
                      <span className="text-sm text-slate-500">
                        ({listing.agent.ratingCount})
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircleIcon className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-slate-600">
                      Verified License
                    </span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <Button variant="outline" className="w-full text-sm" size="sm">
                    <PhoneIcon className="w-4 h-4 mr-2" />
                    {listing.agent.phone}
                  </Button>
                  <Button variant="outline" className="w-full text-sm" size="sm">
                    <MailIcon className="w-4 h-4 mr-2" />
                    Email Agent
                  </Button>
                </div>

                <Button variant="ghost" className="w-full text-sm">
                  View Profile
                </Button>
              </CardContent>
            </Card>

            {/* Landlord Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Landlord</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full mx-auto mb-3"></div>
                  <h3 className="font-bold text-slate-900">{listing.landlord.name}</h3>
                  <p className="text-sm text-slate-600">
                    {listing.landlord.type === 'landlord'
                      ? 'Property Owner'
                      : 'Agent'}
                  </p>
                </div>

                <div className="space-y-2 mb-4 pb-4 border-b border-slate-200">
                  <div className="flex items-center text-sm text-slate-600">
                    <span className="flex-1">Response Time:</span>
                    <span className="font-semibold text-slate-900">
                      {listing.landlord.responseTime}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <span className="flex-1">Active Listings:</span>
                    <span className="font-semibold text-slate-900">
                      {listing.landlord.recentListings}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Button variant="outline" className="w-full text-sm" size="sm">
                    <PhoneIcon className="w-4 h-4 mr-2" />
                    Call
                  </Button>
                  <Button variant="outline" className="w-full text-sm" size="sm">
                    <MailIcon className="w-4 h-4 mr-2" />
                    Email
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Security badges */}
            <Card className="bg-emerald-50 border-emerald-200">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <ShieldCheckIcon className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-emerald-900">
                        Escrow Protected
                      </p>
                      <p className="text-emerald-700">
                        Your payment is secure
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-emerald-900">
                        GPS Verified
                      </p>
                      <p className="text-emerald-700">
                        Location confirmed
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileTextIcon className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-emerald-900">
                        Digital Lease
                      </p>
                      <p className="text-emerald-700">
                        Legally binding contract
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

// icon import
import { FileTextIcon } from 'lucide-react';
