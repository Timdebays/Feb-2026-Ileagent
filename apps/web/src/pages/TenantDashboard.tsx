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
import { HomeIcon, CreditCardIcon, FileTextIcon, ClipboardListIcon } from 'lucide-react';

export default function TenantDashboard() {
  // Mock data - in real app, fetch from API
  const stats = {
    activeLeases: 2,
    totalPaid: 2500000,
    pendingApplications: 1,
  };

  const recentLeases = [
    {
      id: '1',
      property: '3 Bedroom Apartment, Lekki Phase 1',
      landlord: 'John Okonkwo',
      rent: 1000000,
      startDate: '2026-01-15',
      endDate: '2027-01-15',
      status: 'active',
      daysRemaining: 314,
    },
    {
      id: '2',
      property: '2 Bedroom Flat, Victoria Island',
      landlord: 'Jane Adeyemi',
      rent: 800000,
      startDate: '2025-06-01',
      endDate: '2026-06-01',
      status: 'expiring_soon',
      daysRemaining: 117,
    },
  ];

  const paymentHistory = [
    {
      id: '1',
      property: '3 Bedroom Apartment, Lekki Phase 1',
      amount: 1020000,
      type: 'initial',
      status: 'released',
      date: '2026-01-10',
      platformFee: 20000,
    },
    {
      id: '2',
      property: '2 Bedroom Flat, Victoria Island',
      amount: 808000,
      type: 'initial',
      status: 'held',
      date: '2025-12-28',
      platformFee: 16000,
    },
    {
      id: '3',
      property: '3 Bedroom Apartment, Lekki Phase 1',
      amount: 1010000,
      type: 'renewal',
      status: 'released',
      date: '2025-12-15',
      platformFee: 10000,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'verified';
      case 'held':
        return 'pending';
      case 'released':
        return 'verified';
      case 'expiring_soon':
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
            Welcome back, Tenant
          </h1>
          <p className="text-slate-600">
            Manage your leases, payments, and applications all in one place
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <StatCard
            title="Active Leases"
            value={stats.activeLeases}
            icon={<HomeIcon className="w-6 h-6" />}
            description="Currently renting"
          />
          <StatCard
            title="Total Paid"
            value={`₦${(stats.totalPaid / 1000000).toFixed(1)}M`}
            icon={<CreditCardIcon className="w-6 h-6" />}
            description="This lease term"
          />
          <StatCard
            title="Pending Applications"
            value={stats.pendingApplications}
            icon={<ClipboardListIcon className="w-6 h-6" />}
            description="Awaiting landlord response"
          />
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Button className="h-12" variant="default">
            Browse Properties
          </Button>
          <Button className="h-12" variant="outline">
            My Payments
          </Button>
          <Button className="h-12" variant="outline">
            My Leases
          </Button>
          <Button className="h-12" variant="outline">
            My Applications
          </Button>
        </div>

        {/* Recent Leases */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Recent Leases</CardTitle>
            <CardDescription>Your currently active and upcoming leases</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Property</TableHead>
                  <TableHead>Landlord</TableHead>
                  <TableHead>Monthly Rent</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Days Left</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentLeases.map((lease) => (
                  <TableRow key={lease.id}>
                    <TableCell className="font-medium">{lease.property}</TableCell>
                    <TableCell>{lease.landlord}</TableCell>
                    <TableCell>₦{(lease.rent / 12).toLocaleString()}</TableCell>
                    <TableCell className="text-sm">
                      {new Date(lease.startDate).toLocaleDateString()} -{' '}
                      {new Date(lease.endDate).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <Badge variant={getStatusColor(lease.status)}>
                        {lease.status === 'active'
                          ? 'Active'
                          : lease.status === 'expiring_soon'
                          ? 'Expiring Soon'
                          : lease.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <span className="font-medium">{lease.daysRemaining} days</span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Payment History */}
        <Card>
          <CardHeader>
            <CardTitle>Payment History</CardTitle>
            <CardDescription>Your recent transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Property</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Platform Fee</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paymentHistory.map((payment) => (
                  <TableRow key={payment.id}>
                    <TableCell className="font-medium">{payment.property}</TableCell>
                    <TableCell className="font-semibold">
                      ₦{payment.amount.toLocaleString()}
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">
                        {payment.type === 'initial' ? 'Initial' : 'Renewal'}
                      </Badge>
                    </TableCell>
                    <TableCell>₦{payment.platformFee.toLocaleString()}</TableCell>
                    <TableCell>
                      <Badge variant={getStatusColor(payment.status)}>
                        {payment.status === 'held' ? 'In Escrow' : 'Released'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {new Date(payment.date).toLocaleDateString()}
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
