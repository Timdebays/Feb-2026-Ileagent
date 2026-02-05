'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui';
import { ListingCard } from '@/components/listings/ListingCard';
import { SearchFilters } from '@/components/listings/SearchFilters';
import {
  ShieldCheckIcon,
  CheckCircleIcon,
  MapPinIcon,
  TrendingUpIcon,
} from 'lucide-react';

// Mock featured listings
const FEATURED_LISTINGS = [
  {
    id: '1',
    title: '3 Bedroom Apartment, Lekki Phase 1',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=400&fit=crop',
    city: 'Lagos',
    state: 'Lagos',
    rentAmount: 1000000,
    agentFeePercentage: 10,
    bedrooms: 3,
    bathrooms: 2,
    verificationStatus: 'verified' as const,
    viewsCount: 62,
  },
  {
    id: '2',
    title: '2 Bedroom Flat, Victoria Island',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=400&fit=crop',
    city: 'Lagos',
    state: 'Lagos',
    rentAmount: 800000,
    agentFeePercentage: 0,
    bedrooms: 2,
    bathrooms: 1,
    verificationStatus: 'verified' as const,
    viewsCount: 48,
  },
  {
    id: '3',
    title: 'Studio Apartment, Ajah',
    image: 'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=500&h=400&fit=crop',
    city: 'Lagos',
    state: 'Lagos',
    rentAmount: 500000,
    agentFeePercentage: 12,
    bedrooms: 1,
    bathrooms: 1,
    verificationStatus: 'verified' as const,
    viewsCount: 35,
  },
  {
    id: '4',
    title: '4 Bedroom House, Ikoyi',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=400&fit=crop',
    city: 'Lagos',
    state: 'Lagos',
    rentAmount: 2500000,
    agentFeePercentage: 15,
    bedrooms: 4,
    bathrooms: 3,
    verificationStatus: 'verified' as const,
    viewsCount: 89,
  },
  {
    id: '5',
    title: 'Luxury Penthouse, Banana Island',
    image: 'https://images.unsplash.com/photo-1512917774080-9a485d8e7e80?w=500&h=400&fit=crop',
    city: 'Lagos',
    state: 'Lagos',
    rentAmount: 5000000,
    agentFeePercentage: 8,
    bedrooms: 5,
    bathrooms: 4,
    verificationStatus: 'verified' as const,
    viewsCount: 156,
  },
  {
    id: '6',
    title: '2 Bedroom Flat, Gbagada',
    image: 'https://images.unsplash.com/photo-1470146892562-138e33ce9a97?w=500&h=400&fit=crop',
    city: 'Lagos',
    state: 'Lagos',
    rentAmount: 600000,
    agentFeePercentage: 0,
    bedrooms: 2,
    bathrooms: 1,
    verificationStatus: 'verified' as const,
    viewsCount: 28,
  },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const stats = [
    {
      title: 'Verified Properties',
      value: '2,450+',
      icon: ShieldCheckIcon,
      color: 'emerald',
    },
    {
      title: 'Happy Tenants',
      value: '15,000+',
      icon: CheckCircleIcon,
      color: 'blue',
    },
    {
      title: 'Cities Covered',
      value: '24+',
      icon: MapPinIcon,
      color: 'purple',
    },
    {
      title: 'Monthly Growth',
      value: '18%',
      icon: TrendingUpIcon,
      color: 'amber',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-emerald-50 to-teal-50 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200 rounded-full opacity-20 -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200 rounded-full opacity-20 -ml-48 -mb-48"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Find Your Perfect <span className="text-emerald-600">Home</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Discover 100% verified properties with secure escrow protection, digital leases, and verified landlords across Nigeria
            </p>

            {/* Search Bar */}
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search by location or property type..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <Button className="px-6">Search</Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.title}
                  className="bg-white rounded-lg p-6 shadow-sm border border-slate-100"
                >
                  <Icon className="w-10 h-10 mb-3 text-emerald-600" />
                  <p className="text-sm text-slate-600 mb-1">{stat.title}</p>
                  <p className="text-3xl font-bold text-slate-900">
                    {stat.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="bg-slate-50 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Why Choose IleAgent?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Escrow Protection',
                description:
                  'All payments held securely in escrow until move-in is confirmed. Your money is safe.',
                icon: '🔒',
              },
              {
                title: 'Verified Properties',
                description:
                  'Every property verified with GPS coordinates and document authentication.',
                icon: '✓',
              },
              {
                title: 'Digital Leases',
                description:
                  'Legally enforceable digital lease agreements with e-signature capability.',
                icon: '📄',
              },
            ].map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Listings Section */}
      <div className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Featured Listings
            </h2>
            <p className="text-slate-600 mb-6">
              Browse our curated selection of verified properties across Nigeria
            </p>
            <Button variant="outline">Browse All Properties</Button>
          </div>

          {/* Listings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_LISTINGS.slice(0, 6).map((listing) => (
              <ListingCard
                key={listing.id}
                {...listing}
                onClick={() => console.log('Navigate to listing:', listing.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Sections */}
      <div className="bg-slate-50 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* For Tenants */}
            <div className="bg-white rounded-lg p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                For Tenants
              </h3>
              <p className="text-slate-600 mb-6">
                Find verified properties, make secure payments, and sign digital leases with confidence.
              </p>
              <Button className="w-full">Start Browsing</Button>
            </div>

            {/* For Landlords & Agents */}
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-3">For Landlords & Agents</h3>
              <p className="text-emerald-50 mb-6">
                List your properties, connect with verified tenants, and earn commissions.
              </p>
              <Button variant="default" className="w-full bg-white text-emerald-600 hover:bg-emerald-50">
                List a Property
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">For Tenants</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Browse</a></li>
                <li><a href="#" className="hover:text-white">My Dashboard</a></li>
                <li><a href="#" className="hover:text-white">Help</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">For Landlords</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">List Property</a></li>
                <li><a href="#" className="hover:text-white">Dashboard</a></li>
                <li><a href="#" className="hover:text-white">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Safety</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>&copy; 2026 IleAgent. All rights reserved. Nigeria's trusted rental platform.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
