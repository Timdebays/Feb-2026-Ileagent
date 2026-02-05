'use client';

import React from 'react';
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
  StarIcon,
  CheckCircleIcon,
  BuildingIcon,
  TrendingUpIcon,
  MessageSquareIcon,
  ShareIcon,
  ChevronLeftIcon,
} from 'lucide-react';

export default function AgentProfile() {
  const agent = {
    id: 'agent_1',
    name: 'Chisom Nwosu',
    agency: 'Prime Properties Lagos',
    bio: 'Experienced real estate agent specializing in premium properties in Lagos. Over 8 years in the industry with a track record of successful transactions and satisfied clients.',
    rating: 4.8,
    ratingCount: 124,
    verified: true,
    licenseNumber: 'RE2024001',
    licenseVerifiedDate: '2024-03-15',
    yearsExperience: 8,
    propertiesSold: 156,
    totalEarnings: 45600000,
    phone: '+234 803 456 7890',
    whatsapp: '+234 803 456 7890',
    email: 'chisom@primeproperties.ng',
    officeAddress: '123 Lekki-Epe Expressway, Lekki, Lagos',
    photo:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    areasServed: ['Lekki', 'Victoria Island', 'Ikoyi', 'Banana Island', 'Ajah'],
    specialties: ['Residential', 'Luxury Properties', 'Student Housing'],
    responseTime: '< 30 minutes',
    activeListings: 12,
  };

  const listings = [
    {
      id: '1',
      title: '3 Bedroom Apartment, Lekki Phase 1',
      rent: 1000000,
      bedrooms: 3,
      bathrooms: 2,
      image:
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
      verified: true,
      views: 145,
      commission: 10,
    },
    {
      id: '2',
      title: '2 Bedroom Flat, Victoria Island',
      rent: 800000,
      bedrooms: 2,
      bathrooms: 1,
      image:
        'https://images.unsplash.com/photo-1545324418-cc1a9a6fded0?w=400&h=300&fit=crop',
      verified: true,
      views: 98,
      commission: 0,
    },
    {
      id: '3',
      title: '4 Bedroom Detached House, Ikoyi',
      rent: 2500000,
      bedrooms: 4,
      bathrooms: 3,
      image:
        'https://images.unsplash.com/photo-1570129477492-45a003537e45?w=400&h=300&fit=crop',
      verified: true,
      views: 203,
      commission: 15,
    },
    {
      id: '4',
      title: '1 Bedroom Studio, Yaba',
      rent: 450000,
      bedrooms: 1,
      bathrooms: 1,
      image:
        'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=400&h=300&fit=crop',
      verified: true,
      views: 67,
      commission: 12,
    },
    {
      id: '5',
      title: '3 Bedroom Penthouse, Banana Island',
      rent: 3500000,
      bedrooms: 3,
      bathrooms: 2,
      image:
        'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=400&h=300&fit=crop',
      verified: true,
      views: 156,
      commission: 12,
    },
    {
      id: '6',
      title: '2 Bedroom Apartment, Surulere',
      rent: 600000,
      bedrooms: 2,
      bathrooms: 1,
      image:
        'https://images.unsplash.com/photo-1554995207-c18231b6ce48?w=400&h=300&fit=crop',
      verified: true,
      views: 89,
      commission: 8,
    },
  ];

  const reviews = [
    {
      id: '1',
      reviewer: 'Adebayo Adeyemi',
      rating: 5,
      comment:
        'Excellent service! Chisom helped me find my dream apartment and made the whole process smooth and transparent.',
      date: '2026-01-20',
    },
    {
      id: '2',
      reviewer: 'Zainab Ibrahim',
      rating: 5,
      comment:
        'Professional, responsive, and knowledgeable. Highly recommended!',
      date: '2026-01-10',
    },
    {
      id: '3',
      reviewer: 'David Okonkwo',
      rating: 4,
      comment:
        'Good communication and helped me negotiate a better deal. Very happy with the service.',
      date: '2025-12-28',
    },
  ];

  const stats = [
    { label: 'Properties Sold', value: agent.propertiesSold },
    { label: 'Years Experience', value: agent.yearsExperience },
    { label: 'Active Listings', value: agent.activeListings },
    {
      label: 'Avg. Response Time',
      value: agent.responseTime,
    },
  ];

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
        {/* Agent Header Card */}
        <Card className="mb-8">
          <CardContent className="pt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Profile Section */}
              <div className="md:col-span-1 flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-emerald-200">
                  <img
                    src={agent.photo}
                    alt={agent.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="text-3xl font-bold text-slate-900 text-center mb-1">
                  {agent.name}
                </h1>
                <p className="text-lg text-slate-600 text-center mb-4">
                  {agent.agency}
                </p>

                {/* Rating */}
                <div className="flex items-center justify-center gap-2 mb-6 bg-yellow-50 px-4 py-2 rounded-full">
                  <StarIcon className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span className="font-bold text-yellow-900">
                    {agent.rating}
                  </span>
                  <span className="text-sm text-yellow-700">
                    ({agent.ratingCount} reviews)
                  </span>
                </div>

                {/* Verification Badge */}
                {agent.verified && (
                  <Badge variant="verified" className="mb-6">
                    <CheckCircleIcon className="w-4 h-4 mr-1" />
                    License Verified
                  </Badge>
                )}

                {/* Contact Buttons */}
                <div className="w-full space-y-2">
                  <Button className="w-full">
                    <MessageSquareIcon className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                  <Button variant="outline" className="w-full">
                    <PhoneIcon className="w-4 h-4 mr-2" />
                    Call
                  </Button>
                  <Button variant="outline" className="w-full">
                    <ShareIcon className="w-4 h-4 mr-2" />
                    Share Profile
                  </Button>
                </div>
              </div>

              {/* Info Section */}
              <div className="md:col-span-2">
                {/* Bio */}
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-slate-900 mb-3">
                    About {agent.name}
                  </h2>
                  <p className="text-slate-700 leading-relaxed">{agent.bio}</p>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <p className="text-sm text-slate-600 mb-1">Email</p>
                    <a
                      href={`mailto:${agent.email}`}
                      className="font-semibold text-emerald-600 hover:text-emerald-700"
                    >
                      {agent.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 mb-1">Phone</p>
                    <a
                      href={`tel:${agent.phone}`}
                      className="font-semibold text-emerald-600 hover:text-emerald-700"
                    >
                      {agent.phone}
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 mb-1">Office Address</p>
                    <p className="font-semibold text-slate-900">
                      {agent.officeAddress}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 mb-1">
                      License Number
                    </p>
                    <p className="font-semibold text-slate-900">
                      {agent.licenseNumber}
                    </p>
                  </div>
                </div>

                {/* Specialties & Areas */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm font-semibold text-slate-700 mb-2">
                      Specialties
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {agent.specialties.map((specialty) => (
                        <Badge key={specialty} variant="secondary">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-700 mb-2">
                      Service Areas
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {agent.areasServed.map((area) => (
                        <Badge key={area} variant="default">
                          <MapPinIcon className="w-3 h-3 mr-1" />
                          {area}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="pt-6 text-center">
                <p className="text-3xl font-bold text-emerald-600 mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Active Listings */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Active Listings</CardTitle>
                <CardDescription>
                  {listings.length} properties currently listed
                </CardDescription>
              </div>
              <Badge variant="default">{agent.activeListings} Active</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {listings.map((listing) => (
                <div
                  key={listing.id}
                  className="border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="relative h-48 bg-slate-200">
                    <img
                      src={listing.image}
                      alt={listing.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                    {listing.verified && (
                      <div className="absolute top-3 right-3">
                        <Badge variant="verified">Verified</Badge>
                      </div>
                    )}
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold text-slate-900 mb-2 line-clamp-2">
                      {listing.title}
                    </h3>

                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-xl font-bold text-emerald-600">
                        ₦{(listing.rent / 1000000).toFixed(1)}M
                      </span>
                      <span className="text-sm text-slate-500">/year</span>
                    </div>

                    <div className="flex gap-4 text-sm text-slate-600 mb-3">
                      <span>🛏️ {listing.bedrooms}</span>
                      <span>🚿 {listing.bathrooms}</span>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-slate-200">
                      <span className="text-xs text-slate-500">
                        👁️ {listing.views} views
                      </span>
                      {listing.commission > 0 && (
                        <Badge variant="secondary" className="text-xs">
                          {listing.commission}% Commission
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Client Reviews */}
        <Card>
          <CardHeader>
            <CardTitle>Client Reviews</CardTitle>
            <CardDescription>
              What people are saying about working with {agent.name}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="pb-6 border-b border-slate-200 last:border-0"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-slate-900">
                      {review.reviewer}
                    </h4>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? 'text-yellow-500 fill-yellow-500'
                              : 'text-slate-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-700 mb-2">{review.comment}</p>
                  <p className="text-xs text-slate-500">
                    {new Date(review.date).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
