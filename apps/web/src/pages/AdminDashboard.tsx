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
  UsersIcon,
  BuildingIcon,
  AlertTriangleIcon,
  DollarSignIcon,
  TrendingUpIcon,
  ShieldIcon,
  ClipboardCheckIcon,
} from 'lucide-react';

export default function AdminDashboard() {
  // Mock data
  const stats = {
    totalUsers: 1245,
    totalListings: 342,
    verifiedListings: 298,
    totalEscrow: 45600000,
    platformRevenue: 3200000,
    activeDisputes: 8,
    allListingsCount: 342,
  };

  const pendingVerifications = [
    {
      id: '1',
      property: '5 Bedroom Villa, Banana Island',
      landlord: 'Chief Emeka Okafor',
      uploadDate: '2026-02-04',
      status: 'documents_uploaded',
      action: 'Review Documents',
    },
    {
      id: '2',
      property: '3 Bedroom Apartment, Lekki Penthouse',
      landlord: 'Dr. Adeolu Akande',
      uploadDate: '2026-02-03',
      status: 'gps_captured',
      action: 'Verify GPS',
    },
    {
      id: '3',
      property: '2 Bedroom Flat, Glover Road',
      landlord: 'Mrs. Folake Adeniyi',
      uploadDate: '2026-02-02',
      status: 'pending_review',
      action: 'Admin Review',
    },
  ];

  const flaggedListings = [
    {
      id: '1',
      property: '4 Bedroom House, Shomolu',
      reason: 'Multiple fraud reports',
      reportCount: 5,
      flagDate: '2026-02-01',
      action: 'Investigate',
    },
    {
      id: '2',
      property: '3 Bedroom Apartment, Ikoyi',
      reason: 'GPS mismatch detected',
      reportCount: 2,
      flagDate: '2026-01-28',
      action: 'Request Clarification',
    },
    {
      id: '3',
      property: '2 Bedroom Flat, Yaba',
      reason: 'Document authentication failed',
      reportCount: 1,
      flagDate: '2026-01-25',
      action: 'Review',
    },
  ];

  const activeDisputes = [
    {
      id: '1',
      payment: 'PAY-2026-001',
      tenant: 'Chioma Okoro',
      landlord: 'John Okonkwo',
      amount: 1000000,
      reason: 'Property not as described',
      status: 'under_review',
      date: '2026-02-02',
    },
    {
      id: '2',
      payment: 'PAY-2026-002',
      tenant: 'Adebayo Adeyemi',
      landlord: 'Jane Adeyemi',
      amount: 750000,
      reason: 'Delayed refund',
      status: 'awaiting_response',
      date: '2026-01-30',
    },
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'documents_uploaded':
      case 'gps_captured':
        return 'pending';
      case 'pending_review':
        return 'pending';
      case 'verified':
        return 'verified';
      case 'rejected':
        return 'rejected';
      case 'under_review':
      case 'awaiting_response':
        return 'pending';
      default:
        return 'secondary';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Admin Dashboard
          </h1>
          <p className="text-slate-600">
            Platform overview, verification, and dispute management
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Users"
            value={stats.totalUsers}
            icon={<UsersIcon className="w-6 h-6" />}
            change={5}
            trend="up"
          />
          <StatCard
            title="Total Listings"
            value={stats.totalListings}
            icon={<BuildingIcon className="w-6 h-6" />}
            description={`${stats.verifiedListings} verified`}
          />
          <StatCard
            title="Platform Revenue"
            value={`₦${(stats.platformRevenue / 1000000).toFixed(1)}M`}
            icon={<DollarSignIcon className="w-6 h-6" />}
            description="This month"
          />
          <StatCard
            title="In Escrow"
            value={`₦${(stats.totalEscrow / 1000000).toFixed(1)}M`}
            icon={<ShieldIcon className="w-6 h-6" />}
            description="Held securely"
          />
        </div>

        {/* Alert Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="border-yellow-200 bg-yellow-50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <AlertTriangleIcon className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-yellow-900">Pending Verifications</p>
                  <p className="text-2xl font-bold text-yellow-700 mt-1">
                    {pendingVerifications.length}
                  </p>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="mt-2 text-yellow-700 hover:text-yellow-900"
                  >
                    Review Now →
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-red-50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <ShieldIcon className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-red-900">Flagged Listings</p>
                  <p className="text-2xl font-bold text-red-700 mt-1">
                    {flaggedListings.length}
                  </p>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="mt-2 text-red-700 hover:text-red-900"
                  >
                    Investigate →
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-orange-50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <AlertTriangleIcon className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-orange-900">Active Disputes</p>
                  <p className="text-2xl font-bold text-orange-700 mt-1">
                    {stats.activeDisputes}
                  </p>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="mt-2 text-orange-700 hover:text-orange-900"
                  >
                    Manage →
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Admin Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Button className="h-12" variant="outline">
            View All Users
          </Button>
          <Button className="h-12" variant="outline">
            Analytics & Reports
          </Button>
          <Button className="h-12" variant="outline">
            Manage Escrow
          </Button>
          <Button className="h-12" variant="outline">
            View Audit Logs
          </Button>
        </div>

        {/* Pending Verifications */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Pending Verifications</CardTitle>
            <CardDescription>
              {pendingVerifications.length} listings awaiting verification
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Property</TableHead>
                  <TableHead>Landlord</TableHead>
                  <TableHead>Upload Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pendingVerifications.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.property}</TableCell>
                    <TableCell>{item.landlord}</TableCell>
                    <TableCell>
                      {new Date(item.uploadDate).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <Badge variant={getStatusVariant(item.status)}>
                        {item.status.replace(/_/g, ' ')}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline">
                        {item.action}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Flagged Listings */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Flagged Listings</CardTitle>
            <CardDescription>Properties under investigation</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Property</TableHead>
                  <TableHead>Reason</TableHead>
                  <TableHead>Reports</TableHead>
                  <TableHead>Flag Date</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {flaggedListings.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.property}</TableCell>
                    <TableCell>{item.reason}</TableCell>
                    <TableCell>
                      <Badge variant="destructive">{item.reportCount}</Badge>
                    </TableCell>
                    <TableCell>
                      {new Date(item.flagDate).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <Button size="sm" variant="destructive">
                        {item.action}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Active Disputes */}
        <Card>
          <CardHeader>
            <CardTitle>Active Disputes</CardTitle>
            <CardDescription>Payment disputes pending resolution</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Payment ID</TableHead>
                  <TableHead>Tenant</TableHead>
                  <TableHead>Landlord</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Reason</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {activeDisputes.map((dispute) => (
                  <TableRow key={dispute.id}>
                    <TableCell className="font-mono text-sm">
                      {dispute.payment}
                    </TableCell>
                    <TableCell>{dispute.tenant}</TableCell>
                    <TableCell>{dispute.landlord}</TableCell>
                    <TableCell className="font-semibold">
                      ₦{dispute.amount.toLocaleString()}
                    </TableCell>
                    <TableCell className="max-w-xs truncate">
                      {dispute.reason}
                    </TableCell>
                    <TableCell>
                      <Badge variant={getStatusVariant(dispute.status)}>
                        {dispute.status.replace(/_/g, ' ')}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline">
                        Review
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
