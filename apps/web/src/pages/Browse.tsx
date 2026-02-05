'use client';

import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui';
import { ListingCard } from '@/components/listings/ListingCard';
import { SearchFilters, SearchFilters as SearchFiltersType } from '@/components/listings/SearchFilters';
import { LayoutGridIcon, ListIcon, MapPinIcon } from 'lucide-react';

export default function Browse() {
  const [sortBy, setSortBy] = useState<'newest' | 'price_low' | 'price_high' | 'views'>('newest');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filters, setFilters] = useState<SearchFiltersType>({});

  // Mock property data
  const allProperties = [
    {
      id: '1',
      title: '3 Bedroom Apartment, Lekki Phase 1',
      rent: 1000000,
      bedrooms: 3,
      bathrooms: 2,
      type: 'apartment',
      state: 'Lagos',
      city: 'Lekki',
      image:
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
      verified: true,
      views: 145,
      agent_fee: 10,
      amenities: ['WiFi', 'Generator', 'Security'],
    },
    {
      id: '2',
      title: '2 Bedroom Flat, Victoria Island',
      rent: 800000,
      bedrooms: 2,
      bathrooms: 1,
      type: 'apartment',
      state: 'Lagos',
      city: 'Victoria Island',
      image:
        'https://images.unsplash.com/photo-1545324418-cc1a9a6fded0?w=400&h=300&fit=crop',
      verified: true,
      views: 98,
      agent_fee: 0,
      amenities: ['WiFi', 'Parking'],
    },
    {
      id: '3',
      title: '4 Bedroom Detached House, Ikoyi',
      rent: 2500000,
      bedrooms: 4,
      bathrooms: 3,
      type: 'house',
      state: 'Lagos',
      city: 'Ikoyi',
      image:
        'https://images.unsplash.com/photo-1570129477492-45a003537e45?w=400&h=300&fit=crop',
      verified: true,
      views: 203,
      agent_fee: 15,
      amenities: ['Pool', 'Garden', 'Security'],
    },
    {
      id: '4',
      title: '1 Bedroom Studio, Yaba',
      rent: 450000,
      bedrooms: 1,
      bathrooms: 1,
      type: 'studio',
      state: 'Lagos',
      city: 'Yaba',
      image:
        'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=400&h=300&fit=crop',
      verified: true,
      views: 67,
      agent_fee: 0,
      amenities: ['WiFi'],
    },
    {
      id: '5',
      title: '3 Bedroom Penthouse, Banana Island',
      rent: 3500000,
      bedrooms: 3,
      bathrooms: 2,
      type: 'apartment',
      state: 'Lagos',
      city: 'Banana Island',
      image:
        'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=400&h=300&fit=crop',
      verified: true,
      views: 156,
      agent_fee: 12,
      amenities: ['Sea View', 'Gym', 'Restaurant'],
    },
    {
      id: '6',
      title: '2 Bedroom Apartment, Surulere',
      rent: 600000,
      bedrooms: 2,
      bathrooms: 1,
      type: 'apartment',
      state: 'Lagos',
      city: 'Surulere',
      image:
        'https://images.unsplash.com/photo-1554995207-c18231b6ce48?w=400&h=300&fit=crop',
      verified: true,
      views: 89,
      agent_fee: 8,
      amenities: ['WiFi', 'Security'],
    },
    {
      id: '7',
      title: '3 Bedroom Flat, Abuja Central',
      rent: 1200000,
      bedrooms: 3,
      bathrooms: 2,
      type: 'apartment',
      state: 'FCT',
      city: 'Abuja Central',
      image:
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
      verified: true,
      views: 121,
      agent_fee: 10,
      amenities: ['WiFi', 'Security', 'Pool'],
    },
    {
      id: '8',
      title: '2 Bedroom House, Wuse 2',
      rent: 950000,
      bedrooms: 2,
      bathrooms: 1,
      type: 'house',
      state: 'FCT',
      city: 'Wuse 2',
      image:
        'https://images.unsplash.com/photo-1570129477492-45a003537e45?w=400&h=300&fit=crop',
      verified: true,
      views: 78,
      agent_fee: 0,
      amenities: ['Garden', 'Security'],
    },
  ];

  // Filtered and sorted properties
  const filteredProperties = useMemo(() => {
    let result = allProperties;

    if (filters.search) {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(filters.search.toLowerCase())
      );
    }
    if (filters.state) {
      result = result.filter((p) => p.state === filters.state);
    }
    if (filters.city) {
      result = result.filter((p) => p.city === filters.city);
    }
    if (filters.propertyType) {
      result = result.filter((p) => p.type === filters.propertyType);
    }
    if (filters.bedrooms) {
      result = result.filter((p) => p.bedrooms === parseInt(filters.bedrooms));
    }
    if (filters.minPrice) {
      result = result.filter(
        (p) => p.rent >= parseInt(filters.minPrice)
      );
    }
    if (filters.maxPrice) {
      result = result.filter(
        (p) => p.rent <= parseInt(filters.maxPrice)
      );
    }
    if (filters.verified) {
      result = result.filter((p) => p.verified);
    }

    // Sort
    if (sortBy === 'price_low') {
      result.sort((a, b) => a.rent - b.rent);
    } else if (sortBy === 'price_high') {
      result.sort((a, b) => b.rent - a.rent);
    } else if (sortBy === 'popular') {
      result.sort((a, b) => b.views - a.views);
    }

    return result;
  }, [filters, sortBy]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-slate-900">Browse Properties</h1>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-emerald-100 text-emerald-600'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <LayoutGridIcon className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list'
                    ? 'bg-emerald-100 text-emerald-600'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <ListIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <Card>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-6 flex items-center gap-2">
                  <SlidersIcon className="w-5 h-5" />
                  Filters
                </h3>

                {/* Search */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Search
                  </label>
                  <input
                    type="text"
                    placeholder="Property name..."
                    value={filters.search}
                    onChange={(e) =>
                      setFilters({ ...filters, search: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>

                {/* State */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    State
                  </label>
                  <select
                    value={filters.state}
                    onChange={(e) =>
                      setFilters({ ...filters, state: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  >
                    <option value="">All States</option>
                    <option value="Lagos">Lagos</option>
                    <option value="FCT">FCT Abuja</option>
                    <option value="Port Harcourt">Port Harcourt</option>
                  </select>
                </div>

                {/* City */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    City
                  </label>
                  <select
                    value={filters.city}
                    onChange={(e) =>
                      setFilters({ ...filters, city: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  >
                    <option value="">All Cities</option>
                    <option value="Lekki">Lekki</option>
                    <option value="Victoria Island">Victoria Island</option>
                    <option value="Ikoyi">Ikoyi</option>
                    <option value="Yaba">Yaba</option>
                    <option value="Abuja Central">Abuja Central</option>
                    <option value="Wuse 2">Wuse 2</option>
                  </select>
                </div>

                {/* Property Type */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Type
                  </label>
                  <select
                    value={filters.propertyType}
                    onChange={(e) =>
                      setFilters({ ...filters, propertyType: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  >
                    <option value="">All Types</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="studio">Studio</option>
                    <option value="duplex">Duplex</option>
                  </select>
                </div>

                {/* Bedrooms */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Bedrooms
                  </label>
                  <select
                    value={filters.bedrooms}
                    onChange={(e) =>
                      setFilters({ ...filters, bedrooms: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  >
                    <option value="">Any</option>
                    <option value="1">1 Bedroom</option>
                    <option value="2">2 Bedrooms</option>
                    <option value="3">3 Bedrooms</option>
                    <option value="4">4+ Bedrooms</option>
                  </select>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Min. Price
                  </label>
                  <input
                    type="number"
                    placeholder="₦"
                    value={filters.minPrice}
                    onChange={(e) =>
                      setFilters({ ...filters, minPrice: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Max. Price
                  </label>
                  <input
                    type="number"
                    placeholder="₦"
                    value={filters.maxPrice}
                    onChange={(e) =>
                      setFilters({ ...filters, maxPrice: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>

                {/* Verified Only */}
                <div className="mb-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.verified}
                      onChange={(e) =>
                        setFilters({ ...filters, verified: e.target.checked })
                      }
                      className="w-4 h-4 rounded border-slate-300 text-emerald-600"
                    />
                    <span className="text-sm font-medium text-slate-700">
                      Verified Only
                    </span>
                  </label>
                </div>

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() =>
                    setFilters({
                      state: '',
                      city: '',
                      propertyType: '',
                      bedrooms: '',
                      minPrice: '',
                      maxPrice: '',
                      verified: true,
                      search: '',
                    })
                  }
                >
                  Clear Filters
                </Button>
              </div>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            {/* Sort Bar */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-slate-600 font-medium">
                {filteredProperties.length} properties found
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-600">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                >
                  <option value="newest">Newest</option>
                  <option value="price_low">Price: Low to High</option>
                  <option value="price_high">Price: High to Low</option>
                  <option value="popular">Most Popular</option>
                </select>
              </div>
            </div>

            {/* Grid View */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProperties.map((property) => (
                  <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="relative h-48 bg-slate-200 overflow-hidden">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                      />
                      {property.verified && (
                        <div className="absolute top-3 right-3">
                          <Badge variant="verified">
                            <ShieldCheckIcon className="w-3 h-3 mr-1" />
                            Verified
                          </Badge>
                        </div>
                      )}
                    </div>

                    <CardContent className="p-4">
                      <h3 className="font-semibold text-slate-900 mb-2 line-clamp-2">
                        {property.title}
                      </h3>

                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-2xl font-bold text-emerald-600">
                          ₦{(property.rent / 1000000).toFixed(1)}M
                        </span>
                        <span className="text-sm text-slate-500">/year</span>
                      </div>

                      <div className="flex gap-4 text-sm text-slate-600 mb-3">
                        <span>🛏️ {property.bedrooms} Beds</span>
                        <span>🚿 {property.bathrooms} Baths</span>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {property.amenities.slice(0, 2).map((amenity) => (
                          <Badge key={amenity} variant="secondary" className="text-xs">
                            {amenity}
                          </Badge>
                        ))}
                      </div>

                      <Button className="w-full" size="sm">
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              /* List View */
              <Card>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Property</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Beds</TableHead>
                        <TableHead>Annual Rent</TableHead>
                        <TableHead>Agent Fee</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredProperties.map((property) => (
                        <TableRow key={property.id}>
                          <TableCell className="font-medium max-w-xs truncate">
                            {property.title}
                          </TableCell>
                          <TableCell>
                            {property.city}, {property.state}
                          </TableCell>
                          <TableCell>{property.bedrooms}</TableCell>
                          <TableCell className="font-semibold">
                            ₦{property.rent.toLocaleString()}
                          </TableCell>
                          <TableCell>
                            {property.agent_fee > 0
                              ? `${property.agent_fee}%`
                              : 'N/A'}
                          </TableCell>
                          <TableCell>
                            <Badge variant="verified">Verified</Badge>
                          </TableCell>
                          <TableCell>
                            <Button size="sm" variant="outline">
                              View
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
