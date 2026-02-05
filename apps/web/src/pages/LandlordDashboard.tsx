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
  EyeIcon,
  CreditCardIcon,
  BellIcon,
  BarChartIcon,
  PlusIcon,
} from 'lucide-react';

export default function LandlordDashboard() {
  // Mock data
  const stats = {
    totalListings: 3,
    activeListings: 2,
    totalViews: 145,
    pendingInquiries: 5,
    totalEarnings: 5800000,
    escrowBalance: 1200000,
  };

  const recentListings = [
    {
      id: '1',
      title: '3 Bedroom Apartment, Lekki Phase 1',
      status: 'verified',
      views: 62,
      inquiries: 3,
      rent: 1000000,
      agentFee: 10,
    },
    {
      id: '2',
      title: '2 Bedroom Flat, Victoria Island',
      status: 'verified',
      views: 48,
      inquiries: 2,
      rent: 800000,
      agentFee: 0,
    },
    {
      id: '3',
      title: 'Studio Apartment, Ajah',
      status: 'pending',
      views: 0,
      inquiries: 0,
      rent: 500000,
      agentFee: 12,
    },
  ];

  const recentInquiries = [
    {
      id: '1',
      property: '3 Bedroom Apartment, Lekki Phase 1',
      tenant: 'Chioma Okoro',
      message: 'Is the apartment still available? Interested in viewing.',
      status: 'pending',
      date: '2026-02-04',
    },
    {
      id: '2',
      property: '2 Bedroom Flat, Victoria Island',
      tenant: 'Adebayo Adeyemi',
      message: 'Can I move in by March 1st?',
      status: 'contacted',
      date: '2026-02-03',
    },
    {
      id: '3',
      property: '3 Bedroom Apartment, Lekki Phase 1',
      tenant: 'Zainab Ibrahim',
      message: 'What is the security deposit amount?',
      status: 'pending',
      date: '2026-02-02',
    },
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'verified':
        return 'verified';
      case 'pending':
        return 'pending';
      case 'rejected':
        return 'rejected';
      case 'contacted':
        return 'secondary';
      default:
        return 'default';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Landlord Dashboard
          </h1>
          <p className="text-slate-600">
            Manage your properties, inquiries, and earnings
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Active Listings"
            value={`${stats.activeListings}/${stats.totalListings}`}
            icon={<BuildingIcon className="w-6 h-6" />}
            description="Properties live"
          />
          <StatCard
            title="Total Views"
            value={stats.totalViews}
            icon={<EyeIcon className="w-6 h-6" />}
            change={12}
            trend="up"
          />
          <StatCard
            title="Total Earnings"
            value={`₦${(stats.totalEarnings / 1000000).toFixed(1)}M`}
            icon={<CreditCardIcon className="w-6 h-6" />}
            description="All time"
          />
          <StatCard
            title="Escrow Balance"
            value={`₦${(stats.escrowBalance / 1000000).toFixed(1)}M`}
            icon={<BellIcon className="w-6 h-6" />}
            description="Held in escrow"
          />
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Button className="h-12" variant="default">
            <PlusIcon className="w-5 h-5 mr-2" />
            Add New Listing
          </Button>
          <Button className="h-12" variant="outline">
            View All Payments
          </Button>
          <Button className="h-12" variant="outline">
            Manage Leases
          </Button>
        </div>

        {/* Recent Listings */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Your Properties</CardTitle>
            <CardDescription>Recent listings and their performance</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Property Title</TableHead>
                  <TableHead>Annual Rent</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Views</TableHead>
                  <TableHead>Inquiries</TableHead>
                  <TableHead>Agent Fee</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentListings.map((listing) => (
                  <TableRow key={listing.id}>
                    <TableCell className="font-medium">{listing.title}</TableCell>
                    <TableCell>₦{listing.rent.toLocaleString()}</TableCell>
                    <TableCell>
                      <Badge variant={getStatusVariant(listing.status)}>
                        {listing.status.charAt(0).toUpperCase() + listing.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>{listing.views}</TableCell>
                    <TableCell className="font-medium">{listing.inquiries}</TableCell>
                    <TableCell>
                      {listing.agentFee > 0
                        ? `${listing.agentFee}%`
                        : 'N/A'}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Recent Inquiries */}
        <Card>
          <CardHeader>
            <CardTitle>Pending Inquiries</CardTitle>
            <CardDescription>
              {stats.pendingInquiries} new inquiries from interested tenants
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Property</TableHead>
                  <TableHead>Tenant Name</TableHead>
                  <TableHead>Message</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentInquiries.map((inquiry) => (
                  <TableRow key={inquiry.id}>
                    <TableCell className="font-medium">{inquiry.property}</TableCell>
                    <TableCell>{inquiry.tenant}</TableCell>
                    <TableCell className="max-w-xs truncate">
                      {inquiry.message}
                    </TableCell>
                    <TableCell>
                      <Badge variant={getStatusVariant(inquiry.status)}>
                        {inquiry.status === 'pending' ? 'New' : 'Contacted'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {new Date(inquiry.date).toLocaleDateString()}
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
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
