'use client';

import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  StatCard,
  Button,
  Badge,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui';
import {
  BuildingIcon,
  TrendingUpIcon,
  DollarSignIcon,
  AlertCircleIcon,
  CheckCircleIcon,
  PlusIcon,
} from 'lucide-react';

export default function AgentDashboard() {
  // Mock data
  const stats = {
    activeListings: 8,
    totalProperties: 12,
    totalViews: 312,
    commissionsEarned: 4200000,
    pendingCommissions: 1500000,
    licenseVerified: true,
  };

  const recentListings = [
    {
      id: '1',
      title: '4 Bedroom Detached House, Ikoyi',
      landlord: 'Dr. Afolabi Okafor',
      commission: 15,
      rent: 2500000,
      status: 'verified',
      views: 89,
    },
    {
      id: '2',
      title: '2 Bedroom Apartment, Mushin',
      landlord: 'Mrs. Grace Ikechukwu',
      commission: 12,
      rent: 750000,
      status: 'verified',
      views: 54,
    },
    {
      id: '3',
      title: '3 Bedroom Flat, Surulere',
      landlord: 'Mr. Segun Adebayo',
      commission: 18,
      rent: 1200000,
      status: 'pending',
      views: 0,
    },
  ];

  const commissions = [
    {
      id: '1',
      property: '4 Bedroom Detached House, Ikoyi',
      tenant: 'Chinyere Nwabueze',
      commission: 375000,
      contractRent: 2500000,
      status: 'approved',
      date: '2026-01-20',
    },
    {
      id: '2',
      property: '2 Bedroom Apartment, Mushin',
      tenant: 'Amara Obi',
      commission: 90000,
      contractRent: 750000,
      status: 'pending',
      date: '2026-01-28',
    },
    {
      id: '3',
      property: '3 Bedroom Flat, VI',
      tenant: 'David Okonkwo',
      commission: 240000,
      contractRent: 2000000,
      status: 'paid',
      date: '2026-01-10',
    },
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'verified':
        return 'verified';
      case 'pending':
        return 'pending';
      case 'approved':
        return 'verified';
      case 'paid':
        return 'verified';
      case 'rejected':
        return 'rejected';
      default:
        return 'secondary';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Agent Dashboard
            </h1>
            <p className="text-slate-600">
              Track your properties, commissions, and earnings
            </p>
          </div>
          {!stats.licenseVerified && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex gap-2 max-w-xs">
              <AlertCircleIcon className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-yellow-900">License Not Verified</p>
                <p className="text-sm text-yellow-700">Complete verification to start listing properties</p>
              </div>
            </div>
          )}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Active Listings"
            value={`${stats.activeListings}/${stats.totalProperties}`}
            icon={<BuildingIcon className="w-6 h-6" />}
            description="Properties listed"
          />
          <StatCard
            title="Total Views"
            value={stats.totalViews}
            icon={<TrendingUpIcon className="w-6 h-6" />}
            change={25}
            trend="up"
          />
          <StatCard
            title="Commissions Earned"
            value={`₦${(stats.commissionsEarned / 1000000).toFixed(1)}M`}
            icon={<DollarSignIcon className="w-6 h-6" />}
            description="All time"
          />
          <StatCard
            title="Pending Commissions"
            value={`₦${(stats.pendingCommissions / 1000000).toFixed(1)}M`}
            icon={<TrendingUpIcon className="w-6 h-6" />}
            description="Awaiting payout"
          />
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Button className="h-12" variant="default">
            <PlusIcon className="w-5 h-5 mr-2" />
            List New Property
          </Button>
          <Button className="h-12" variant="outline">
            View All Commissions
          </Button>
          <Button className="h-12" variant="outline">
            Manage Inquiries
          </Button>
        </div>

        {/* Active Listings */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Your Listings</CardTitle>
            <CardDescription>Properties you are marketing</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Property Title</TableHead>
                  <TableHead>Landlord</TableHead>
                  <TableHead>Annual Rent</TableHead>
                  <TableHead>Commission %</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Views</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentListings.map((listing) => (
                  <TableRow key={listing.id}>
                    <TableCell className="font-medium">{listing.title}</TableCell>
                    <TableCell>{listing.landlord}</TableCell>
                    <TableCell>₦{listing.rent.toLocaleString()}</TableCell>
                    <TableCell className="font-semibold">{listing.commission}%</TableCell>
                    <TableCell>
                      <Badge variant={getStatusVariant(listing.status)}>
                        {listing.status.charAt(0).toUpperCase() + listing.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>{listing.views}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Commissions */}
        <Card>
          <CardHeader>
            <CardTitle>Commission Tracking</CardTitle>
            <CardDescription>Your earnings from successful rentals</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Property</TableHead>
                  <TableHead>Tenant</TableHead>
                  <TableHead>Contract Rent</TableHead>
                  <TableHead>Commission</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {commissions.map((commission) => (
                  <TableRow key={commission.id}>
                    <TableCell className="font-medium">{commission.property}</TableCell>
                    <TableCell>{commission.tenant}</TableCell>
                    <TableCell>₦{commission.contractRent.toLocaleString()}</TableCell>
                    <TableCell className="font-semibold text-emerald-600">
                      ₦{commission.commission.toLocaleString()}
                    </TableCell>
                    <TableCell>
                      <Badge variant={getStatusVariant(commission.status)}>
                        {commission.status.charAt(0).toUpperCase() + commission.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {new Date(commission.date).toLocaleDateString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
